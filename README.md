# 68a76ad3c7d93ab2c1d05c10

This Next.js website was generated using AI-powered template selection and enhancement.

## Generation Method

- **Template System**: Pre-built templates from database
- **AI Enhancement**: Content customized by AI with page-specific context
- **Structure**: Clean layout-based architecture
- **Unique Components**: Each page gets unique component instances (no deduplication)
- **Import System**: Fixed with default imports and PascalCase paths

## Pages

- **Home** (/): 4 components
- **About** (/about): 4 components
- **Services** (/services): 4 components
- **Pricing** (/pricing): 4 components
- **Contact** (/contact): 3 components

## Layout Components

- Header: 2 components
- Footer: 2 components

## Statistics

- **Total Pages**: 5
- **Total Components**: 23 (unique instances)
- **Generated**: 2025-08-21T18:55:31.287Z
- **Method**: Template-based generation with unique page components and fixed imports

## Component Architecture

Each page header gets a unique component file to ensure page-specific content:
- Home page: `PageHeaderHome.tsx`
- About page: `PageHeaderAbout.tsx`
- Services page: `PageHeaderServices.tsx`

This prevents content duplication and ensures each page has relevant messaging.

## Import Fix

All imports now use:
- **Default imports**: `import Component from './Component'` (no curly braces)
- **PascalCase paths**: `'@/components/Component'` (matches file names)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Customization

All components are in `src/components/` and can be edited directly.
Each component file is unique to prevent cross-page content conflicts.

---
Generated with AI Template-Based Website Builder (Fixed Import Issues)
