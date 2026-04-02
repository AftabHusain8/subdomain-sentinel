<p align="center">
  <img src="https://img.shields.io/badge/Built_with-React_+_TypeScript-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

# 🔍 Subdomain-Sentinel

> A modern, blazing-fast **Subdomain Enumeration Tool** with real-time status checking — built for cybersecurity professionals, bug bounty hunters, and security researchers.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌐 **Subdomain Enumeration** | Discover subdomains for any target domain |
| ⚡ **Live Status Checks** | Real-time HTTP status verification for each subdomain |
| 📊 **Interactive Dashboard** | Clean, filterable results with stats overview |
| 🎯 **Smart Filtering** | Filter results by status codes (Active, Inactive, Error) |
| 📈 **Progress Tracking** | Visual scan progress with real-time updates |
| 🌙 **Modern UI** | Sleek, responsive design with dark theme |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 18](https://react.dev) | UI Framework |
| [TypeScript](https://typescriptlang.org) | Type Safety |
| [Vite 5](https://vitejs.dev) | Build Tool & Dev Server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-First Styling |
| [shadcn/ui](https://ui.shadcn.com) | Component Library |
| [TanStack Query](https://tanstack.com/query) | Async State Management |
| [Recharts](https://recharts.org) | Data Visualization |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x — [Download](https://nodejs.org)
- **npm** ≥ 9.x (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/AftabHusain8/subdomain-sentinel.git

# Navigate to the project directory
cd subdomain-sentinel

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:8080** 🎉

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` directory.

---

## 📁 Project Structure

```
subdomain-sentinel/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── DomainInput.tsx   # Domain input form
│   │   ├── FilterTabs.tsx    # Status filter tabs
│   │   ├── ResultsTable.tsx  # Scan results table
│   │   ├── ScanProgress.tsx  # Progress indicator
│   │   ├── ScannerHeader.tsx # App header
│   │   └── StatsCards.tsx    # Statistics cards
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities & scanner logic
│   │   ├── subdomain-scanner.ts
│   │   └── utils.ts
│   ├── pages/               # Route pages
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── tailwind.config.ts       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🎯 Use Cases

- **Bug Bounty Hunting** — Quickly enumerate subdomains during reconnaissance
- **Penetration Testing** — Identify attack surface for security assessments
- **Security Research** — Discover and monitor subdomain infrastructure
- **DevOps & IT** — Audit and track organization's subdomain footprint

---

## 🗺️ Roadmap

- [ ] Backend integration (Python / Go) for advanced scanning
- [ ] API-based scanning with rate limiting
- [ ] Export results to CSV / JSON / PDF
- [ ] Multi-threaded concurrent scanning
- [ ] DNS record type enumeration
- [ ] Screenshot capture for discovered subdomains
- [ ] Historical scan comparison

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 👨‍💻 Author

**Aftab Husain**
Cybersecurity Enthusiast | Full-Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-AftabHusain8-181717?style=flat-square&logo=github)](https://github.com/AftabHusain8)

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>⭐ If you found this useful, please star the repository!</strong>
</p>
