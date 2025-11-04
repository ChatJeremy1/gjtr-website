# Grand Junction Truck Repair — Website

**Stack:** Next.js 14 (App Router) · Vercel · Tailwind · Framer Motion · Resend (email) · Twilio (SMS) · DocuSign (signatures)

## Quick start
```bash
npm i   # or: pnpm i / yarn
cp .env.example .env.local
npm run dev
```

Edit **app/page.tsx** or **components/Landing.tsx** to update copy. Add your **logo** to `public/logo.png`.

## Hooking up notifications
- **Resend**: add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` to `.env.local` or Vercel env.
- **Twilio**: add `TWILIO_*` vars. The request form posts to `/api/request` which emails and texts you.
- **DocuSign**: implement embedded signing flow in `app/api/docusign/route.ts` (integration key & JWT).
- **CallRail**: provision one tracking number that forwards to `970-589-2320`. Replace header/footer tel with that number if desired.
- **Google Analytics**: add GA snippet in `app/layout.tsx` when you’re ready.

## Accessibility & performance
- Meets WCAG 2.1 AA targets (semantic structure, labels, contrast using #FCD014 on black/white). Optimize images before upload.

## Deployment
- Push to GitHub and connect the repo to **Vercel**; environment variables go in the Vercel dashboard.
