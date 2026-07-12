# Mishin Websites — Portfolio Site

A single-page Next.js site, ready to deploy on Vercel for free (no Webflow hosting fees).

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). No env vars needed. Click Deploy.
4. Add your custom domain (mishinwebsites.com) in Vercel → Project → Settings → Domains,
   then update your domain's DNS as instructed.

## Notes
- Images currently hotlink to your existing Webflow CDN asset URLs (cdn.prod.website-files.com).
  These will keep working as long as those assets stay published on Webflow. For full
  independence, download the images you want to keep and drop them in `public/images/`,
  then swap the `src` paths in `app/page.tsx` to `/images/yourfile.ext`.
- Two placeholder project cards are included in the "Web Projects" section — replace the
  `title`, `desc`, `image`, and `icons` fields in `app/page.tsx` (`webProjects` array) with
  your next real projects.
- Case studies: `app/projects/[slug]/page.tsx` has a stub route per project. Fill in the
  `caseStudies` object with real write-ups as you produce them — no routing changes needed.
- Brand colors and fonts (DM Sans + DM Mono, navy/blue palette) match your proposal template
  and are defined in `tailwind.config.js`.
