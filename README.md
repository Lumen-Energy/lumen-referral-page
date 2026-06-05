# Lumen Energy Referral Page

A Next.js landing page for Lumen Energy's customer referral program.

## Overview

This referral program landing page encourages existing Lumen customers to refer commercial real estate decision-makers who can benefit from Lumen's energy solutions.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** CSS with custom properties (Lumen design tokens)
- **Fonts:** ABC Arizona Serif, ABC Pelikan

## Project Structure

```
app/
  layout.tsx         # Root layout with fonts and metadata
  page.tsx           # Main referral page
  globals.css        # Global styles and CSS variables

components/referral/
  nav.tsx            # Navigation header
  hero.tsx           # Hero section with headline
  why-section.tsx    # Why refer section
  who-section.tsx    # Who to refer section
  criteria-section.tsx # Referral criteria
  how-section.tsx    # How it works steps
  form-section.tsx   # Referral submission form
  faq-section.tsx    # FAQ accordion
  footer.tsx         # Site footer

public/
  assets/            # Images (hero, building photos, logo)
  fonts/             # Custom font files
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
