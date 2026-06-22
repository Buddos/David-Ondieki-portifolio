from PIL import Image
from pathlib import Path

src = Path('images/portrait-full.jpg')
if not src.exists():
    print('source image not found:', src)
    raise SystemExit(1)

sizes = [1200, 600, 300]
for s in sizes:
    out_jpg = src.parent / f'profile-{s}.jpg'
    out_webp = src.parent / f'profile-{s}.webp'
    img = Image.open(src)
    w,h = img.size
    # center-crop square
    smin = min(w,h)
    left = (w - smin)//2
    top = (h - smin)//2
    img_c = img.crop((left, top, left+smin, top+smin))
    img_r = img_c.resize((s, s), Image.LANCZOS).convert('RGB')
    img_r.save(out_jpg, quality=85, optimize=True)
    img_r.save(out_webp, quality=80, method=6)
    print('created', out_jpg, out_webp)
