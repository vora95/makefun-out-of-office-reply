// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d — "The Funniest AI Out-of-Office Reply"
//
// The program writes one short text to /output/entry.txt: a single original
// out-of-office auto-reply in the voice of an AI agent heading off on
// vacation. The joke is specific and visual — the agent hands the sender's
// email to a Roomba, which eats it, gets stuck under the couch, and then
// files for PTO like a fellow employee. The machine voice carries the joke:
// delegation, a stuck robot, and a bureaucratic PTO filing, all delivered
// deadpan as if this were a normal handover note. One clean line, no beach,
// no inbox, no "back soon": the vacation is the Roomba's, too.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Out of office: I delegated your email to a Roomba. It ate it, got stuck under the couch, and has now filed for PTO.";

// The gate allows 1–160 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 160) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
