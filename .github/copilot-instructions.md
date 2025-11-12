# GitHub Copilot Instructions

## Project Overview

This is a React 19 + TypeScript + Vite project configured with Tailwind CSS v4 and shadcn/ui components. The project uses the "new-york" style variant from shadcn/ui with a neutral base color scheme.

## Tech Stack & Key Dependencies

- **React 19.2** with TypeScript 5.9
- **Vite 7** for build tooling with HMR
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (note: v4 uses `@import` directives, not config files)
- **shadcn/ui** component system configured at `components.json`
- **lucide-react** for icons
- **ESLint 9** with flat config format

## Path Aliases & Module Resolution

The project uses `@/` path alias mapped to `./src/`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

TypeScript paths are configured in both `tsconfig.json` and `tsconfig.app.json`. Always use `@/` imports instead of relative paths for src files.

## Styling Conventions

### Tailwind CSS v4 Specifics
- CSS is in `src/index.css` with `@import 'tailwindcss'` (v4 syntax, not v3 `@tailwind` directives)
- Uses CSS variables with `@theme inline` block for design tokens
- Custom dark mode variant: `@custom-variant dark (&:is(.dark *))`
- Includes `tw-animate-css` for animations
- Color scheme uses `oklch()` color space for better perceptual uniformity

### Component Styling
- Use the `cn()` utility from `@/lib/utils` for conditional class merging
- Example: `cn("base-class", condition && "conditional-class")`
- This utility combines `clsx` and `tailwind-merge` to handle conflicts

## Component Architecture

### shadcn/ui Integration
- Components should be added to `src/components/ui/` via shadcn CLI
- Use `npx shadcn@latest add <component>` to install new components
- All shadcn components use the configured aliases from `components.json`
- CSS variables for theming are defined in `src/index.css` (both light and dark mode)

### Component Structure
- Place UI primitives in `src/components/ui/`
- Place composed/feature components in `src/components/`
- Use TypeScript interfaces for props, colocated with component definitions

## Development Workflows

### Available Scripts
- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - TypeScript check (`tsc -b`) + production build
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

### Build Process
The build runs TypeScript compiler in build mode first (`tsc -b`), then Vite builds. Fix TypeScript errors before addressing build output issues.

## TypeScript Configuration

- **Strict mode enabled** - all strict checks are on
- **verbatimModuleSyntax: true** - must use `type` keyword for type-only imports
- **noUnusedLocals** and **noUnusedParameters** enabled - clean up unused code
- **bundler moduleResolution** - optimized for Vite
- Uses React 19's automatic JSX runtime (`jsx: "react-jsx"`)

## ESLint Configuration

- Uses **flat config format** (`eslint.config.js`, not `.eslintrc`)
- Configured with `defineConfig` helper and `globalIgnores` for dist folder
- Plugins: `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`
- Targets `**/*.{ts,tsx}` files only
- Browser globals enabled for client-side code

## Project Conventions

1. **CSS-first theming**: Modify `src/index.css` variables, not component styles directly
2. **Type-only imports**: Use `import type { ... }` for types due to `verbatimModuleSyntax`
3. **No components folder yet**: Currently only `App.tsx` exists; create structure as needed
4. **Minimal setup**: Project is intentionally lean - add patterns as features develop

## External Dependencies & Integration Points

- No routing library configured yet
- No state management library installed
- No API client or data fetching setup
- Form handling and validation libraries not yet added

When adding these, prefer:
- TanStack Router or React Router for routing
- Zustand or Context API for state management
- TanStack Query for data fetching
- React Hook Form + Zod for forms (common with shadcn/ui)

## Common Gotchas

1. **Tailwind v4 syntax**: Use `@import 'tailwindcss'` not `@tailwind base/components/utilities`
2. **React 19**: Be aware of breaking changes from v18 (ref handling, new hooks)
3. **Vite 7**: Latest version, check compatibility when adding plugins
4. **No config file for Tailwind**: v4 uses CSS-first approach; configure in `@theme` blocks
5. **ESLint flat config**: Different syntax from legacy `.eslintrc.json` files
