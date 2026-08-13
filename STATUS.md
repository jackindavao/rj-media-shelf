# Current project status

Last updated: 2026-08-14

## Restart point

- Branch: `main`
- Remote: `origin` → `https://github.com/jackindavao/rj-media-shelf.git`
- Current published commit before this handoff: `6b77b6f`
- Git state at handoff creation began clean and synchronized with `origin/main`.
- Live library: <https://jackindavao.github.io/rj-media-shelf/filipino/>
- Live Module 0: <https://jackindavao.github.io/rj-media-shelf/filipino/module-00/>
- Live Module 1: <https://jackindavao.github.io/rj-media-shelf/filipino/module-01/>
- Live Module 1 guide:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-01/guide.html>

## Completed

- MediaDog publishing repository and GitHub Pages deployment are working.
- Module 0, *Dorothy at ang Pulang Sumbrero*, is published and has been read by
  the family over four days.
- Detailed Module 0 feedback has been incorporated into the project context and
  Module 1 design.
- Module 1, *Dorothy at ang Munting Binhi*, is published with reader, adult guide,
  and seven optimized illustrations.
- The library, Module 1 reader, and Module 1 guide were verified live with HTTP
  200 after commit `6b77b6f`.

## Immediate next step

Wait for the user's observations after RJ has read Module 1. Do not create Module 2
until the user asks to proceed or supplies feedback that clearly implies proceeding.

Useful Module 1 observations, already listed in its guide:

- Can RJ explain why the first two planting places were rejected and the third
  was chosen?
- Does she connect `itatanim` with the later planting actions and `tumubo` with
  the sprout?
- Which page or repeated frame becomes predictable first?
- Can she retell the planting sequence from the illustrations, in either language?
- Do the two “why” questions feel satisfying, or do they interrupt the story?
- Does the four-day cumulative-rereading rhythm still hold attention?
- Which illustration is her favorite, and what detail does she notice?
- Roughly how many words seem genuinely new?

## Likely Module 2 workflow after feedback

1. Read this file plus `CODEX_CONTEXT.md` and `DECISIONS.md`.
2. Inspect any new user feedback and translate it into explicit calibration
   changes—or preserve the baseline if it is still working.
3. Check `../TagaDog/Sources/sample_vocab.tsv` for reusable headwords.
4. Draft a 12-page plot and page text; compute the running Filipino word count.
5. Plan seven visually decisive story beats.
6. Use the `imagegen` skill with existing approved art as character/style
   references; inspect and iterate as needed.
7. Create `filipino/module-02/index.html`, its `guide.html`, optimized assets under
   `filipino/assets/module-02/`, and a new library card.
8. Perform the verification and publishing checklist in `AGENTS.md`.
9. Update this status file with the new published commit and next feedback point.

## Known non-blocking details

- `sample_vocab.tsv` has 415 data rows and an undocumented first marker column.
- TagaDog's repository ownership may differ from the executing Windows account;
  direct file reads work, while Git commands may need a per-command
  `safe.directory` option.
- PowerShell can display correct UTF-8 punctuation as mojibake when encoding is not
  specified. The published HTML files themselves are UTF-8 and render correctly.
- Git writes to `.git` can require sandbox escalation in Codex even though normal
  workspace files are writable.
