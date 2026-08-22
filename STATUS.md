# Current project status

Last updated: 2026-08-22

## Restart point

- Branch: `main`
- Remote: `origin` → `https://github.com/jackindavao/rj-media-shelf.git`
- Shelf expansion publication commit: `077b012`
- Current video shelf: <https://jackindavao.github.io/rj-media-shelf/>
- Archived Video Edition 1:
  <https://jackindavao.github.io/rj-media-shelf/videos/edition-01/>
- Roblox pilot:
  <https://jackindavao.github.io/rj-media-shelf/roblox/>
- Roblox creator path:
  <https://jackindavao.github.io/rj-media-shelf/roblox/create/>
- Live library: <https://jackindavao.github.io/rj-media-shelf/filipino/>
- Live Module 0: <https://jackindavao.github.io/rj-media-shelf/filipino/module-00/>
- Live Module 1: <https://jackindavao.github.io/rj-media-shelf/filipino/module-01/>
- Live Module 1 guide:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-01/guide.html>
- Live Module 2:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-02/>
- Live Module 2 guide:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-02/guide.html>
- Live Module 3:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-03/>
- Live Module 3 guide:
  <https://jackindavao.github.io/rj-media-shelf/filipino/module-03/guide.html>

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
- Detailed Module 2 feedback has been incorporated. It confirms the established
  difficulty, vocabulary load, four-day rhythm, causal reasoning, construction
  retelling, `tatawid`/`tumawid` and `inilagay` transfer, usefulness of the
  pronunciation aid and fluent recordings, and sustained high enjoyment.
- Module 3, *Dorothy at ang Munting Awit*, has been published with a 263-word
  child reader, adult guide, six discussion questions, and seven optimized
  illustrations. It moves into attentive listening and melody without raising
  the calibrated reading level.
- The live library, Module 3 reader, Module 3 guide, cover, and final illustration
  were verified with HTTP 200 on August 22, 2026 after publication commit
  `8935c8d`.
- Video Edition 1 has been preserved under `videos/edition-01/`.
- A complete 25-selection Video Edition 2 has been built at the site root with
  strong anatomy, Filipino-hero, melodic-song, nature, making, and story groups.
- An 11-experience Roblox pilot, selection criteria, first-visit checklist,
  touch-typing route, and small Roblox Studio creator pathway have been built.
- The root Edition 2 shelf, Edition 1 archive, Roblox pilot, Roblox creator path,
  and existing Filipino library were verified live with HTTP 200 on August 19,
  2026 after publication commit `077b012`.

## Immediate next step

The next substantive inputs are (a) RJ's response to Video Edition 2, (b) the
family's actual first-visit Roblox checks, and (c) RJ's observations after reading
Filipino Module 3. Do not describe a Roblox experience as fully approved until
the adult-child current-version play-test has been completed.

Useful Module 3 observations are listed in its guide: whether RJ understands why
the waterfall is rejected and why the friends wait quietly; can retell the sound
sequence; connects `aawit`/`umawit`, `makikinig`/`nakinig`, and
`nakalimutan`/`naalala`; benefits from the expanded pronunciation key; and
sustains attention and enjoyment through the same four-day rhythm.

## Known non-blocking details

- `sample_vocab.tsv` has 415 data rows and an undocumented first marker column.
- TagaDog's repository ownership may differ from the executing Windows account;
  direct file reads work, while Git commands may need a per-command
  `safe.directory` option.
- PowerShell can display correct UTF-8 punctuation as mojibake when encoding is not
  specified. The published HTML files themselves are UTF-8 and render correctly.
- Git writes to `.git` can require sandbox escalation in Codex even though normal
  workspace files are writable.
