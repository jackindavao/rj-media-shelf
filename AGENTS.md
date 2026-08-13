# MediaDog project instructions

These instructions apply to the entire repository. Read `CODEX_CONTEXT.md`,
`DECISIONS.md`, and `STATUS.md` before continuing the Filipino reading project.

## Repository roles

- This repository (`MediaDog`) is the publishing repository.
- The GitHub remote is `https://github.com/jackindavao/rj-media-shelf.git`.
- The published site is `https://jackindavao.github.io/rj-media-shelf/`.
- Build and publish the Filipino reading project under `filipino/`.
- Use `../TagaDog/Sources/sample_vocab.tsv` as the vocabulary reference. Do not
  move the source of truth into this repository unless the user asks.

## Working rules

- Preserve the existing static-site approach: plain HTML and shared CSS, with no
  build step or dependency installation unless a later requirement truly needs it.
- Preserve unrelated user changes. Check `git status` before editing.
- Treat the child reader and adult guide as a pair. Each new module belongs in
  `filipino/module-NN/`, with illustrations in `filipino/assets/module-NN/`.
- Update `filipino/index.html` when adding a module.
- Keep English translations and explicit teaching notes out of the child story;
  put them in the adult guide.
- Use the available `imagegen` skill for new story illustrations. Read its
  instructions first. Use earlier module art as character/style references,
  inspect every output, copy final assets into the repository, and optimize them
  for the web. Do not leave project-referenced assets only in Codex's generated
  image directory.
- The recurring visual designs are: Dorothy with brown braided pigtails, blue
  bows, white puff-sleeve blouse, blue skirt, and silver shoes; Toto as a small
  shaggy black terrier; Tik-Tok as a short, round, friendly copper clockwork man
  with a wind-up key; and a tiny yellow bird wearing a red floppy hat.
- Use original watercolor-and-colored-pencil storybook illustrations. Avoid
  film-specific likenesses, text embedded in images, watermarks, duplicate
  characters, and unexplained visual discontinuities.
- Keep the Filipino prose accurate, natural, and readable. Verify exact running
  word counts programmatically rather than estimating.
- When displaying or reading HTML in PowerShell, specify UTF-8. Garbled terminal
  output such as `â†` is an encoding-display issue; do not replace correct UTF-8
  punctuation in the files with mojibake.
- The TagaDog Git repository may trigger a dubious-ownership warning under a
  different Windows account. Read its files directly where possible; if Git
  inspection is necessary, use a per-command safe-directory option instead of
  changing global Git configuration without authorization.

## Calibration rules for future modules

- Do not raise the reading level merely because the preceding module succeeded.
- Default to 12 story pages, about 250–265 running Filipino words, seven
  illustrations, and six discussion questions unless reader evidence supports a
  deliberate change.
- The established routine is three new pages per day for four days, rereading all
  preceding pages before the new pages.
- Introduce roughly 10–15 genuinely new words per story, supported by plot,
  repetition, and pictures. Reuse familiar words and morphology in new contexts.
- Let contextual comprehension do grammar teaching. The adult guide may explain
  patterns, but the child reader should remain a story rather than an exercise.
- Protect enjoyment and comprehension. English answers, pointing, echo reading,
  shared reading, or alternating lines are all acceptable.
- Use reader feedback recorded in `CODEX_CONTEXT.md` as evidence, not as generic
  praise to be discarded.

## Verification and publishing

Before committing a new module:

1. Confirm the intended page, word, illustration, and question counts.
2. Check all local `href` and `src` references.
3. Serve the site locally and confirm HTTP 200 for the library, reader, guide,
   and representative image assets.
4. Inspect the library and reader visually at a narrow tablet/mobile width and,
   when useful, desktop width.
5. Run `git diff --check` and review `git status` and the staged diff summary.
6. Commit only project files, push `main` to `origin`, wait for GitHub Pages, and
   verify the live library, reader, and guide return HTTP 200.
7. Update `STATUS.md` whenever the restart point materially changes.
