![hero](https://xing-nuxt-starter.vercel.app/og-image.png)

# Nuxt Starter Template

[![built with nuxt][nuxt-src]][nuxt-href]
[![License][license-src]][license-href]

Welcome to the Nuxt Starter Template by Nidexingg! This template is minimalistic designed to help developers quickly set up a Nuxt.js project with essential technologies and tools to meet the standard and implement required features.

## Installation
Run one of these commands to install the template using your favorite package manager.
```bash
npx nuxi@latest init <your-project-name> -t github:nidexingg/nuxt-starter#release
bun x nuxi@latest init <your-project-name> -t github:nidexingg/nuxt-starter#release
pnpm dlx nuxi@latest init <your-project-name> -t github:nidexingg/nuxt-starter#release
yarn dlx nuxi@latest init <your-project-name> -t github:nidexingg/nuxt-starter#release
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
### Start development server
```bash
npm run dev -- -o
bun run dev -o # To use the Bun runtime during development, "bun --bun run dev -o"
pnpm dev -o
yarn dev --open
```
and 💥 booooom, `http://localhost:3000` should be automatically opened in your default browser.

## Utilized technologies

### @nuxt/image

A powerful image optimization module for Nuxt.js that supports multiple providers and formats, ensuring your images are responsive and performant.

- **Learn more**: [@nuxt/image](https://image.nuxt.com/)

### @nuxt/content

A file-based CMS that allows you to manage your content with markdown support, flexible databases, and a query builder.

- **Learn more**: [@nuxt/content](https://content.nuxt.com/)

### @nuxtjs/tailwindcss

Integrates Tailwind CSS into your Nuxt.js project, enabling utility-first styling for rapid UI development.

- **Learn more**: [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)

### @nuxtjs/i18n

A module for internationalization (i18n) that helps you create multilingual applications with ease.

- **Learn more**: [@nuxtjs/i18n](https://i18n.nuxtjs.org/)

### @nuxtjs/color-mode

Provides a simple way to implement dark/light mode toggling in your Nuxt.js applications.

- **Learn more**: [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/)

### @vite-pwa/nuxt

A module for adding Progressive Web App (PWA) capabilities to your Nuxt.js application, enhancing performance and user experience.

- **Learn more**: [@vite-pwa/nuxt](https://vite-pwa-org.netlify.app/)

### nuxt-og-image

A module that allows you to generate Open Graph images dynamically for improved social media sharing.

- **Learn more**: [nuxt-og-image](https://nuxt.com/modules/og-image)

### @nidexingg/ui

A UI component library that provides reusable components to speed up the development process.

- **Learn more**: [@nidexingg/ui](https://ui.nidexingg.com/)

## Contribution

- **Fork** this repository.
- **Clone** your forked repository and make changes.
- **Commit** and **Push** the update to your forked repository.
- In the main page of your forked repository, click **Contribute** button and **Open pull request**.

## License

MIT

[license-src]: https://img.shields.io/github/license/nidexingg/nuxt-starter.svg?style=flat&colorA=18181b&colorB=18181b
[license-href]: https://github.com/nidexingg/nuxt-starter/blob/master/LICENSE
[nuxt-src]: https://img.shields.io/badge/Built%20With%20Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com/
