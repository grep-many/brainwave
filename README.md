<h1>
  <img src="./public/brainwave-symbol.svg" alt="Brainwave Logo" width="40" style="vertical-align: middle;" />
  Brainwave — AI Landing Page
</h1>

![Deploy](https://img.shields.io/github/actions/workflow/status/grep-many/brainwave/deploy.yml?label=Deploy)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://grep-many.github.io/brainwave/)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38BDF8)
![Vite](https://img.shields.io/badge/Vite-7.2-purple)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> A modern **AI chatbot landing page** built with **React 19**, **TailwindCSS 4**, and **Vite 7**. Designed to showcase intelligent chatbot features, automation, pricing, and collaboration with a clean, futuristic UI and smooth parallax effects.

---

## ✨ Overview

**Brainwave** is a responsive and visually polished landing page for AI and SaaS products. It focuses on clear product communication through modern layouts, subtle animations, and reusable React components.

You get:

- 🤖 AI-focused product landing page
- 🎨 Clean, modern UI with gradients and SVGs
- 🌊 Smooth parallax animations
- 📱 Fully responsive design
- ⚡ Fast development and builds with Vite

---

## 🖥️ Desktop Preview

![desktop-preview](./screenshots/preview.png)

---

## 📦 Tech Stack

### **Frontend**

- React 19
- React Router v7
- TailwindCSS 4
- react-just-parallax

### **Developer Tools**

- Vite 7
- ESLint
- Prettier + Tailwind plugin

---

## 📁 Folder Structure

```bash
.
├── public
│   ├── favicons, manifest, icons
├── screenshots
│   └── preview.png
├── src
│   ├── assets
│   │   ├── images, svg, backgrounds
│   │   └── UI illustrations
│   ├── components
│   │   ├── Hero, Benefits, Pricing, Roadmap, Services
│   │   └── Reusable UI components
│   ├── constants
│   │   ├── navigation.js
│   │   ├── benefits.js
│   │   ├── pricing.js
│   │   ├── roadmap.js
│   │   └── socials.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

### 🔧 Customization Note

All product content such as **navigation, pricing plans, benefits, roadmap items, and social links** can be easily modified from the `src/constants/` directory without touching UI components.

---

## 🛠️ Getting Started

```bash
git clone https://github.com/grep-many/brainwave.git
cd brainwave
npm install
npm run dev
```

---

## 🚀 Features

- AI chatbot–oriented landing experience
- Modular component-based architecture
- Pricing, roadmap, and service sections
- Responsive and scalable design
- Optimized for performance

---

## 🪪 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
