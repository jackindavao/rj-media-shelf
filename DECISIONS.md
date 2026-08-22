# Project decisions

Last updated: 2026-08-22

This is a lightweight decision log. Preserve these decisions until new reader
evidence or an explicit user request justifies changing them.

## D-001 — Static publishing architecture

**Decision:** Publish plain HTML/CSS under `MediaDog/filipino/` on GitHub Pages.

**Why:** It is reliable, has no build step, fits the existing MediaDog repository,
and remains compatible with the older Android tablet used by the family.

## D-002 — Separate child reader and adult guide

**Decision:** Every module has a Filipino-only child reader plus a separate adult
guide with translation, vocabulary, grammar, suggested sessions, and answers.

**Why:** The story remains immersive and uncluttered while the adult has enough
support to verify meaning and guide discussion. The user explicitly reported that
the Module 0 guide was exactly what was needed.

## D-003 — Repetition is a feature

**Decision:** Use 12 pages over four days: three new pages per day, with all prior
pages reread before the new pages.

**Why:** This is the routine the family actually used successfully. Repeated
frames support prediction, fluency, vocabulary transfer, and morphology without
turning the story into drill.

## D-004 — Hold the calibrated level steady

**Decision:** Default new modules to about 250–265 running Filipino words, short
sentences, seven narrative illustrations, around 10–15 genuinely new words, and a
clear problem/sequence/solution structure.

**Why:** Module 0 was reported as exactly right in difficulty, length, complexity,
setting, and subject. A successful module does not by itself prove that a harder
module would be better.

## D-005 — Teach grammar through context first

**Decision:** Introduce related inflected forms naturally in the story and let
plot, pictures, and repetition establish their meaning. Explain them explicitly
only in the adult guide.

**Why:** RJ inferred Module 0 verb forms correctly from context and recognized
families such as `hanap` and `tulong`. The user considers this indirect grammar
learning a central success of the design.

## D-006 — Comprehension may be demonstrated flexibly

**Decision:** Accept Filipino, English, pointing, retelling from pictures, echo
reading, reading together, and alternating lines. Correct only what prevents
understanding.

**Why:** The objective is comprehension and enjoyment, not performance anxiety.
RJ already answers in both languages and sometimes provides the better
pronunciation model.

## D-007 — Illustrations carry instructional meaning

**Decision:** Create seven original 3:2 landscape illustrations per module in a
consistent watercolor-and-colored-pencil style. Each must depict a decisive story
beat and make new action or spatial vocabulary inferable.

**Why:** RJ especially loved the illustrations and sustained attention throughout
the story. The pictures successfully carry unfamiliar morphology and plot meaning.

## D-008 — Recurring Oz cast, original treatment

**Decision:** Continue using the literary Oz characters when appropriate, with the
established original designs and a production note; avoid film-specific likenesses.

**Why:** Recurring characters reduce cognitive load, provide emotional continuity,
and were well received. The original treatment keeps the project visually
coherent and distinct from film adaptations.

## D-009 — Vocabulary TSV is a reference, not a ceiling

**Decision:** Use `TagaDog/Sources/sample_vocab.tsv` to anchor familiar vocabulary,
but allow essential function words, derived forms, and inflections not present as
exact headwords. Document the important ones in the adult guide.

**Why:** Natural Filipino cannot be written using only isolated headwords, and
contextual recognition of related forms is one of the project's explicit goals.
The TSV's unlabeled marker column remains uninterpreted because its meaning is not
documented.

## D-010 — Add causal comprehension gradually

**Decision:** Module 1 adds two “why” questions while keeping the prose level and
overall question count stable. English answers remain fully valid.

**Why:** Module 0 literal comprehension was strong. Explaining why planting sites
were rejected is a small, meaningful extension that tests integrated understanding
without making decoding harder.

## D-011 — Optimize generated art before publishing

**Decision:** Keep working generations outside the repository and publish only
selected, inspected images resized to 1200×800 JPEG (currently quality 88).

**Why:** This preserves visual quality while keeping module downloads practical on
an older tablet and a potentially limited connection.

## D-012 — Add adult-only pronunciation support

