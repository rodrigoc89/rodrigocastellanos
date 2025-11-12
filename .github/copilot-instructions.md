# GitHub Copilot Instructions

## Project Overview

This is a personal portfolio website for Rodrigo Joaquín Castellanos, built with React 19 + TypeScript + Vite. The project uses Tailwind CSS v4 and shadcn/ui components with the "new-york" style variant and a neutral base color scheme. The portfolio showcases professional experience, projects, education, skills, and contact information in a modern, responsive design.

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

## Project Structure

### Data Layer

- **`src/types/portfolio.ts`**: TypeScript interfaces for all portfolio data (PersonalInfo, Skill, Experience, Project, Education, Certification)
- **`src/data/portfolio.ts`**: Single source of truth for all portfolio content, imported by components

### Component Organization

- **Feature components** in `src/components/`: Hero, About, ExperienceSection, Projects, EducationSection, Contact, Header, Footer
- **UI primitives** in `src/components/ui/`: shadcn components (Card, Button, Badge, Avatar, Separator)
- All components use typed props from `src/types/portfolio.ts`

### Portfolio Sections

1. **Hero**: Name, title, avatar, bio, social links, and CTAs with smooth scroll navigation
2. **About**: Personal info, skills organized by category (frontend/backend/database/devops), stats cards
3. **Experience**: Timeline layout with company, position, dates, achievements, and tech badges
4. **Projects**: Grid of project cards with featured section, tech tags, GitHub and demo links
5. **Education**: Academic degrees and professional certifications with details
6. **Contact**: Contact information, social links, and email CTA

## Project Conventions

1. **CSS-first theming**: Modify `src/index.css` variables, not component styles directly
2. **Type-only imports**: Use `import type { ... }` for types due to `verbatimModuleSyntax`
3. **Data-driven content**: Update `src/data/portfolio.ts` to modify portfolio content
4. **Smooth scroll**: Navigation uses `scrollIntoView({ behavior: 'smooth' })` for section anchors
5. **Responsive design**: Mobile-first approach with Tailwind responsive classes (md:, lg:)

## External Dependencies & Integration Points

- **No routing library**: Single-page layout with smooth scroll navigation
- **No state management**: Static portfolio data from `src/data/portfolio.ts`
- **No backend**: Currently client-side only, all data is hardcoded

### Future Enhancements

When adding features, prefer:

- TanStack Router or React Router for multi-page navigation
- React Hook Form + Zod for contact form with validation
- Framer Motion for enhanced animations
- react-email or EmailJS for contact form submissions

## Common Gotchas

1. **Tailwind v4 syntax**: Use `@import 'tailwindcss'` not `@tailwind base/components/utilities`
2. **React 19**: Be aware of breaking changes from v18 (ref handling, new hooks)
3. **Vite 7**: Latest version, check compatibility when adding plugins
4. **No config file for Tailwind**: v4 uses CSS-first approach; configure in `@theme` blocks
5. **ESLint flat config**: Different syntax from legacy `.eslintrc.json` files
6. **Vite path alias**: Configured in `vite.config.ts` with `path.resolve(__dirname, './src')`
