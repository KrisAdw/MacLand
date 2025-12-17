# MacLand 🍎💻

An interactive 3D MacBook product viewer built with Next.js, Three.js, and GSAP animations. Experience Apple's MacBook Pro lineup in a stunning, immersive web experience.

![MacBook Preview](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat-square&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=flat-square&logo=greensock)

## ✨ Features

- **3D MacBook Models** - Realistic 14" and 16" MacBook Pro models rendered with Three.js
- **Interactive Controls** - Rotate and explore the models with smooth presentation controls
- **Model Switching** - Seamlessly switch between 14" and 16" models with animated transitions
- **Color Options** - Toggle between Silver and Space Black color variants
- **GSAP Animations** - Smooth fade and slide animations powered by GSAP
- **Performance Showcase** - Scroll-triggered animations demonstrating graphics performance
- **Feature Highlights** - Dynamic masonry grid layout showcasing key product features
- **Responsive Design** - Optimized for both desktop and mobile viewing
- **Studio Lighting** - Professional lighting setup for realistic product visualization

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **3D Rendering**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Three.js](https://threejs.org/)
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei) (PresentationControls, lighting)
- **Animations**: [GSAP](https://greensock.com/gsap/) + [@gsap/react](https://greensock.com/react/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [clsx](https://github.com/lukeed/clsx)
- **Runtime**: [Bun](https://bun.sh/)

## 📁 Project Structure

```
maclanding/
├── app/
│   ├── components/
│   │   ├── models/           # 3D MacBook model components
│   │   │   ├── Macbook-14.jsx
│   │   │   ├── Macbook-16.jsx
│   │   │   └── Macbook.jsx
│   │   ├── three/            # Three.js related components
│   │   │   ├── ModelSwitcher.tsx
│   │   │   └── StudioLight.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlight.tsx     # Feature highlights section
│   │   ├── Navbar.tsx
│   │   ├── Performance.tsx   # Performance showcase section
│   │   ├── ProductViewer.tsx # Main product viewer component
│   │   └── Showcase.tsx
│   ├── store/                # Zustand state management
│   └── page.tsx              # Main page
└── public/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KrisAdw/MacLand.git
cd maclanding
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Run the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎮 Usage

- **Rotate Model**: Click and drag to rotate the MacBook
- **Switch Size**: Click the 14" or 16" buttons to switch between models
- **Change Color**: Click the color swatches to switch between Silver and Space Black
- **Scroll**: Scroll down to trigger performance and highlight animations

## 📄 License

This project is for portfolio/educational purposes.

---

Made with ❤️ by [KrisAdw](https://github.com/KrisAdw)
