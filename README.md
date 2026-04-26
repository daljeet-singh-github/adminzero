# AdminZero Website

Static GitHub Pages site for AdminZero, a Melbourne-based practice automation consultancy for allied health practices in Australia.

## Folder Structure

- `*.html` - public website pages kept at the repo root to preserve simple GitHub Pages URLs.
- `assets/` - shared CSS, favicon, images and downloadable files.
- `templates/` - reusable audit, quote, kickoff, follow-up and handover email templates.
- `delivery-templates/` - reusable delivery assets for referral trackers, intake forms, SharePoint structure, Power Automate naming and implementation checklists.
- `docs/` - internal project documentation, planning notes and operating guide.
- `analytics.js` - GA4, Microsoft Clarity and tracking helper script.
- `robots.txt`, `sitemap.xml`, `sitemap.html`, `llms.txt`, `about-adminzero.md` - crawl, SEO and AI-readable discovery files.
- `AGENTS.md` and `CLAUDE.md` - agent context files kept at the root for tooling compatibility.

## Main Pages

- `index.html`
- `referral-intake-automation.html`
- `free-practice-admin-audit.html`
- `admin-waste-calculator.html`
- `allied-health-practice-automation-blueprint.html`
- `example-case-studies.html`

## Operating Docs

- `docs/ADMINZERO_OPERATIONS_GUIDE.md`
- `docs/CODE_TASK_BOARD.md`
- `docs/PROJECT_CONTEXT.md`

## Before Publishing Changes

Run:

```bash
git diff --check
xmllint --noout sitemap.xml
```

Then check the homepage, mobile layout and Free Practice Audit form on the live GitHub Pages site after deployment.
