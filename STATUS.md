# Current project status

Last updated: 2026-08-17

## Restart point

- Branch: `main`
- Remote: `origin` → `https://github.com/jackindavao/rj-media-shelf.git`
- Module 2 publication commit: `e2fc5b1`
- Live library: <https://jackindavao.github.io/rj-media-shelf/filipino/>
- Live Module 0: <https://jackindavao.github.io/rj-media-shelf/filipino/module-00/>
- Live Module 1: <https://jackindavao.github.io/rj-media-shelf/filipino/module-01/>
- Live Module 1 guide:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-01/guide.html>
- Live Module 2:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-02/>
- Live Module 2 guide:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-02/guide.html>

## Completed

- MediaDog publishing repository and GitHub Pages deployment are working.
- Module 0, *Dorothy at ang Pulang Sumbrero*, is published and has been read by
  the family over four days.
- Detailed Module 0 feedback has been incorporated into the project context and
  Module 1 design.
- Module 1, *Dorothy at ang Munting Binhi*, is published with reader, adult guide,
  and seven optimized illustrations.
- Detailed Module 1 feedback has been incorporated. It confirms that the level,
  10–15 new words, causal questions, cumulative rhythm, contextual morphology,
  and illustration-led design remain right.
- Module 2, *Dorothy at ang Munting Tulay*, has been created with a 258-word child
  reader, adult guide, and seven optimized illustrations.
- Module 2's adult guide adds concise Filipino stress guidance and a story-word
  pronunciation key in response to the adult reader's question.
- The live library, Module 2 reader, Module 2 guide, and representative image were
  verified with HTTP 200 after publication commit `e2fc5b1`.

## Immediate next step

Wait for the user's observations after RJ reads Module 2. Do not create Module 3
until the user asks to proceed or supplies feedback that clearly implies it.

Useful Module 2 observations are listed in its guide: whether RJ understands the
rejected solutions, construction sequence, and safety test; connects
`tatawid`/`tumawid`; transfers `inilagay`; benefits from the pronunciation key;
and sustains attention and enjoyment through the same four-day rhythm.

## Known non-blocking details

- `sample_vocab.tsv` has 415 data rows and an undocumented first marker column.
- TagaDog's repository ownership may differ from the executing Windows account;
  direct file reads work, while Git commands may need a per-command
  `safe.directory` option.
- PowerShell can display correct UTF-8 punctuation as mojibake when encoding is not
  specified. The published HTML files themselves are UTF-8 and render correctly.
- Git writes to `.git` can require sandbox escalation in Codex even though normal
  workspace files are writable.
