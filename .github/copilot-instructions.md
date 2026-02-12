# GitHub Copilot instructions for this repository

## Purpose
- Help AI contributors be productive in this static portfolio site (Norwegian content).

## Repository overview
- Multi-page static site: entry page is [index.html](index.html), with additional pages like [om-meg.html](om-meg.html) and [prosjekt-bilder.html](prosjekt-bilder.html).
- Styling lives in [style.css](style.css); minimal client-side behavior (if any) in [Script.js](Script.js).
- Media assets (images/video) are stored under [assets/](assets/).

## What to inspect first
- Start with [index.html](index.html) for site structure, navigation links, and hero content.
- Cross-check shared layout patterns in other pages (e.g., nav and sections) for consistency.
- Review [README.md](README.md) for brief project notes.

## Developer workflows
- Local preview: open [index.html](index.html) directly in a browser or serve the folder with a simple static server.
- No build, test, or lint tooling is present—avoid introducing frameworks or package managers unless asked.

## Project-specific conventions
- Content is Norwegian; preserve tone and language when editing copy.
- Keep HTML semantic and lightweight (sections, headers, navs), mirroring existing structure.
- Image references are relative and currently in the project root; verify paths if moving assets.
- Navigation uses in-page anchors (e.g., #prosjekter) plus separate HTML pages; keep links in sync across pages.

## Examples from the codebase
- Update the site title or meta description in the <head> of [index.html](index.html).
- Add a new project card in the projects grid in [index.html](index.html).
- Global styling adjustments should go to [style.css](style.css).

## Integration points
- No external APIs, CI, or hosting configs are present. Document any new dependencies or tooling in [README.md](README.md).

## When to ask the user
- If introducing new build steps, a static-site generator, or deployment configuration, confirm first.
- If moving assets or restructuring pages, confirm desired URLs and navigation behavior.
