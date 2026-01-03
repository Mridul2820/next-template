# Next.js Template with shadcn/ui

A modern, production-ready Next.js template featuring shadcn/ui components, TypeScript, Tailwind CSS, and comprehensive tooling.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (Pages Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code Quality**: ESLint, Prettier, Husky

## Features

- ⚡️ Next.js 16 with Pages Router
- 🎨 shadcn/ui components (easily customizable)
- 🎭 Tailwind CSS v4 with CSS variables for theming
- 📝 TypeScript for type safety
- 🔍 ESLint and Prettier configured
- 🪝 Husky for git hooks
- 🎯 Path aliases configured (`@/components`, `@/lib`, etc.)
- 📦 Pre-configured component registry

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (port 3016)
- `npm run lint` - Run ESLint
- `npm run lint-fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run check-format` - Check code formatting

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── pages/
│   │   ├── _app.tsx     # App wrapper
│   │   ├── _document.tsx
│   │   ├── index.tsx    # Home page
│   │   └── api/         # API routes
│   └── styles/
│       └── globals.css  # Global styles & CSS variables
├── public/              # Static assets
└── components.json      # shadcn/ui configuration
```

## Adding Components

This template uses shadcn/ui. Add new components with:

```bash
npx shadcn@latest add <component-name>
```

For example:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Browse available components at [ui.shadcn.com](https://ui.shadcn.com/).

## Customization

### Theme

Modify theme colors in [src/styles/globals.css](src/styles/globals.css). The template uses CSS variables for easy theming.

### Components

shadcn/ui components are added to [src/components/ui/](src/components/ui/) and can be customized directly.

### Configuration

- **Tailwind**: Uses Tailwind CSS v4 with PostCSS
- **TypeScript**: Configuration in [tsconfig.json](tsconfig.json)
- **ESLint**: Configuration in [eslint.config.mjs](eslint.config.mjs)

## API Routes

API routes are located in [src/pages/api/](src/pages/api/). Example endpoint:

- [http://localhost:3000/api/hello](http://localhost:3000/api/hello)

Files in `pages/api` are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Deployment

### Vercel (Recommended)

Deploy easily on [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/next-template)

### Other Platforms

This template works on any platform that supports Next.js:

- AWS Amplify
- Netlify
- Railway
- Render
- Your own infrastructure

Check [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for details.

## License

MIT
