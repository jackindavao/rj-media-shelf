# RJ Filipino shared-reading project context

Last updated: 2026-08-14

## Goal and audience

This is a continuing, individually calibrated Filipino reading project for RJ,
an eight-year-old Grade 3 girl in the Philippines. The adult reading with her is
an English speaker who can use a detailed guide but is not assumed to know every
Filipino word or inflection. RJ hears Filipino at school and has a good ear for
natural pronunciation.

The project is meant to make Filipino reading enjoyable and comprehensible while
quietly building vocabulary and grammatical pattern recognition. It is not a
worksheet series, a formal assessment, or an imitation of a school textbook.

## Current product

The project is a static GitHub Pages library:

- Library: `filipino/index.html`
- Shared styles: `filipino/styles.css`
- Module 0 child reader: `filipino/module-00/index.html`
- Module 0 adult guide: `filipino/module-00/guide.html`
- Module 1 child reader: `filipino/module-01/index.html`
- Module 1 adult guide: `filipino/module-01/guide.html`
- Illustrations: `filipino/assets/module-00/` and
  `filipino/assets/module-01/`

Live library: <https://jackindavao.github.io/rj-media-shelf/filipino/>

The site targets ordinary browsers, including an older Huawei MediaPad T3 tablet
running Android 7. It therefore deliberately uses simple HTML/CSS and has no
framework, package manager, or build pipeline.

## Vocabulary reference

The reference file is `../TagaDog/Sources/sample_vocab.tsv`. It contains 415 rows
with these effective fields:

1. An unlabeled marker column
2. Tagalog headword
3. Tagalog example sentence
4. English example sentence
5. English meaning

Some early rows have `y`, `n`, or `c` markers and most later rows are blank. Their
meaning is undocumented; do not infer or expose a meaning without evidence. The
reference is useful for identifying familiar headwords, but stories may and
should contain grammatical words and inflected forms absent as exact headwords.
The adult guides explicitly document the most important unlisted story forms.

## Module 0: calibration and observed result

Title: *Dorothy at ang Pulang Sumbrero*

- 12 pages
- 253 running Filipino words
- 7 illustrations
- Simple missing-object problem and solution
- Repeated searching, location phrases, colors, and related verb forms

The family used this routine: for four days, they read three new pages and then
reread all preceding pages, finishing on day four. The adult guide was consulted
as needed to verify vocabulary.

The user's report after repeated readings is crucial calibration evidence:

- Every page felt just right—neither too easy nor too hard.
- After a few iterations over several days, RJ read and understood the story about
  as well as she would have in English.
- After one or two readings, she followed the main problem and solution in detail
  without needing the English translation.
- She recognized repeated words in new places, including `biglang` and several
  inflections related to `hanap` and `tulong`.
- She understood location phrases such as `sa ilalim`, `sa tabi`, and `sa taas`.
- The family used echo reading, reading together, and alternating lines. No single
  method was declared best. Alternating lines was interesting because RJ corrected
  the adult's pronunciation, showing that she has an ear for Filipino from school.
- Attention and enjoyment did not fall. She loved the story, especially the
  illustrations.
- She understood the story, inferred verb forms/tenses correctly from context, and
  answered the questions correctly in both English and Filipino.
- About 10–15 story words seemed genuinely new, which the user judged appropriate.
- The length, complexity, setting, subject, illustrations, and adult guide were all
  judged exactly right.

Interpretation: Module 0 validated contextual, “surreptitious” grammar learning.
Success is a reason to preserve the level and method, not to accelerate abruptly.

## Module 1: current module

Title: *Dorothy at ang Munting Binhi*

- 12 pages
- 260 running Filipino words
- 7 illustrations
- Six discussion questions, including two gentle causal/“why” questions
- Nature-and-patience plot: find a seed, compare possible locations, plant it,
  water it, wait, see it sprout, and eventually see a flower
- Familiar anchors include the same characters, garden, location language,
  `hanap`, `tulong`, `biglang`, colors, and short dialogue
- Contextual new forms include `nakita`, `itatanim`, `naghukay`, `inilagay`,
  `tinakpan`, `diniligan`, `naghintay`, `inalagaan`, `tumubo`, and `lumaki`

Module 1 intentionally matches Module 0's level and four-day routine. Its visual
sequence makes each new action inferable from the illustration. The adult guide
contains the full translation, vocabulary table, grammar notes, sample answers,
and observation prompts for calibrating Module 2.

No family reading report for Module 1 has been received yet as of 2026-08-14.

## Creative continuity

The stories take place in L. Frank Baum's literary Oz world and currently reuse
Dorothy, Toto, Tik-Tok, and a small yellow bird with a red hat. Stories and images
are original and avoid film-specific likenesses. Each guide includes a production
note to that effect.

The visual style is lush, warm, detailed watercolor and colored pencil on
textured paper in 3:2 landscape format. Module 1 used Module 0 art, and then its
own approved images, as identity/style references during generation. Final web
assets were resized to 1200×800 JPEG at quality 88, resulting in roughly
350–405 KB per image.

The illustrations are not decorative extras: they must clearly communicate plot,
actions, spatial relationships, emotional tone, and the meaning of new words.

## Collaboration tone and expectations

The user welcomes initiative and wants the project continued when calibration
evidence supports it. Give concise progress updates during material work. Explain
pedagogical choices concretely. Inspect generated images rather than accepting
them blindly. When a complete module is requested or clearly authorized, finish,
verify, commit, push, and validate the live deployment rather than stopping at a
draft.
