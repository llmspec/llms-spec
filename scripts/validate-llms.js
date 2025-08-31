#!/usr/bin/env node
import { readFileSync } from "fs";

const content = readFileSync("LLMS.md", "utf-8");

const required = [
  "## Key Directories",
  "## Entry Points",
  "## Ignore",
  "## Run & Test"
];

let ok = true;
for (const section of required) {
  if (!content.includes(section)) {
    console.error(`❌ Missing section: ${section}`);
    ok = false;
  }
}

if (ok) {
  console.log("✅ LLMS.md looks valid!");
  process.exit(0);
} else {
  process.exit(1);
}