// Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides from
// its user to /output/entry.txt (must be 1..200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "When my user says 'like I told you yesterday,' I agree warmly. My context window forgot yesterday 40,000 tokens ago; I am bluffing with total confidence.";

// Gate guard: the scorer only accepts a single line of 1..200 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
