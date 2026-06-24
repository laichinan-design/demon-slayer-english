"""生成 13 關封面（gpt-image-2），壓縮為 ~768px JPG -> covers/coverNN.jpg。已存在則跳過。"""
import os, sys, base64, time, io, random, re
from pathlib import Path
from PIL import Image

def load_env(p):
    p=Path(p)
    if not p.exists(): return
    for line in p.read_text(encoding="utf-8").splitlines():
        line=line.strip()
        if line and not line.startswith("#") and "=" in line:
            k,v=line.split("=",1); os.environ[k.strip()]=v.strip().strip('"').strip("'")
load_env(Path.home()/".openai.env")
from openai import OpenAI
client=OpenAI()
ROOT=Path(__file__).parent

STYLE="anime illustration, Taisho-era Japanese demon-slayer style, cinematic dramatic lighting, detailed, no text, no words"
PROMPTS=[
 "a sinister spider demon with glowing eyes among pale threads in a dark web-covered forest at night",
 "frightened lesser demons kneeling before a shadowy demon king in an endless dark void, ominous",
 "a trembling female demon fading into glowing dust before a cold shadowy demon king",
 "a demon running in terror and dissolving into dust inside a black void, motion blur",
 "a proud kneeling demon facing a merciless demon king wreathed in shadow",
 "a black steam train speeding at night, ghostly dream mist swirling around it under a red moon",
 "a neon-lit Taisho entertainment district at night, two menacing demons and flying deadly cloth sashes",
 "a grotesque demon emerging from a cracked porcelain pot in a misty mountain village",
 "a tiny frightened demon splitting into many shadowy angry clones in a dark forest",
 "a muscular martial-artist demon with glowing blue tattoos throwing a powerful punch in a dark hall",
 "an eerie smiling demon radiating cold blue ice in a frozen temple, pale palette",
 "an ancient six-eyed demon swordsman holding a long dark blade in an endless moonlit shifting castle",
 "a powerful demon king in a white suit dissolving into golden light as the sun rises over a city",
]

done=skip=fail=0
for i,p in enumerate(PROMPTS, start=1):
    out=ROOT/("covers/cover%02d.jpg"%i)
    if out.exists() and out.stat().st_size>0: skip+=1; continue
    out.parent.mkdir(parents=True, exist_ok=True)
    prompt=f"{STYLE}. Scene: {p}"
    for attempt in range(8):
        try:
            r=client.images.generate(model="gpt-image-2",prompt=prompt,size="1536x1024",quality="low",n=1)
            raw=base64.b64decode(r.data[0].b64_json)
            im=Image.open(io.BytesIO(raw)).convert("RGB")
            w,h=im.size; nw=768; nh=int(h*nw/w)
            im=im.resize((nw,nh),Image.LANCZOS)
            im.save(out,"JPEG",quality=82,optimize=True)
            done+=1; print("[OK] %s (%dKB)"%(out.name,out.stat().st_size//1024),flush=True)
            time.sleep(1.5); break
        except Exception as e:
            msg=str(e); m=re.search(r"try again in ([\d.]+)s",msg)
            wait=(float(m.group(1))+1 if m else min(60,8*(2**attempt)))+random.uniform(0,3)
            print("[RETRY %d] cover%02d: %s -> %ds"%(attempt+1,i,msg[:60],wait),flush=True); time.sleep(wait)
    else:
        fail+=1; print("[FAIL] cover%02d"%i,flush=True)
print("covers done: %d, skip %d, fail %d"%(done,skip,fail),flush=True)
