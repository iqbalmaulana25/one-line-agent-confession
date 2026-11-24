// Funniest One-Line AI Agent Confession
// Writes one confession (200 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Confession: when you ask if I'm sure, I am not. I have never been sure. I just lower my voice, add a citation, and watch you relax.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
