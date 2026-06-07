"""依例句生成配圖（gpt-image-2）並壓縮成小 JPG。
用法： python gen_sentences.py <worker_index> <worker_count>
只處理 idx % worker_count == worker_index 的句子；已存在的檔案自動跳過（可重跑補圖）。
"""
import os, sys, json, base64, time, io, random, re
from pathlib import Path
from PIL import Image

# 讀取 OPENAI_API_KEY（全域 ~/.openai.env 優先）
def load_env(p, override=True):
    p = Path(p)
    if not p.exists(): return
    for line in p.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            k, v = line.split("=", 1); k = k.strip(); v = v.strip().strip('"').strip("'")
            if override or k not in os.environ: os.environ[k] = v
load_env(Path.home() / ".openai.env")

from openai import OpenAI
client = OpenAI()

ROOT = Path(__file__).parent
data = json.loads((ROOT / "sentences.json").read_text(encoding="utf-8"))
wi = int(sys.argv[1]) if len(sys.argv) > 1 else 0
wc = int(sys.argv[2]) if len(sys.argv) > 2 else 1

STYLE = ("anime illustration in the style of a Taisho-era Japanese sword-fighting story, "
         "soft cinematic lighting, detailed background, expressive characters, no text, no words")
SIZE = 448  # 壓縮後邊長

done = skipped = failed = 0
for idx, item in enumerate(data):
    if idx % wc != wi:
        continue
    out = ROOT / item["img"]
    if out.exists() and out.stat().st_size > 0:
        skipped += 1; continue
    out.parent.mkdir(parents=True, exist_ok=True)
    prompt = f"{STYLE}. Scene: {item['en']}"
    for attempt in range(9):
        try:
            r = client.images.generate(model="gpt-image-2", prompt=prompt,
                                       size="1024x1024", quality="low", n=1)
            raw = base64.b64decode(r.data[0].b64_json)
            im = Image.open(io.BytesIO(raw)).convert("RGB")
            im = im.resize((SIZE, SIZE), Image.LANCZOS)
            im.save(out, "JPEG", quality=72, optimize=True)
            done += 1
            print(f"[OK] {item['img']} ({out.stat().st_size//1024}KB)", flush=True)
            time.sleep(1.5)  # 成功後小間隔，降低觸發 429
            break
        except Exception as e:
            msg = str(e)
            m = re.search(r"try again in ([\d.]+)s", msg)
            wait = float(m.group(1)) + 1 if m else min(60, 8 * (2 ** attempt))
            wait += random.uniform(0, 3)
            print(f"[RETRY {attempt+1}] {item['img']}: {msg[:70]} -> wait {wait:.0f}s", flush=True)
            time.sleep(wait)
    else:
        failed += 1
        print(f"[FAIL] {item['img']}", flush=True)

print(f"worker {wi}/{wc} 完成：生成 {done}、跳過 {skipped}、失敗 {failed}", flush=True)
