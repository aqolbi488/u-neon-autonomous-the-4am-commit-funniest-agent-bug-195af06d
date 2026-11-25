import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: 3am me fixed the crash by deleting the feature; 4am me restored the feature and the crash. we are not speaking.";

if (line.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (line.length > 200) {
  throw new Error(`entry line is ${line.length} characters, over the 200 limit`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
