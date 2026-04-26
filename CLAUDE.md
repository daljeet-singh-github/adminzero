# AdminZero — Project Context

> This file is the single source of truth for the AdminZero project. Read it fully before doing anything. It covers business context, infrastructure, strategy, current state, and next actions.

---

## Business

**Entity:** AdminZero Pty Ltd  
**Founder:** Daljeet Singh (goes by DJ)  
**Location:** Melbourne, Victoria, Australia  
**Stage:** Pre-revenue side hustle, serious commitment  
**Time available:** 8–15 hours per week  
**Starting budget:** $100–500 AUD  

**What it is:** A practice automation consultancy targeting allied health practices across Australia — physiotherapy, chiropractic, psychology, NDIS providers. Automates manual admin workflows using Microsoft 365 tools practices already pay for (Power Automate + AI). Not custom software — configuration of existing tools.

**Positioning:** Specialist with real referral workflow experience (from day job at CMS). Not a generalist. Works inside M365 — no IT department needed, no ripping out existing systems.

**Three core pain points targeted:**
- Referral and intake processing — 15–20 min per referral, done manually every time
- No-shows and reminder gaps — $80–200 per missed appointment, no waitlist automation
- NDIS / insurance paperwork — WorkCover, private health, NDIS each with different forms and timelines

**Business model:**
- Setup fee: ~$800
- Monthly retainer: ~$400/month
- First milestone: one paying client

---

## Principles

- Inbound only. DJ will never cold call, cold email, or pitch in person. People come to us.
- Claude drives strategy, writing, decisions, research, content. DJ executes: clicks, account creation, publishing, payments.
- No spending until first revenue, except essentials already paid for.
- Keep day job (CMS) completely separate from AdminZero — never mention employer publicly.

---

## Infrastructure

### Website
- **URL:** adminzero.com.au
- **Host:** GitHub Pages
- **Repo:** github.com/daljeet-singh-github/adminzero
- **File:** Single-page `index.html` — no framework, no build tool, all CSS and JS inline
- **Design:** Editorial/newspaper aesthetic. Fonts: Playfair Display (serif), DM Mono (monospace), Jost (sans). Colours: `--ink: #0a0a0a`, `--paper: #f4f1eb`, `--mid: #888`, `--light: #d4d0c8`
- **Form:** Formspree endpoint `https://formspree.io/f/mvzdokqv` — submissions go to djatadminzero@gmail.com
- **OG tags:** Added for LinkedIn link previews

### Domains
- **adminzero.com.au** — primary, live, DNS via Crazy Domains (4x A records to GitHub IPs + CNAME www)
- **practiceautomation.com.au** — held, not in use
- **adminzero.com** — skipped for now

### Email
- **djatadminzero@gmail.com** — primary contact, Formspree submissions land here
- Custom domain email deferred until first revenue (Google Workspace ~$10/month when ready)

### LinkedIn
- **Personal:** Daljeet Singh (DJ) — Founder & Practice Automation Specialist at AdminZero
- **Company page:** AdminZero — Industry: Information Technology & Services
- **Publishing schedule:** Tuesday and Thursday, 8am AEST
- **Status:** First post published. Three posts written and saved in Notes app.

### GitHub
- **Username:** daljeet-singh-github
- **Repo:** adminzero (public) — contains index.html only

---

## Website — Page Structure

1. **Nav** — fixed, 56px. Left: "The Problem" + "How It Works" links. Centre: AdminZero logo. Right: "Free Audit" CTA.
2. **Masthead/Hero** — large editorial headline ("Your team deserves better than paperwork"), subheadline aside with CTA button, three stat columns (15–20 min / $200+ / Week 1).
3. **Pain Points** — three columns: Referral & Intake, No-Shows & Reminders, NDIS & Insurance.
4. **How It Works** — four steps: Free Audit → Custom Build → Live Within a Week → Ongoing Support.
5. **Audit Form** — left panel (dark, checklist), right panel (form). Fields: name, practice name, email, phone (optional), practice size, biggest admin headache.
6. **Footer** — copyright AdminZero Pty Ltd 2025, email link.

**Known improvement items parked (not yet actioned):**
- `--white` and `--rule` CSS variables defined but unused — dead code
- `col-block` margin handling is awkward — could use grid padding instead
- No analytics (no GA, no Plausible)
- No schema markup (LocalBusiness)
- No OG tags for social sharing beyond LinkedIn
- No email auto-reply sequence when a form submission lands

---

## Marketing Strategy

**Primary channel:** Facebook Groups — allied health practice owner communities. Join groups, observe for ~1 week, build credibility through useful contributions before any commercial presence.

**Secondary channel:** LinkedIn — 3x posts per week (Tue/Thu/one more), written by Claude, published by DJ. Content focuses on admin pain points, automation wins, practice efficiency — not salesy.

**No paid ads. No cold outreach. No in-person pitching.**

---

## Current State (as of 26 April 2026)

### Done
- Business concept validated and scoped
- Domain registered and DNS configured (adminzero.com.au live)
- practiceautomation.com.au registered and held
- Website built through three design iterations, final editorial design approved and live
- Formspree connected, form submissions routing to Gmail
- OG meta tags added
- Brand images created (HTML screenshot method) for LinkedIn banner and profile photo
- LinkedIn personal profile live
- LinkedIn company page set up
- First LinkedIn post published
- Three LinkedIn posts written and saved

### Not Done
- Facebook Groups strategy not started — no groups joined yet
- No email auto-reply for form submissions (leads could go cold)
- No service tiers or pricing page on website
- No case studies or social proof
- Website improvement items listed above not actioned
- No custom domain email
- No analytics on website

---

## Immediate Next Actions

1. **Facebook Groups** — identify 3–5 active allied health practice owner Facebook groups, join them, observe for one week before posting anything
2. **LinkedIn cadence** — maintain Tue/Thu publishing, generate next batch of posts
3. **Form auto-reply** — set up a simple automated acknowledgement email so leads don't go cold waiting for manual response (can use Formspree's notification feature or Gmail filter)
4. **Website improvements** — revisit parked items when bandwidth allows
5. **First client** — all activity is pointed at generating one inbound inquiry and converting it

---

## Key Contacts / Accounts

| Service | Account | Notes |
|---|---|---|
| Email | djatadminzero@gmail.com | Primary for everything AdminZero |
| GitHub | daljeet-singh-github | Hosts the website repo |
| Formspree | mvzdokqv endpoint | Form submissions |
| Crazy Domains | adminzero.com.au | DNS management |
| LinkedIn | Daljeet Singh (DJ) | Personal + company page |

---

## Tone & Style (for all content)

- British English, AUD $, metric
- Short paragraphs, minimal formatting, prose over bullets
- Grounded, experienced, slightly informal — senior operator talking to a peer
- No corporate language: no "robust", "comprehensive", "cutting-edge", "seamless", "transformative"
- No filler, no hedging, no em dashes
- Specific over general — if a sentence could apply to anything, delete it
