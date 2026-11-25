import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Office Joke — one short line about office life, under 200 characters.
// The joke: "we're a family here" taken literally, straight to HR.
const ENTRY =
  "The boss said we're a family here. So I asked HR when the inheritance kicks in.";

// Gate: 1 to 200 characters ("under two hundred" per the task). Fail loudly
// rather than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
