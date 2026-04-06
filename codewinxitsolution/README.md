# CodeWinx IT Solutions — Next.js Website

A production-ready Next.js 14 website for **CodeWinx IT Solutions**, a full-service IT agency.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Variables + Inline Styles (no Tailwind dependency)
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono via Google Fonts
- **Animations**: CSS keyframes

---

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone or extract the project
cd codewinxitsolution

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
codewinxitsolution/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── projects/page.tsx   # Projects portfolio page
│   ├── contact/page.tsx    # Contact form page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # SEO robots config
│
├── components/
│   ├── Navbar.tsx          # Responsive navigation
│   ├── Footer.tsx          # Site footer with links
│   ├── Hero.tsx            # Landing hero section
│   ├── ServiceCard.tsx     # Reusable service card
│   └── ProjectCard.tsx     # Reusable project card
│
├── lib/
│   └── constants.ts        # All site data (services, projects, team, etc.)
│
├── styles/
│   └── variables.css       # CSS custom properties / design tokens
│
└── public/
    ├── images/             # Static images (add your own)
    └── ASSETS_README.md    # Image requirements guide
```

---

## Customization Guide

### 1. Update site content
Edit `lib/constants.ts` to change:
- Services list
- Projects/portfolio
- Team members
- Testimonials
- Stats

### 2. Update branding
- Replace `public/logo.png` with your logo
- Replace `public/favicon.ico`
- Update colors in `styles/variables.css`

### 3. Update contact details
Edit `.env.local`:
```
NEXT_PUBLIC_SITE_NAME=Your Company Name
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@yoursite.com
NEXT_PUBLIC_PHONE=+91-XXXXXXXXXX
```

### 4. Add real images
Follow instructions in `public/ASSETS_README.md` to add:
- Hero image
- Service images
- Project screenshots
- Team photos

---

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com) for automatic deployments.

---

## SEO Features

- ✅ Dynamic `<title>` and `<meta description>` per page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Auto-generated `/sitemap.xml`
- ✅ `robots.txt` configured
- ✅ Semantic HTML structure
- ✅ Google Fonts optimized via `@import`

---

## License

© 2024 CodeWinx IT Solutions. All rights reserved.
