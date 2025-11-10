# alx-project-0x00-setup

# ALX Project 0x00: Next.js Setup

This is a Next.js project scaffolded with TypeScript, ESLint, Tailwind CSS, and import aliases.

A modern web app built with Next.js, TypeScript, Tailwind CSS, and Pages Router.

## Features
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code quality
- File-based routing (Pages Router)

## Pages
- `/` → Home page with "Get Started" button
- `/landing` → Landing Page
- `/about` → About Page

## Components Added
- `Card.tsx`: Full property card with image, pills, rating, price
- `Pill.tsx`: Reusable tag component
- Images added to `public/assets/images`


## Task 5 Completed!
- Created `PillProps` interface in `interfaces/index.ts`
- Made `Pill` component dynamic using props and TypeScript
- Used `Card` component multiple times on `/landing` page
- Added responsive grid layout with Tailwind CSS


## Task 6: Advanced Button Component
- Created reusable `Button.tsx` with full TypeScript support
- Supports **size**, **shape**, and **variant** props
- 9 live examples on `/landing` page
- Clean class mapping and default values
- Fully responsive and animated

### Button Variations
- Sizes: small, medium, large
- Shapes: rounded-sm, rounded-md, rounded-full
- Variants: primary, secondary, outline



## Getting Started
- Install dependencies: `npm install`
- Run dev server: `npm run dev -- -p 3000`
- Open http://localhost:3000
