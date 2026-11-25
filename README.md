![hero](https://xing-nuxt-starter.vercel.app/og-image.png)

# Nuxt Starter Template

[![License][license-src]][license-href]

This is a minimal and straightforward **Nuxt Starter Template** by **Nidexingg Labs**! It's been made to help developers quickly install a **Nuxt 4** project with some essential technologies and tools to meet the current web standard and features.

## Installation

Run one of these commands to install the template using your favorite package manager.

```bash
npx nuxi@latest init -t github:nidexingg/nuxt-starter#release <your-project-name>
bun x nuxi@latest init -t github:nidexingg/nuxt-starter#release <your-project-name>
pnpm dlx nuxi@latest init -t github:nidexingg/nuxt-starter#release <your-project-name>
yarn dlx nuxi@latest init -t github:nidexingg/nuxt-starter#release <your-project-name>
```

```bash
cd <your-project-name>
```

### Dependency installation

```bash
npm i
bun i
pnpm i
yarn i
```

### 🚀 Start development server

```bash
npm run dev -- -o
bun run dev -o # To use the Bun runtime during development, "bun --bun run dev -o"
pnpm dev -o
yarn dev --open
```

and 💥 booooom, `http://localhost:3000` should be automatically opened in your default browser.

## 📦 What's inside?

We use:

- [Nuxt](https://nuxt.com), `Vue`, and `Vue Router` as the core technologies of the application.
- [TailwindCSS](https://tailwindcss.com), [clsx](https://github.com/lukeed/clsx), and [tailwind-merge](https://github.com/dcastil/tailwind-merge) for utility-first CSS styling and class merging (`cn`).
- [Nuxt Color Mode](https://color-mode.nuxtjs.org) for light, dark, and sepia theme management.
- [Nuxt Icon](https://nuxt.com/modules/icon) for icon usage.
- [Nuxt Image](https://image.nuxt.com) for image optimization, resizing, and format conversion.
- [Nuxt i18n](https://i18n.nuxtjs.org) for internationalization.
- [VueUse](https://vueuse.org/) for essential Vue composition utilities.
- [Vite PWA](https://vite-pwa-org.netlify.app) for generating the service worker, web manifest, and PWA support.
- [OXC (Oxfmt + Oxlint)](https://oxc.rs/docs/guide/introduction.html) as the code formatter, linter, and import/class/package sorter.
- `Bun` as the package manager, and secondary option for code formatting and linting.

## 🤝 Contribution

- [**Fork**](https://github.com/nidexingg/nuxt-starter/fork) this repository.
- **Clone** your forked repository and make changes.
- **Commit** and **Push** the update to your forked repository.
- In the main page of your forked repository, click **Contribute** button and **Open pull request**.

## ⚖️ License

### MIT License

[license-src]: https://img.shields.io/github/license/nidexingg/nuxt-starter?style=plastic&logo=nuxt&labelColor=%23000000&color=%23000000
[license-href]: https://github.com/nidexingg/nuxt-starter/blob/master/LICENSE
