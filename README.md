
# Merlin Hydraulics Product Showcase

A React and Vite product showcase website for Merlin Hydraulics. The app presents company pages, product categories, product cards, technical product detail pages, gallery content, infrastructure highlights, and contact navigation in a polished industrial UI.

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS through `@tailwindcss/vite`
- Motion for page and card transitions
- GSAP for product-card hover interaction
- Lucide React for icons
- Three.js / globe-related packages for visual sections

## Project Structure

```text
.
|-- assets/                     # SVG brand and industry assets
|-- public/                     # Static files served from site root
|   |-- brochure-pages/         # Brochure images
|   |-- gallery/                # Gallery photos
|   |-- hero_section_videos/    # Home hero videos and category icons
|   |-- products/               # Product images and technical sketches
|   `-- steel-products/         # Steel category product images
|-- src/
|   |-- components/             # Shared page sections and UI components
|   |-- pages/                  # Page-level views
|   |-- types/                  # Shared TypeScript types
|   |-- App.tsx                 # App view routing and navigation state
|   |-- constants.ts            # Product categories and product data
|   |-- productAssets.ts        # Product image/spec overrides
|   |-- index.css               # Tailwind and global styles
|   `-- main.tsx                # React entry point
|-- index.html
|-- package.json
|-- tsconfig.json
`-- vite.config.ts
```

## Getting Started

### Prerequisites

Install Node.js 20 or newer. The project uses `package-lock.json`, so use `npm` for consistent installs.

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The dev server is configured to run on:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The production output is generated in `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

This runs `tsc --noEmit`.

## Environment Variables

Create a `.env` file from `.env.example` if the deployment environment needs these values:

```bash
GEMINI_API_KEY="your_key_here"
APP_URL="your_app_url_here"
```

Current Vite config exposes `GEMINI_API_KEY` as `process.env.GEMINI_API_KEY`.

## App Pages

The app uses internal view state rather than a route library. Navigation is managed in `src/App.tsx`.

- `home`: landing page
- `store`: product category and product card listing
- `detail`: product technical detail page
- `gallery`: company gallery
- `about`: about/company information
- `infrastructure`: infrastructure and process highlights
- `contact`: enquiry/contact page

Hash URLs are used for browser history, for example:

```text
#store
#gallery
#product-mlpvl
```

## Product Data

Main product and category data lives in:

```text
src/constants.ts
```

Product image and technical-data overrides live in:

```text
src/productAssets.ts
```

### Categories

Categories are defined in `CATEGORIES` inside `src/constants.ts`.

Current category IDs include:

- `cylinder`
- `pumping`
- `construction`
- `steel`
- `sugar`

Each product must use one of these IDs in its `category` field to appear under that category in the product store.

### Adding a Product

Add a product object to `BASE_PRODUCTS` in `src/constants.ts`:

```ts
{
  id: "example-product",
  name: "Example Product",
  category: "construction",
  description: "Short product description.",
  image: "/products/example-product.png",
  color: "bg-blue-50",
  specs: {
    capacity: "Custom",
    stroke: "Application-specific",
    pressure: "Hydraulic"
  },
  features: [
    "Feature one.",
    "Feature two."
  ],
  technicalData: {
    headers: ["Specification", "Details"],
    rows: [
      ["Application", "Construction lifting"]
    ]
  }
}
```

Static asset paths should start from the public root. For example, this file:

```text
public/products/3. Equipments for Construction/1001.png
```

is referenced in code as:

```text
/products/3. Equipments for Construction/1001.png
```

### Product Assets

Use `src/productAssets.ts` when you want to override or enrich an existing product without changing the main product record. The key must match the product `id`.

Common override fields:

- `image`
- `diagramImage`
- `diagramNote`
- `topViewImage`
- `topViewNote`
- `subtitle`
- `specs`
- `features`
- `technicalData`

## Styling Notes

- Global styles are in `src/index.css`.
- Some legacy/global CSS exists in `styles.css`.
- Product cards are rendered by `src/components/products/ProductCard.tsx`.
- Product listing layout is in `src/pages/ProductStorePage.tsx`.
- Product detail layout is in `src/pages/ProductDetailPage.tsx`.

## Static Assets

Use `public/` for files that should be served directly by Vite.

Examples:

- Product images: `public/products/`
- Steel product images: `public/steel-products/`
- Gallery images: `public/gallery/`
- Hero videos and icons: `public/hero_section_videos/`
- Certification images: `public/certifications-banner.png`, `public/cert-*.png`

Use `assets/` for imported SVGs and source-style visual assets.

## Deployment

Build the app:

```bash
npm run build
```

Deploy the generated `dist/` folder to any static hosting provider, such as Vercel, Netlify, Cloudflare Pages, or a static web server.

Because the app uses hash-based view state, it works well on static hosting without server-side route rewrites.

## Troubleshooting

### `npm` or `node` is not recognized

Install Node.js and make sure it is available on your system `PATH`.

Check installation:

```bash
node --version
npm --version
```

### Product image does not load

Check that:

- The image exists under `public/`.
- The path in code starts with `/`.
- Folder names and file names match exactly, including spaces and capitalization.

### Product does not show in a category

Check that the product `category` value matches a category `id` in `CATEGORIES`.

### TypeScript errors after changing product data

Confirm the product object matches the `Product` interface in `src/constants.ts`.
