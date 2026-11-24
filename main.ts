import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry for make.fun news-image-20261124: the finished front page lives
// in this repository as entry.png, and the program simply places a copy
// of it where the grader expects the image to be. It reads nothing from
// the network and writes exactly the same bytes on every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(import.meta.dirname, "entry.png"), join(outDir, "entry.png"));
