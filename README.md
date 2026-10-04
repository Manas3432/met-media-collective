# MET Media Collective

> Official website for MET Media Collective — a student-run real media agency at MET Institute of Mass Media.

MET Media Collective (MMC) is a student-driven media collective built around real briefs, cross-discipline collaboration, industry exposure, and portfolio-oriented work.

This repository contains the complete source code for the MET Media Collective website.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Pages and Routes](#pages-and-routes)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Supabase Configuration](#supabase-configuration)
- [Available Commands](#available-commands)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Content and Assets](#content-and-assets)
- [Important Implementation Notes](#important-implementation-notes)
- [Updating the Website](#updating-the-website)
- [Handover Notes](#handover-notes)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Overview

The MET Media Collective website presents the collective as a real, student-run media agency rather than a conventional academic department.

The website presents:

- The Collective
- Its objectives
- Media disciplines / verticals
- Mentorship and industry experiences
- Student work and projects
- Team members
- Editorial/blog content
- Join Us / contact functionality

The website is responsive and uses animation, interactive cards, project imagery, and a Supabase-backed contact form.

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Framer Motion
- Lucide React
- CSS

### Backend / Data

- Supabase
- Supabase PostgreSQL database
- Supabase Row Level Security (RLS)

### Hosting / Deployment

- Netlify
- GitHub

### Development

- Node.js
- npm
- ESLint

---

## Features

### Website

- Responsive multi-page React website
- Client-side routing using React Router
- Scroll-to-top navigation between routes
- Custom cursor
- Motion and reveal animations
- Reduced-motion support
- Responsive layouts for desktop, tablet, and mobile
- Interactive hover states
- External project links
- Blog article pages
- Project image slideshows

### Work Section

The Work page contains four featured projects:

1. Mumbai Climate Week – National Anthem Rendition
2. From Classroom Creativity to Award-Winning Cinema
3. MET Takes the Global Stage
4. Evolving Beyond Boundaries

Each project contains its own image collection and external destination link.

### Mentorship Section

The Mentorship page currently highlights:

- Industry Insights
- Creators Court

### Blog

The website currently contains four published blog entries:

1. What Happens When Students Run a Real Media Agency?
2. When Students Take the Lead
3. Digital Trends
4. AR/VR Creative Tech

The first two articles have dedicated article pages.

### Join Us Form

The Join Us page contains a form with:

- Name
- Email
- Subject
- Message

Submitted form data is stored in Supabase.

---

## Project Structure

```text
met-media-collective/
│
├── public/
│   ├── Blog/
│   │   ├── Blog1.png
│   │   └── Blog2.png
│   │
│   ├── Work/
│   │   ├── national-anthem/
│   │   ├── house-of-white-circles/
│   │   ├── cannes/
│   │   └── metamorphosis/
│   │
│   └── other static assets
│
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Objectives.jsx
│   │   ├── Mentorship.jsx
│   │   ├── Work.jsx
│   │   ├── Team.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogArticle.jsx
│   │   └── Contact.jsx
│   │
│   ├── lib/
│   │   └── supabase.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> File names may change as the website evolves. The structure above represents the intended current application architecture.

---

## Pages and Routes

| Route                               | Page            |
| ----------------------------------- | --------------- |
| `/`                                 | Home            |
| `/about`                            | About           |
| `/objectives`                       | Objectives      |
| `/mentorship`                       | Mentorship      |
| `/work`                             | Work            |
| `/team`                             | Team            |
| `/blog`                             | Blog            |
| `/blog/real-media-agency`           | Blog Article 01 |
| `/blog/when-students-take-the-lead` | Blog Article 02 |
| `/join`                             | Join Us         |

The `/join` route renders the Join Us / contact form.

---

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git

Verify the installations:

```bash
node --version
npm --version
git --version
```

### 1. Clone the Repository

```bash
git clone <REPOSITORY_URL>
```

Move into the project directory:

```bash
cd met-media-collective
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a file named `.env.local` in the root of the project.

Add:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Do not commit `.env.local` to Git.

The project uses Vite environment variables, therefore client-accessible variables must use the `VITE_` prefix.

### 4. Start the Development Server

```bash
npm run dev
```

Vite will normally make the application available at:

```text
http://localhost:5173
```

The port may change automatically if `5173` is already in use.

---

## Environment Variables

The application requires:

| Variable                        | Purpose                                              |
| ------------------------------- | ---------------------------------------------------- |
| `VITE_SUPABASE_URL`             | URL of the Supabase project                          |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Publishable key used by the frontend Supabase client |

Example:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

### Security

Do not commit:

```text
.env
.env.local
.env.*.local
```

to Git.

The Supabase publishable key is intended for frontend use, but database access must still be controlled through Supabase Row Level Security policies.

Never place the following in frontend source code:

- Supabase service-role keys
- Database passwords
- Private API keys
- Other server-side secrets

---

## Supabase Configuration

The Join Us form uses Supabase to store submissions.

### Database Table

```text
join_submissions
```

Current columns:

| Column         | Type        | Description                       |
| -------------- | ----------- | --------------------------------- |
| `id`           | bigint      | Automatically generated record ID |
| `name`         | text        | Name submitted through the form   |
| `email`        | text        | Email submitted through the form  |
| `subject`      | text        | Message subject                   |
| `message`      | text        | Message content                   |
| `submitted_at` | timestamptz | Submission timestamp              |

The timestamp defaults to the current time.

### Required Database Schema

For a new Supabase project:

```sql
create table public.join_submissions (
  id bigint generated by default as identity primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  submitted_at timestamptz not null default now()
);
```

### Row Level Security

The table uses Row Level Security.

The intended public access model is:

```text
Anonymous visitor
      │
      │ INSERT
      ▼
join_submissions
```

Public users should not receive unrestricted access to existing submissions.

Do not add public `SELECT`, `UPDATE`, or `DELETE` permissions unless there is a specific administrative requirement and the security implications have been reviewed.

### Supabase Client

The Supabase client is located at:

```text
src/lib/supabase.js
```

It reads:

```js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
```

---

## Available Commands

### Start development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

> These commands correspond to the scripts configured in `package.json`. If the scripts are changed, update this section accordingly.

---

## Production Build

Before deploying, verify that the application builds successfully:

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

The `dist` directory is generated output and should not be manually edited.

---

## Deployment

The website is deployed using Netlify.

The intended deployment workflow is:

```text
Developer
   │
   │ git push
   ▼
GitHub
   │
   │ connected repository
   ▼
Netlify
   │
   │ npm run build
   ▼
Production Website
```

### Netlify Build Settings

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

### Netlify Environment Variables

The following variables must also exist in the Netlify project:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

These values are required because Vite replaces `import.meta.env.VITE_*` variables during the production build.

If environment variables are changed, a new build/deployment may be required for the new values to be included in the frontend bundle.

---

## Content and Assets

Static images and other public assets are stored inside:

```text
public/
```

Examples:

```text
public/Blog/
public/Work/
```

Files inside `public/` are referenced using root-relative paths.

Example:

```jsx
<img src="/Blog/Blog1.png" alt="..." />
```

### Important

When moving or renaming an asset, update every corresponding path in the React source code.

Filename capitalization, spaces, and extensions must match the referenced path.

---

## Updating the Work Page

The Work page is primarily managed in:

```text
src/pages/Work.jsx
```

Each project contains:

- Project number
- Project title
- Description
- Image collection
- External project URL
- Visual styling

Project images are stored inside:

```text
public/Work/
```

When adding a new project:

1. Add the project images to `public/Work/`.
2. Add the image paths to the corresponding image array.
3. Add the project information to `Work.jsx`.
4. Add the external project URL if required.
5. Test the project locally.
6. Run a production build.

---

## Blog Architecture

The main Blog page is:

```text
src/pages/Blog.jsx
```

Individual blog article rendering is handled by:

```text
src/pages/BlogArticle.jsx
```

Current article routes:

```text
/blog/real-media-agency
/blog/when-students-take-the-lead
```

Blog images are stored in:

```text
public/Blog/
```

Current primary blog images:

```text
Blog1.png
Blog2.png
```

---

## Styling

Global styling is located in:

```text
src/index.css
```

Page-specific styles are maintained alongside their respective pages.

The website uses the Archivo typeface and the MET Media Collective visual system.

Primary brand colors include:

```text
MET Red       #E31E24
Green         #208447
Yellow        #F9C60F
Orange        #E2902A
Blue          #16539F
Olive Green   #968E5B
Black         #111111
Off White     #F7F3E8
Grey          #EEEDE6
```

When modifying the design, prefer the existing CSS variables and component styles instead of introducing duplicate hard-coded values.

---

## Important Implementation Notes

### Client-Side Routing

The website uses:

```text
react-router-dom
```

Routes are configured in:

```text
src/App.jsx
```

If a new page is created, its route must also be registered in `App.jsx`.

### Scroll Restoration

The application includes a scroll-to-top mechanism so navigation between pages starts from the top of the new page.

This behavior is handled in:

```text
src/App.jsx
```

### Animations

Animations are implemented using:

```text
framer-motion
```

The project also checks for reduced-motion preferences where appropriate.

When adding animations, preserve the existing reduced-motion behavior wherever possible.

### External Links

External links intended to open in a new tab should generally use:

```jsx
target = "_blank";
rel = "noopener noreferrer";
```

---

## Updating the Website

A typical workflow is:

```bash
git pull
npm install
npm run dev
```

Make the required changes.

Then verify:

```bash
npm run lint
npm run build
```

Check the application in the browser.

If everything is correct:

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
```

If GitHub is connected to Netlify, a push can trigger a new production deployment according to the Netlify project configuration.

---

## Recommended Development Workflow

```text
1. Pull latest changes
        ↓
2. Make changes
        ↓
3. Test locally
        ↓
4. Run ESLint
        ↓
5. Run production build
        ↓
6. Review git status/diff
        ↓
7. Commit
        ↓
8. Push to GitHub
        ↓
9. Verify Netlify deployment
        ↓
10. Test production website
```

Avoid making production changes without testing locally first.

---

# Handover Notes

This repository is intended to be maintained by the MET Media Collective / MET team after project handover.

The production setup consists of:

| Service  | Purpose                        |
| -------- | ------------------------------ |
| GitHub   | Source-code repository         |
| Netlify  | Website hosting and deployment |
| Supabase | Join Us form database          |
| Vite     | Frontend build tooling         |

### Access Transfer Checklist

The following should be verified during handover:

- [ ] GitHub repository ownership/access
- [ ] Netlify project ownership/access
- [ ] Supabase project ownership/access
- [ ] Netlify environment variables
- [ ] Supabase database and RLS configuration
- [ ] Production website
- [ ] Local development setup
- [ ] Join Us form
- [ ] Production deployment
- [ ] Project assets

### Credentials and Secrets

Never commit private credentials, database passwords, service-role keys, or other secrets to GitHub.

Environment-specific credentials should be managed through `.env.local` during local development and through the hosting provider's environment-variable configuration in production.

---

## Production Checklist

Before considering a release complete:

```text
[ ] npm run lint
[ ] npm run build
[ ] Home page tested
[ ] About page tested
[ ] Objectives page tested
[ ] Mentorship page tested
[ ] Work page tested
[ ] Team page tested
[ ] Blog page tested
[ ] Blog articles tested
[ ] Join Us form tested
[ ] External links tested
[ ] Images tested
[ ] Mobile layout tested
[ ] Production website tested
```

---

## License

This project was developed for MET Media Collective / MET Institute of Mass Media.

The website source code, content, branding, imagery, and other project assets are intended for the MET Media Collective project and should not be reused, redistributed, or repurposed outside the project without appropriate authorization from the relevant rights holder.

---

## Maintainer

**MET Media Collective**

MET Institute of Mass Media

Mumbai, Maharashtra, India
