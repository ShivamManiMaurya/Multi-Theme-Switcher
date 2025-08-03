<h1 align="center">MULTI-THEME SWITCHER APP</h1>

<p align="center"><i>A Full-Featured React + TypeScript App with Dynamic Theme Switching and Modern UX Practices</i></p>

<p align="center">
  <!-- Project Status -->
  <img src="https://img.shields.io/github/last-commit/ShivamManiMaurya/paytm_app?style=for-the-badge" alt="Last Commit" />
  <img src="https://img.shields.io/github/languages/top/ShivamManiMaurya/paytm_app?label=TypeScript&color=blue&style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/count/ShivamManiMaurya/paytm_app?style=for-the-badge&color=blue" />
  <br/>

  <!-- Frameworks & Tools -->
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/State_Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Routing-React_Router-D0021B?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/API-FakeStoreAPI-FB923C?style=for-the-badge&logo=json&logoColor=white" />
  <br/>

  <!-- Dev Tools -->
  <img src="https://img.shields.io/badge/ESLint-Code_Quality-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-Code_Format-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" />
  <img src="https://img.shields.io/badge/LocalStorage-Persistence-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/JSON_API-https://fakestoreapi.com-000?style=for-the-badge&logo=json&logoColor=white" />
</p>

## 📚 Table of Contents

- [📖 Introduction](#-introduction)
- [🎨 Themes Overview](#-themes-overview)
- [🧩 Features](#-features)
- [🖥️ UI Previews](#-ui-previews)
- [🧰 Tech Stack](#-tech-stack)
- [💾 Data Fetching](#-data-fetching)
- [🔐 Security & Persistence](#-security--persistence)
- [🚀 Future Scope](#-future-scope)
- [🔗 Links](#-links)
- [👨‍💻 Author](#author)

## 📖 Introduction

**Multi-Theme Switcher App** is a fully responsive, React + TypeScript based project designed to showcase the power of dynamic UI/UX.

It supports **three completely distinct visual themes** — changing not just colors but also layout, typography, and structure. The app uses React Router to demonstrate consistency of the selected theme across multiple pages.

Whether you're switching from a clean minimalist view to a playful card-based layout, the experience remains seamless and smooth.

## 🎨 Themes Overview

### 🌟 Theme 1 – Minimalist (Default)
- Light background
- Sans-serif font
- Clean, horizontal layout
- Spacious whitespace

### 🌑 Theme 2 – Dark Sidebar
- Full dark mode
- Serif typography
- Vertical sidebar layout
- High contrast elements

### 🎨 Theme 3 – Colorful & Playful
- Bright palette
- "Pacifico" playful font
- Card-based grid system
- Unique button styles & shadows

## 🧩 Features

- 🔘 Theme switching via dropdown in the fixed header
- 🧠 Context API for global theme state management
- 💾 Persistent theme storage in `localStorage`
- 📄 Pages: Home | About | Contact (demonstrates routing)
- 📦 Data fetched from [FakeStoreAPI](https://fakestoreapi.com/products)
- 🪄 Subtle animations during theme transitions
- 📱 Mobile-first responsive design
- 🔐 Clean codebase with TypeScript, ESLint, and Prettier setup

## 🖥️ UI Previews

### 🏠 Home Page
Displays dummy product cards fetched from FakeStore API with structure adapted based on current theme.

### 👋 About Page
Simple introduction page styled differently across themes.

### 📞 Contact Page
Form layout with dummy inputs and different button styles per theme.

Screenshots not included here, but the app shows clear visual changes across these pages as themes are switched.

## 🧰 Tech Stack

- [**React**](https://reactjs.org/) – UI framework
- [**TypeScript**](https://www.typescriptlang.org/) – Typed superset of JavaScript
- [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first styling
- [**React Router**](https://reactrouter.com/) – Page navigation
- [**Context API**](https://reactjs.org/docs/context.html) – Global state management
- [**FakeStoreAPI**](https://fakestoreapi.com/) – Product data fetching

## 💾 Data Fetching

Product data is fetched from [FakeStoreAPI](https://fakestoreapi.com/products) only **once**, and is **stored in context** to avoid unnecessary network calls on re-renders or theme switches.

## 🔐 Security & Persistence

- `localStorage` is used to persist theme selection between reloads
- Routes and theme states are managed securely with type-safe structures
- Minimal external dependencies for better control over styling and logic

## 🚀 Future Scope

- 🔓 Auth module with OAuth & protected routes
- 🛒 Add-to-cart and checkout flow
- 🌐 i18n support (multi-language)
- 🌙 Toggle between light/dark mode independently
- 🎭 Custom theme builder using user inputs

## 🔗 Links

-   [GitHub Repo](https://github.com/ShivamManiMaurya/multi-theme-switcher-app)
-   [Live Site](https://multi-theme-switcher.vercel.app)

## 👨‍💻 Author

-   Portfolio – [Shivam Maurya](https://shivammanimaurya.github.io/my_portfolio_website/)
-   GitHub – [@ShivamManiMaurya](https://github.com/ShivamManiMaurya)
-   LinkedIn – [@shivammanimaurya](https://www.linkedin.com/in/shivammanimaurya)
