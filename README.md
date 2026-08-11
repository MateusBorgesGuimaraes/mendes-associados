# Mendes & Associados

> A modern institutional website for a Brazilian law firm, built with Astro and designed around content, performance, and a professional editorial experience.

**Mendes & Associados** is a responsive institutional website created for a law firm, combining a professional visual identity with a content-driven architecture.

The project includes institutional pages, areas of practice, a legal articles section, article filtering, reusable UI components, and a Markdown-based content system powered by Astro Content Collections.

## ✨ Features

* **Institutional website** — professional presentation of the law firm and its services.
* **Areas of practice** — dedicated sections for the firm's legal practice areas.
* **Legal blog** — content-driven article section with individual posts.
* **Article filtering** — filter blog posts by category and other available metadata.
* **Article pagination** — navigate through larger collections of articles.
* **Featured articles** — highlight selected content on the website.
* **Reading time** — display estimated reading time for articles.
* **Typed content** — blog content is validated through Astro Content Collections and Zod schemas.
* **Reusable components** — shared components for navigation, forms, cards, buttons, pagination, and other interface elements.
* **Content management** — Decap CMS integration for managing website content.
* **Typography system** — DM Sans and Playfair Display used to create a professional editorial visual identity.
* **Hybrid component architecture** — Astro components combined with React where interactive UI is required.

## 🛠️ Tech Stack

### Core

* [Astro](https://astro.build/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vite.dev/)

### Styling

* [Tailwind CSS](https://tailwindcss.com/)
* [DM Sans](https://fonts.google.com/specimen/DM+Sans)
* [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
* [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)

### Content

* Astro Content Collections
* Markdown
* Zod
* [Decap CMS](https://decapcms.org/)

## 🧩 Architecture

The project takes advantage of Astro's component-based architecture and content system, while React is used for interactive parts of the interface.

```text
src/
├── assets/                 # Static assets and visual resources
├── components/
│   ├── blog/               # Blog-specific components
│   ├── form/               # Reusable form components
│   └── ui/                 # General-purpose UI components
├── content/
│   └── blog/               # Markdown articles
├── content.config.ts       # Content Collection schema
└── ...
```

The architecture separates reusable interface components from content and page-specific logic, making the project easier to maintain and extend.

## 📝 Content Architecture

One of the main aspects of the project is its content-driven blog architecture.

Blog posts are stored as Markdown files and loaded through Astro Content Collections.

Each article follows a defined schema containing:

```text
title
excerpt
author
date
category
featured
readTime
```

The available article categories include:

* Civil Law
* Labor Law
* Corporate Law
* Real Estate Law
* Family Law

This provides structured and predictable content while keeping article creation simple through Markdown.

## 📰 Blog

The blog was designed as an editorial section for publishing legal content and providing useful information to visitors.

Each article can contain metadata such as:

* Title
* Excerpt
* Author
* Publication date
* Category
* Featured status
* Estimated reading time

The repository already contains articles covering subjects such as labor agreements, real estate, corporate law, family law, inheritance, LGPD, and other legal topics.

## 🔎 Article Discovery

The blog includes reusable React components for article filtering and pagination.

```text
components/
└── blog/
    └── PostFilters.tsx
```

This allows visitors to navigate a larger collection of articles without turning the page into a single long list of content.

## 🧱 Reusable Components

The project contains reusable components organized by responsibility.

### UI

```text
components/ui/
├── ButtonLink
├── CardAreaAtuacao
├── CardArticle
├── Indicator
├── Logo
└── Pagination
```

### Forms

```text
components/form/
├── CustomButton
├── CustomInput
├── CustomSelect
└── CustomTextArea
```

### Layout

```text
components/
├── Header
└── Footer
```

This component-based structure helps maintain visual consistency across the website while reducing duplicated interface code.

## 🎨 Design

The visual identity was designed to communicate **trust, professionalism, and sophistication**, which are particularly important for an institutional website in the legal sector.

### Design characteristics

* Editorial-inspired typography
* `Playfair Display` for prominent headings
* `DM Sans` for interface and body text
* Structured layouts with generous spacing
* Professional visual hierarchy
* Reusable cards and navigation elements
* Clear calls to action
* Content-focused article presentation

The combination of serif and sans-serif typography creates a balance between traditional legal communication and a modern digital interface.

## ⚡ Why Astro?

Astro is particularly well suited for this project because the website is primarily content-driven and benefits from rendering most of its content as static HTML.

The project uses Astro components by default and introduces React only where interactive behavior is useful.

This approach keeps the frontend architecture lightweight while still allowing interactive components such as article filters and pagination.

## 🗂️ Project Structure

```text
mendes-associados/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blog/
│   │   ├── form/
│   │   └── ui/
│   ├── content/
│   │   └── blog/
│   ├── content.config.ts
│   └── ...
├── astro.config.mjs
├── package.json
└── README.md
```

## 📦 Available Scripts

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Starts the Astro development server.                      |
| `npm run build`   | Builds the website for production.                        |
| `npm run preview` | Previews the production build locally.                    |
| `npm run cms`     | Starts the local Decap CMS server.                        |
| `npm run dev:cms` | Runs the Astro development server and Decap CMS together. |
| `npm run astro`   | Runs the Astro CLI.                                       |

## 📌 Project Status

`Mendes & Associados` is a personal frontend project focused on building a professional institutional website with a content-driven architecture.

The project demonstrates practical experience with:

* Astro
* React
* TypeScript
* Tailwind CSS
* Content Collections
* Markdown-based content
* Zod schemas
* CMS integration
* Component architecture
* Editorial UI design

## 📄 License

No license is currently specified in the repository.

## 👨‍💻 Author

**Mateus Borges Guimarães**

[GitHub](https://github.com/MateusBorgesGuimaraes)

---

Built with Astro, React, TypeScript, and a focus on elegant, content-driven web experiences.
