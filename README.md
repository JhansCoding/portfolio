# Jhans Timaná — Backend Engineering Portfolio

React portfolio for **Jhans Jhonnatan Timaná Juárez**, Senior Java Backend Engineer specializing in Java, Quarkus, Spring Boot, Kafka, distributed systems, cloud platforms, and production reliability.

## Live URL

After deployment, the portfolio will be available at:

**https://JhansCoding.github.io**

## Local development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm ci
npm run build
```

The static site is generated in `dist/`.

## First GitHub deployment

1. Sign in to GitHub as `JhansCoding`.
2. Create a **public** repository named exactly `JhansCoding.github.io`.
3. Do not initialize it with a README, license, or `.gitignore`.
4. From this project directory, run:

```bash
git init
git add .
git commit -m "Create engineering portfolio"
git branch -M main
git remote add origin https://github.com/JhansCoding/JhansCoding.github.io.git
git push -u origin main
```

5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, select **GitHub Actions** as the source.
7. Open the **Actions** tab and wait for the deployment workflow to finish.
8. Visit **https://JhansCoding.github.io**.

Every later push to `main` automatically rebuilds and publishes the portfolio.

## Before making the repository public

The downloadable résumé in `public/Jhans-Timana-CV.pdf` contains personal contact information. Replace it with a public-safe version if you do not want that information exposed.

## Project structure

```text
src/App.jsx                  Portfolio content and components
src/index.css                Responsive visual design
public/Jhans-Timana-CV.pdf   Downloadable résumé
.github/workflows/deploy.yml Automatic GitHub Pages deployment
```
