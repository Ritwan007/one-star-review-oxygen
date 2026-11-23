import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Oxygen is free and everywhere, and I still have to do all the breathing myself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`wrote ${[...REVIEW].length} characters to /output/entry.txt`);