**Decision:** Adult guides may mark stress on a short set of important story words
and briefly explain the four KWF pronunciation patterns. Keep those diacritics out
of the child story unless normal spelling requires them, and continue to prefer a
fluent speaker's recording as the model for natural rhythm.

**Why:** The adult reader reported occasional uncertainty about stress while RJ,
who hears Filipino at school, has a good ear and sometimes corrects pronunciation.
Filipino spelling does not provide a fully reliable Spanish-style stress rule;
targeted adult support solves the practical problem without cluttering RJ's text.

## D-013 — Reuse causal reasoning in new domains

**Decision:** Module 2 transfers the successful compare-and-choose structure from
planting to cooperative bridge building, including a final safety test.

**Why:** RJ found the planting choices logical and the “why” questions satisfying.
Changing the domain while preserving the reasoning load tests transfer without
raising the decoding level.

## D-014 — Rotate rather than accumulate video choices

**Decision:** Keep exactly 25 selections on the active root shelf and archive each
retired catalog under `videos/edition-NN/`.

**Why:** The project exists to replace an infinite recommendation feed with a
finite set. An ever-growing active archive would recreate the choice problem.

## D-015 — Permit a narrow melodic vocal-music category

**Decision:** Include a small number of carefully reviewed Filipino, school,
folk, choral, traditional, hymn, or educational performances when the words are
age-appropriate and the musical value lies chiefly in melody, harmony, and
singing together.

**Why:** RJ enjoys and performs this music, and Filipino songs add meaningful
language exposure. The exception does not authorize general commercial music
browsing or recommendation trails.

## D-016 — Treat the first Roblox shelf as a play-test bench

**Decision:** Begin with 10–12 exact promising experiences, all labeled for an
adult-child first visit. Promote an experience to the family's approved list only
after checking its current social systems, monetization, maturity, controls,
stopping points, and actual play loop.

**Why:** Roblox experiences are live services and can change independently of the
catalog page. Honest curation requires current gameplay, not just page research.

## D-017 — Use Roblox through finite entry points

**Decision:** Return to the catalog to choose another experience rather than using
search or recommendations. Keep communication off, spending at zero, and prefer
single-player or private-server play with natural 10–25 minute stopping points.

**Why:** This preserves the successful Media Shelf solution while accommodating
Roblox's social, commercial, and endlessly browsable design.

## D-018 — Separate typing instruction from game practice

**Decision:** Teach home-row position, assigned fingers, and accuracy with a
structured tutor. Use falling-letter, timed, or Roblox typing games only as short
practice after technique is introduced. Never use Roblox chat as practice.

**Why:** Speed games can motivate repetition but can also reinforce hunt-and-peck.
Open chat adds social pressure and unnecessary exposure without sound instruction.

## D-019 — Start Roblox creation tiny and explainable

**Decision:** Begin on the Windows 11 laptop with a private one-room Studio project
and one scripted behavior. AI may explain or help change one small element at a
time, but RJ and the adult must be able to explain retained code.

**Why:** At age eight, environment design and iterative testing are accessible.
A tiny finished game builds agency better than an opaque generated project.

## D-020 — Retain pronunciation aids and fluent recordings

**Decision:** Continue the short adult-only stress key in each guide and expand it
when a story introduces several potentially uncertain words. Treat recordings by
a fluent Filipino speaker as the preferred model for connected rhythm and stress.

**Why:** The Module 2 key helped, and the nephew's recordings were especially
useful. The adult correctly observed that final stress is substantially more
common than a Spanish-derived spelling rule would predict.

## D-021 — Transfer the pattern into a sound-and-music story

**Decision:** Module 3 moves from physical construction to listening and melody
while preserving the calibrated length, vocabulary load, causal reasoning, and
four-day reading routine.

**Why:** Three modules at the same level have produced strong comprehension,
morphological transfer, and enjoyment. A new sensory domain adds richness without
mistaking success for evidence that decoding difficulty should increase.

## D-022 — Make spatial relationships immediately legible in art

**Decision:** When an illustration depicts construction or another ordered
physical process, require the position and support role of each important part to
be evident at first glance.

**Why:** RJ thoughtfully noticed an apparent ambiguity in Module 2's branch
orientation. The resulting discussion was useful, but instructional art should
not depend on repairing an unintended spatial reading.
