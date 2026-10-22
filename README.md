# Veyra Legal – Advocates & Legal Consultants

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/services/[slug]` | Service details (income-tax, gst-services, ...) |
| `/portfolio` | Portfolio |
| `/blog` | Blog |
| `/blog/[slug]` | Blog details |
| `/contact` | Contact |
| `/get-a-quote` | Get a quote |
| `/thank-you` | Thank you (forms yahin redirect hote hain) |

## Edit content
Saara text, images aur links `data/data.ts` mein hain. Firm ka naam/phone/email wahin badlo.

## Fonts (sirf 2)
- Titles: Playfair Display
- Body: Plus Jakarta Sans

Sab titles ek hi size class `.section-title` (`app/globals.css`) use karte hain.
