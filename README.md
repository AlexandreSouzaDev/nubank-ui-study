# Nubank UI Study

**A responsive, accessible fintech landing page built with React, TypeScript and Vite.**

[**Live demo**](https://alexandresouzadev.github.io/nubank-ui-study/) · [Report a bug](https://github.com/AlexandreSouzaDev/nubank-ui-study/issues)

![CI](https://github.com/AlexandreSouzaDev/nubank-ui-study/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646cff?logo=vite&logoColor=white)
![Tests](https://img.shields.io/badge/tested%20with-Vitest-6e9f18?logo=vitest&logoColor=white)

> **Disclaimer:** Academic UI study inspired by the Nubank web experience. It is not affiliated with, endorsed by or sponsored by Nubank. "Nubank" is a trademark of its owner and is used here only to identify the product being studied. No logos or brand assets are included, all copy and numbers are fictional, and no data leaves the browser.

## Why this project

I built this project to practice the parts of front-end work that go beyond "making it look good": input validation, accessibility, testable architecture and a delivery pipeline. It is intentionally small, so every decision can be read and discussed.

## Features

- **CPF field** with live masking and real check-digit validation. It rejects repeated digits and wrong verifiers.
- **Savings simulator** using compound interest, with accessible range inputs and results that update as you type.
- **Interactive 3D card** that tilts with the pointer, only on devices with a fine pointer and never when the user prefers reduced motion.
- **Responsive layout** down to small phones, with automatic dark mode.
- **Accessible by default:** skip link, keyboard navigation, visible focus states, ARIA live regions, semantic landmarks and a native `<details>` FAQ.

## Tech stack

| Area | Choice |
|---|---|
| UI | React 19, TypeScript (strict) |
| Build | Vite |
| Tests | Vitest, Testing Library, user-event |
| CI | GitHub Actions (typecheck, tests, build) |
| Styling | Hand-written CSS with design tokens (CSS variables) |

## Architecture

```
src/
  components/   Header, CpfForm, CreditCard, Simulator, Faq
  lib/          cpf.ts, finance.ts   (pure logic, no React)
  styles.css    design tokens and layout
  App.tsx       page composition
```

- Business rules live in `lib/` as pure functions, so they are trivial to test.
- Components stay thin and are covered by integration tests that exercise real user flows.
- Effects clean up after themselves (scroll, keyboard and media-query listeners, animation frames).

## Getting started

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/AlexandreSouzaDev/nubank-ui-study.git
cd nubank-ui-study
npm install
npm run dev
```

Then open the address printed in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm test` | Run unit and integration tests |
| `npm run typecheck` | Strict TypeScript check |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview the production build locally |

## Testing

The suite covers the CPF mask and validator, the compound-interest calculation, and the main user flows: invalid and valid CPF submission, simulator updates, card reveal, and the mobile menu (including closing with `Escape`).

```bash
npm test
```

## Roadmap

- [ ] Migrate styles to Tailwind CSS
- [ ] End-to-end tests with Playwright
- [ ] Lighthouse CI performance budget
- [ ] Internationalization (pt-BR / en)

## Author

**Alexandre Souza** — Software developer with a background in PHP/Laravel and logistics operations.

[LinkedIn](https://www.linkedin.com/in/YOUR-PROFILE) · [GitHub](https://github.com/AlexandreSouzaDev)

## License

Released under the [MIT License](LICENSE).
