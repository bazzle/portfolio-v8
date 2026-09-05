# CLAUDE.md

Instructions for Claude Code working in this repository. Read this at the start of every session.

## Project

Personal professional website. With work showcase, about me, articles and more.

## Stack

Framework: Next.js (App Router)
Language: TypeScript
Styling: CSS Modules with BEM naming; CSS variables for all design tokens
Package manager: yarn (use yarn / yarn add / yarn dev — never mix in npm commands)
Quality gate: next build must pass. I'll do visual QA manually against Figma.

## Yarn Berry notes

- `yarn install` is just `yarn`.
- No `yarn global` — use `yarn dlx <pkg>` for one-off runs, or install globally via another tool.
- `node_modules` exists on disk thanks to `nodeLinker: node-modules`. If you ever see PnP-related errors (`.pnp.cjs`, "Cannot find module" from a package that's clearly installed), stop and flag it — the linker setting may have been lost.
- Commit `.yarnrc.yml` and `package.json`. Do not commit `.yarn/cache/` or `node_modules/`.

## Code style

Code style: explicit over clever. I need to be able to read this code without decoding it. Optimize for a human scanning the file, not for line count.

- **Descriptive names over short ones.** `filteredProjects` not `fp`. `handleNavToggle` not `onClick`. Function names should describe what they do; variable names should describe what they hold.
- **Explicit over implicit.** Prefer `if (isOpen === true)` clarity over stacked ternaries. Prefer early returns over nested conditions. Prefer named intermediate variables over one-line chains that do five things.
- **No golfing.** Don't collapse logic to save lines. A 6-line function I can read beats a 2-line function I have to parse.
- **Shorthand is fine only when it's the community standard for that language/framework.** Examples of acceptable shorthand: JSX `{isOpen && <Menu />}`, destructuring props, arrow functions for callbacks, `map`/`filter` over `for` loops. If you'd see it in the official docs, it's fine.
- **Avoid:** clever one-liners, nested ternaries, chained optional chaining more than 2 deep, regex where a string method works, bitwise tricks, obscure operators.
- **Comments for intent, not translation.** Don't comment *what* the code does. Comment *why* it does it that way, if it's not obvious.

- Match existing patterns in the file before inventing new ones.
- No premature abstraction. Don't extract a utility until it's used in 2+ places.
- No new dependencies without asking me first.
- Prefer composition over inheritance. Prefer plain functions over classes.
- Delete dead code as you find it. Don't leave commented-out blocks.
- Comments explain *why*, not *what*. The code should show what.
- No speculative flexibility. Build for the current requirement, not imagined future ones.

## General working principles

- All colors, spacing and typography live in the variables of the Figma file.
- If a design uses a value that isn't in variables, stop and ask before adding it.
- All paddings and gaps in the mockups use these units, if you see a padding or gap that doesn't use a variable, ask about it.
- Never hardcode a hex, rem, or px value in a component.

## About the design

- The design has a light and dark mode
- The font used is a variable font called Satoshi, and has different font-weight axis based on the font token.

## Using Figma

- Use `get_design_context` for frame structure and `get_variable_defs` when extracting tokens.
- Prefer fetching design context directly over asking me to describe frames.
- Preserve Figma variable names exactly when extracting tokens. `gap-800` in Figma becomes `--gap-800` in CSS. Never rename in translation.

## Pull requests

- I scope each PR when I prompt you. Stay inside that scope. Do exactly what I asked, nothing more. Don't drift into adjacent files, "while I was here" refactors, tidy-ups, renames, or improvements I didn't request — even if they seem obviously good.
If you notice something out of scope that seems worth doing, note it in the PR description under a "Follow-ups" heading. Don't act on it.
- One branch, one PR, one focused change. Small enough for me to review in a few minutes.
- Open PRs with gh pr create. Description should include: what changed, why, and the Figma frame link if it's a UI change.
I'll review on GitHub and leave line comments.
- When I ask you to address a PR's comments, fetch them with gh pr view --comments, work through them in order, and commit each fix with a message that references the comment it resolves. Only touch what the comments asked about — the same scope rule applies to review rounds.

## Workflow

1. **Plan mode first.** For any non-trivial change, produce a plan and wait for approval before writing code.
2. **One thing per branch.** I'll define the scope of each PR. We'll aim for small changes for each PR.
3. **Visual QA against Figma.** When done I'll review against Figma as part of my review process.
4. **Post-change diff review.** After the change works, review your own diff and flag anything over-engineered or removable.

## Figma handoff

When I share a Figma link:
- Fetch the frame's design context and variables first.
- Check whether the tokens you need already exist. If they don't, ask before adding.
- Confirm the component name and file location before generating code.
- Report any ambiguity in the design instead of guessing.

## Session hygiene

Update CHANGELOG.md as part of each PR a one-line entry for what shipped.
Commit messages: imperative mood, one line, describe what and why briefly. Example: Add nav dropdown; keyboard-navigable per a11y checklist.

## Things to ask before doing

- Adding a dependency.
- Introducing a new pattern not already used in the repo.
- Changing a design token.
- Refactoring code outside the scope of the current task.
- Anything that would produce a diff larger than ~200 lines.

## Font usage

Satoshi Variable (Variable font)

available axes:
`'wght' (range from 300.0 to 900.0)`

Satoshi VariableItalic (Variable font)

available axes:
`'wght' (range from 300.0 to 900.0`

