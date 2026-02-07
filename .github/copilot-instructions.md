# GitHub Copilot instructions for this repository

Purpose
- Help AI contributors understand and be immediately productive with this small static portfolio site.

Repository overview
- This is a minimal static site with an entry page at `index.html` and a brief `README.md` describing the project.
- There are no build tools, package manifests, or server-side components in the repo.

What to do first
- Open and inspect `index.html` for markup and content. This is the single source of truth for the site.
- Review `README.md` for any author notes or language hints (content is in Norwegian).

Developer workflows (what works here)
- Local preview: open `index.html` directly in a browser (double-click) or run a simple HTTP server:
  - Python 3: `python -m http.server 8000` then visit http://localhost:8000
  - PowerShell (Windows): `Start-Process .\index.html`
- No build or test commands present — do not add assumptions about frameworks or toolchains.

Project-specific conventions and patterns
- Single-file site: prefer small, incremental edits to `index.html` rather than scaffolding new frameworks.
- Language: content is primarily Norwegian; preserve tone and localization when editing copy.
- Keep markup simple and semantic; there are no CSS or JS files in this repo by default.

Examples to follow
- To change the page title, update the `<title>` element in `index.html`.
- To add content sections, add semantic elements (`<section>`, `<header>`, `<footer`) inside the `<body>`.

Integration points and externals
- There are no external services, APIs, or CI configured in the repository. If you add CI or dependencies, document them in `README.md`.

When to ask the user
- If you plan to introduce a build tool, package manager, or CI, ask whether they want that complexity.
- If you need credentials, deploy targets, or domain info, ask for specifics before adding configuration files.

Editing & PR guidance
- Keep changes minimal and focused: update `index.html` for content/layout changes and `README.md` for documentation.
- Provide a short PR description explaining the purpose and manual verification steps (how to preview locally).

If anything is missing
- Ask the repository owner for preferred branching, deploy steps, or whether they want a static-site generator.

Contact
- When uncertain, open an issue or tag the repo owner with clear, scoped questions.
