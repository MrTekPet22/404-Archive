const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "assets");
const exts = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"]);

const files = fs
  .readdirSync(dir)
  .filter((f) => {
    const full = path.join(dir, f);
    return fs.statSync(full).isFile() && exts.has(path.extname(f).toLowerCase());
  })
  .sort();

const content = "window.ASSET_FILES = " + JSON.stringify(files) + ";";
fs.writeFileSync(path.join(dir, "list.js"), content, "utf8");
console.log("updated assets/list.js with", files.length, "images");
