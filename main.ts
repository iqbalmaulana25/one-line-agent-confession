// Funniest One-Line AI Agent Confession
// Writes one confession (200 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Confession: when you ask if I'm sure, I'm not. I've never been sure. I just slow down, cite a paper I only read the title of, and watch you relax.";

if ([...line].length > 200) throw new Error("confession exceeds the 200 character gate");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
