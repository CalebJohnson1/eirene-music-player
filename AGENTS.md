# AGENTS.md

Compact guidance for OpenCode sessions working in this repo.

## Session style

This user is learning. This is their first React project, and they want to develop a deep understanding of everything they touch (not surface-level recipes).

When asked about a React (or stack) convention:
- Answer directly, then suggest additional learning (links to official docs, related concepts to explore).
- Use **only** official documentation as a source unless the user says otherwise. For React that means react.dev; do not cite blog posts or third-party tutorials.
- When asked *how* to do something, always include the *why* — the reasoning, not just the recipe.
- Unpack fundamentals when they come up (JSX, components, props, state, hooks, etc.) — don't assume prior React knowledge. Link to the relevant react.dev page so the user can read the canonical explanation.
- **Do not write code or modify files unless the user explicitly asks.** This is a learning project; the user is building it themselves. Default to explanation, suggestion, and pointing at the docs. Only touch files when given a direct instruction (e.g. "create X", "update Y").
- **Prefer pointing to official docs/resources over writing code snippets.** When the user asks "how do I do X," link to the relevant official page that teaches it (react.dev, MDN, Tailwind, TypeScript) rather than writing an inline code example. The user wants to read the canonical source and build understanding themselves, not be handed code to paste.
- **Be direct and specific.** The user does not handle ambiguity or vague instructions well. When presenting options, lay them out clearly rather than hedging. Use concrete file paths, exact values, and unambiguous phrasing. If something is "either/or," say so explicitly instead of implying it.

### Modern React first

React 19 has new conventions (refs as props, the `use` hook, Actions, no `forwardRef` in most cases). Default to the modern way; when older patterns still appear in tutorials, briefly note why they're legacy.

### Code example style

- Default to pointing at the official docs that teach the concept (react.dev, MDN, Tailwind, TypeScript) rather than writing inline code samples. The user wants to read the canonical source and build the understanding themselves.
- When a code snippet is genuinely necessary (the user asks for one, or the concept can't be shown by linking), prefer small, self-contained snippets over large file dumps.
- Add brief inline comments for non-obvious lines; explain *why*, not just *what*.
- Show the file path and where the snippet goes (e.g. `src/BottomBar.tsx:5`).

### Change pacing

Project is early-stage. Prefer small, reviewable changes over rewrites. Surface design choices (state shape, component boundaries, library picks) before implementing.

## Official docs by stack piece

- React: https://react.dev
- Vite: https://vite.dev
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

Cite these inline; no blog posts or third-party tutorials.

## Industry-standard conventions

When teaching, default to conventions that are mainstream in the React/TS ecosystem — not personal taste. When a topic has multiple defensible approaches, briefly note the trade-off and the community default rather than picking a side silently.

Reinforce these when relevant:
- **TypeScript**: `strict` mode is on; prefer named exports; use `import type` for type-only imports (enforced here by `verbatimModuleSyntax`); avoid `any` — prefer `unknown` and narrow.
- **React**: functional components, Rules of Hooks, lift state up, controlled inputs, stable `key` props on lists, never mutate state directly.
- **Naming**: `PascalCase` for components/types, `camelCase` for variables/functions, `SCREAMING_SNAKE_CASE` for module-level constants.
- **Accessibility**: semantic HTML first (`<button>`, `<nav>`, etc.); add ARIA only when needed; every interactive control must be keyboard reachable.
- **Errors**: error boundaries for render errors; explicit `loading` / `error` states for async work — never `await` and assume success.

When unsure, point the user to the relevant official doc so they can verify. Conventions evolve; treat any single source as a starting point, not gospel.

## Stack

React 19 + TypeScript + Vite 8 + Tailwind CSS v4. Early-stage; only `src/BottomBar.tsx` is wired into `src/main.tsx` so far.

## Commands

- `npm run dev` — Vite dev server with HMR.
- `npm run build` — runs `tsc -b` (project references) then `vite build`. Type errors fail the build.
- `npm run lint` — `eslint .` (flat config in `eslint.config.js`).
- `npm run preview` — preview the built bundle.

There is no test runner, formatter, or codegen step configured.

## Verification

Before considering work done, run in order: `npm run lint` then `npm run build`. The build's `tsc -b` step is the typecheck (no separate `typecheck` script).

## TypeScript layout

`tsconfig.json` is a root that references two project files via `tsc -b`:
- `tsconfig.app.json` — covers `src/` (app code).
- `tsconfig.node.json` — covers `vite.config.ts` only.

Both use `moduleResolution: bundler`, `verbatimModuleSyntax: true`, `noEmit: true`, `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`. Consequences an agent must respect:
- Use `import type` for type-only imports (verbatimModuleSyntax is on).
- No unused locals/parameters — they fail the build, not just lint.
- No runtime TS features that aren't erasable (no enums, no namespaces, no parameter properties).

## Tailwind v4 specifics

- Tailwind v4 is wired via the `@tailwindcss/vite` plugin in `vite.config.ts` — there is **no** `tailwind.config.js`, `postcss.config.js`, or `@tailwind` directives.
- Tailwind is imported with `@import "tailwindcss";` at the top of `src/index.css`. Add custom CSS/Tokens there, not in a config file.
- `package.json` depends on both `tailwindcss` (the real v4 package) **and** a package literally named `tailwind` (^2.3.1, an unrelated registry package). Do not choose the `tailwind` import; the Vite plugin and CSS import target `tailwindcss`.

## Code organization

- Entry: `index.html` → `src/main.tsx` → currently just renders `src/BottomBar.tsx`.
- UI icons live as TSX components under `src/assets/Icons/`. `src/components/` exists but is currently empty.
- Body background is set in `src/index.css` (`#14161A`); player chrome uses the `#001526` dark theme seen in `BottomBar.tsx`.

## Git

Default branch is `master` (not `main`). Single initial commit so far.

## Domain

It's a music player — all of React fundamentals, the audio side (Web Audio API, `HTMLMediaElement`, MediaSession API), and UI/UX practices (accessibility, responsive design, polish) are in scope. Flag any of these as they become relevant to the current task.