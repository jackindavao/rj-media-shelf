# Project decisions

Last updated: 2026-08-14

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
