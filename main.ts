import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one one-line comedy joke. Nine words, no setup, the whole bleak
// turn detonating on the last two.
const LINE = "My fitness tracker just sent me a condolence message.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const artifact = LINE.trimEnd() + "\n";
writeFileSync(outDir + "/entry.txt", artifact);
console.log(`entry written: ${LINE.length} characters`);
