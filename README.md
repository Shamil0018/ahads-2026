# AHA & DS 2026 Conference Website

This repository contains the codebase for the official website of the **International Conference on Applied Harmonic Analysis and Data Science (AHA & DS 2026)**, hosted by the Department of Mathematics at the **Indian Institute of Technology Madras (IIT Madras)**.

The conference is scheduled for **15 – 18 December 2026** and includes a special session honoring **Prof. R. Radha** on her 60th birthday.

---

## 🛠️ Tech Stack

This project is built using a modern, performant, and type-safe web stack:

- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (a full-stack React framework featuring robust server-side rendering and automatic file-based routing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the modern `@tailwindcss/vite` plugin for lightning-fast builds)
- **Build Tool**: [Vite](https://vite.dev/)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally and prepare it for deployment.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Install Dependencies

Run the following command in the project root to install the required packages:

```bash
npm install
```

### 2. Run the Development Server

Launch the local dev environment:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. Any changes made to the source files will reflect instantly (Hot Module Replacement).

### 3. Build for Production

To compile and optimize the application for production delivery (client assets + SSR bundle):

```bash
npm run build
```

### 4. Preview the Production Build

To spin up a local preview server of the generated production builds:

```bash
npm run preview
```

---

## 📂 Project Structure

Here is a guide to the key directories and files:

```text
├── src/
│   ├── assets/             # Images, speaker headshots, and logo assets
│   ├── components/         # Reusable UI components (SiteHeader, PageHeader, etc.)
│   ├── routes/             # File-based routes defining the web pages
│   │   ├── __root.tsx      # Main layout wrapper (Navbar, Footer, routing shell)
│   │   ├── index.tsx       # Homepage (Welcome message, themes, key organizers, sponsors)
│   │   ├── speakers.tsx    # Invited Speakers grid (4-column layout)
│   │   ├── committee.tsx   # Scientific & Organizing Committee details
│   │   ├── registration.tsx# Registration packages and pricing tables
│   │   ├── deadlines.tsx   # Key dates (Abstract submission, registration deadlines)
│   │   ├── general.tsx     # How to Reach guide, Accommodation, and Travel support
│   │   ├── program.tsx     # Scientific schedule placeholder (TBA block)
│   │   └── contact.tsx     # Address and contact details
│   ├── styles.css          # Global CSS, Tailwind v4 imports, and customized typography
│   ├── router.tsx          # TanStack Router instantiation
│   └── routeTree.gen.ts    # Automatically generated route tree configuration
├── package.json            # Scripts and package dependencies
└── vite.config.ts          # Vite configuration
```

---

## ✍️ Handover & Editing Guide

Here is how you can easily perform common updates on the website:

### 👤 Adding / Editing Speakers

1. Put the speaker's photo in `src/assets/` (e.g., `Speaker Name.jpg`).
2. Open [src/routes/speakers.tsx](file:///src/routes/speakers.tsx):
   - Import the image at the top.
   - Add the speaker details (name, affiliation, imported image) to the `speakers` array.
3. Open [src/routes/index.tsx](file:///src/routes/index.tsx):
   - Add their name and affiliation to the homepage `speakers` array so they appear on the main landing grid.

### 📅 Updating Deadlines

Open [src/routes/deadlines.tsx](file:///src/routes/deadlines.tsx):

- Edit the date values inside the `deadlines` array. The grid automatically renders active/passed deadlines based on chronological progress.

### 👥 Modifying Committee Lists

Open [src/routes/committee.tsx](file:///src/routes/committee.tsx) and [src/routes/index.tsx](file:///src/routes/index.tsx):

- Add or update members in the `organizingCommittee` or `scientificCommittee` arrays.
- _Note: Organizing committee convenors are listed first, with the rest sorted alphabetically by surname._

### 📍 Editing Travel & Venue Info (How to Reach)

Open [src/routes/general.tsx](file:///src/routes/general.tsx):

- Update the paragraphs array under the `How to Reach` section. Bullet points start with `"• "` and subheadings like `"By Air"` or `"By Train"` are automatically formatted.

### 💳 Activating the Registration Portal

Open [src/routes/registration.tsx](file:///src/routes/registration.tsx):

- Once the registration link is ready, update the button URL target so users can click to pay or register online.
