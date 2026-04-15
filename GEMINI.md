# GEMINI.md

## Project Overview

This is a minimalist personal blog and portfolio website built with **Astro (v6)**. The project is designed for high performance and a clean, typography-focused aesthetic. It utilizes modern web technologies to provide a seamless experience for both readers and the developer.

### Key Technologies
- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Content**: MDX (Markdown with JSX) managed via Astro's Content Layer API.
- **Search**: [Pagefind](https://pagefind.app/) for fast, static-site search.
- **Deployment**: Configured for Vercel.
- **Utilities**: `clsx` and `tailwind-merge` for robust class management.

---

## Building and Running

### Prerequisites
- Node.js (Latest LTS recommended)
- `npm` or `pnpm`

### Commands
- **Install Dependencies**:
  ```bash
  npm install
  # or
  pnpm install
  ```
- **Development Server**:
  ```bash
  npm run dev
  ```
  Starts a local server at `http://localhost:4321`.
- **Production Build**:
  ```bash
  npm run build
  ```
  Runs type checking (`astro check`) followed by the production build (`astro build`). The output is generated in the `dist/` directory.
- **Preview Build**:
  ```bash
  npm run preview
  ```
  Previews the production build locally.

---

## Development Conventions

### Content Management
- **Collections**: Data is organized into `blog` and `projects` collections.
- **Location**: Content files are located in `src/content/blog/` and `src/content/projects/`.
- **Schema**: Frontmatter validation schemas are defined in `src/content.config.ts`.
- **Drafts**: Use the `draft: true` property in MDX frontmatter to exclude content from production builds.

### Styling and UI
- **Tailwind CSS**: The project uses Tailwind CSS v4. Custom styles are in `src/styles/global.css`.
- **Class Utilities**: Always use the `cn` utility from `src/lib/utils.ts` for combining Tailwind classes and handling conditional logic.
- **Components**: Reusable UI elements are located in `src/components/`. Follow the existing pattern of using `.astro` files for components.

### Architecture and Data
- **Global Constants**: Site-wide metadata (Title, Social Links, etc.) is managed in `src/consts.ts`.
- **TypeScript**: Strictly typed using interfaces in `src/types.ts`.
- **Layouts**: The primary layout is `src/layouts/Layout.astro`, which wraps all pages and includes the `Head`, `Header`, `Footer`, and `Pagefind` components.
- **Routing**: Astro's file-based routing is used in `src/pages/`. Dynamic routes for blog posts and projects are handled via `[...id].astro` files.

### Search Integration
- The search functionality is powered by Pagefind. It indexes the content during the build process.
- The `magnifying-glass` button in the `Header.astro` triggers the search UI provided by the `PageFind.astro` component.
