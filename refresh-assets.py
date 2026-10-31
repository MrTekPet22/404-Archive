import os, json

root = os.path.dirname(os.path.abspath(__file__))
assets = os.path.join(root, "assets")
exts = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"}

files = sorted(
    f for f in os.listdir(assets)
    if os.path.isfile(os.path.join(assets, f))
    and os.path.splitext(f)[1].lower() in exts
)

out = os.path.join(assets, "list.js")
with open(out, "w", encoding="utf-8") as fh:
    fh.write("window.ASSET_FILES = " + json.dumps(files, ensure_ascii=False) + ";")

print("updated assets/list.js with", len(files), "images")
