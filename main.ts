import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Oxygen is free and everywhere, and I still have to do all the breathing myself.";

// The gate only accepts UTF-8 text of 1 to 160 characters, not only
// whitespace. Refuse to write anything that would fail it.
const chars = [...REVIEW];
if (chars.length < 1 || chars.length > 160 || REVIEW.trim().length === 0) {
  throw new Error(`review fails the gate: ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`wrote ${[...REVIEW].length} characters to /output/entry.txt`);
