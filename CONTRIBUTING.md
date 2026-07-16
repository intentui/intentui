# Contributing to Intent UI

Thanks for helping make Intent UI better. Contributions of all sizes are
welcome, from fixing a typo to improving an accessible component.

Before starting, search the existing [issues](https://github.com/intentui/intentui/issues)
and [pull requests](https://github.com/intentui/intentui/pulls) to avoid duplicating
work. For large features or breaking changes, open an issue first so we can agree
on the direction. Small fixes can go straight to a pull request.

## Ways to contribute

You can help by:

- Reporting reproducible bugs.
- Suggesting improvements or new components.
- Improving documentation and examples.
- Fixing accessibility, styling, or interaction issues.
- Contributing components and blocks.

When reporting a bug, include the affected component, reproduction steps,
expected behavior, browser information, and screenshots or a minimal reproduction
when relevant.

## Local setup

Intent UI uses Node.js 20 or later and npm.

1. Fork the repository and clone your fork.
2. Create a branch from `main` with a descriptive name.
3. Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The documentation site will be available at [http://localhost:3000](http://localhost:3000).

## Project structure

Most contributions touch one or more of these directories:

```text
src/
├── app/pre-blocks/          # Block source files
├── components/
│   ├── examples/            # Component examples shown in the docs
│   └── ui/                  # Registry-distributed UI components
├── content/docs/            # MDX documentation
├── hooks/                   # Shared React hooks
├── lib/                     # Shared utilities
├── scripts/                 # Registry and documentation generators
└── stubs/                   # Installation templates
```

The registry is assembled by `src/scripts/generate-registry.ts`. Generated files
under `__registry__/`, `public/r/`, `public/registry/`, and `public/stubs/` must
not be edited directly.

## Component contributions

Intent UI is built on React Aria Components and Tailwind CSS. New and updated
components should follow the patterns already established in `src/components/ui/`.

- Use a React Aria primitive when an appropriate one exists.
- Preserve keyboard navigation, focus management, labeling, validation, and
  disabled states.
- Use existing semantic color tokens instead of hard-coded theme colors.
- Use `intent` for visual-purpose variants and follow existing component APIs.
- Include or update examples in `src/components/examples/` for visible behavior.
- Update the matching file in `src/content/docs/` when public APIs or behavior
  change.
- Avoid editing generated registry output manually.

After changing registry-distributed components, examples, hooks, shared
dependencies, blocks, or installation stubs, regenerate the registry:

```bash
npm run r
```

Review the generated result, but only commit generated files that are already
tracked by the repository.

## Before opening a pull request

Run the standard checks:

```bash
npm run lint
npm run typecheck
npm run build
```

If formatting needs to be fixed, run `npm run format`, review its changes, and
then run the checks again. Registry-affecting changes should also run `npm run r`
before the standard checks.

## Pull request checklist

- Keep the pull request focused on one change.
- Explain what changed and why.
- Link the relevant issue when one exists.
- Include screenshots or recordings for visual changes.
- Describe keyboard and screen-reader behavior for interaction changes.
- Call out breaking changes and migration steps clearly.
- Confirm the documented checks pass locally.

## Code of Conduct

Everyone participating in Intent UI must follow our
[Code of Conduct](https://github.com/intentui/intentui/blob/main/CODE_OF_CONDUCT.md).
Unacceptable behavior can be reported to [irsyadadl@pm.me](mailto:irsyadadl@pm.me).

## License

By contributing to Intent UI, you agree that your contributions will be licensed
under the project's [MIT License](https://github.com/intentui/intentui/blob/main/LICENSE).
