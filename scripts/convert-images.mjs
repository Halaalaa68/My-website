import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import convert from "heic-convert";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "portfolio");
const DEST = path.join(ROOT, "public", "images");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function destPath(src) {
  const rel = path.relative(SRC, src);
  const parsed = path.parse(rel);
  const safeDir = parsed.dir
    .split(path.sep)
    .map((part) =>
      part
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || "root"
    )
    .join("/");
  const safeName = parsed.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return path.join(DEST, safeDir, `${safeName}.jpg`);
}

async function processFile(src) {
  const dest = destPath(src);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const ext = path.extname(src).toLowerCase();
  let buffer = fs.readFileSync(src);

  if (ext === ".heic" || ext === ".heif") {
    buffer = Buffer.from(
      await convert({
        buffer,
        format: "JPEG",
        quality: 0.88,
      })
    );
  }

  await sharp(buffer)
    .rotate()
    .resize(1800, 1800, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);

  const size = fs.statSync(dest).size;
  console.log(`OK  ${path.relative(ROOT, dest)}  (${Math.round(size / 1024)}kb)`);
}

const files = walk(SRC).filter((file) =>
  IMAGE_EXT.has(path.extname(file).toLowerCase())
);

console.log(`Found ${files.length} images`);

for (const file of files) {
  try {
    await processFile(file);
  } catch (err) {
    console.error(`FAIL ${file}: ${err.message}`);
  }
}
