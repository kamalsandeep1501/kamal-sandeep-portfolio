# Quick Start Guide - Running in VS Code

## 🚀 5-Minute Setup

### Step 1: Open Terminal in VS Code
Press `Ctrl + `` (backtick) or `Cmd + `` on Mac to open the integrated terminal.

### Step 2: Install Dependencies
```bash
pnpm install
```

If you don't have pnpm installed, use npm instead:
```bash
npm install
```

### Step 3: Start Development Server
```bash
pnpm dev
```

### Step 4: Open in Browser
- Click the link shown in terminal (usually `http://localhost:5173`)
- Or manually open `http://localhost:5173` in your browser

**That's it! Your portfolio is now running.** 🎉

---

## 📝 Common Commands

| Command | What it does |
| :--- | :--- |
| `pnpm dev` | Start dev server (auto-refresh on file changes) |
| `pnpm build` | Create optimized production build |
| `pnpm preview` | Test production build locally |
| `Ctrl + C` | Stop the dev server |
| `pnpm format` | Auto-format your code |

---

## ✏️ Editing Your Portfolio

1. **Open `client/src/pages/Home.tsx`** in VS Code
2. **Make changes** to your projects, skills, or about section
3. **Save the file** (`Ctrl + S`)
4. **Your browser automatically refreshes** with your changes

---

## 🎨 Key Files to Edit

| File | What to change |
| :--- | :--- |
| `client/src/pages/Home.tsx` | All portfolio content (projects, skills, about) |
| `client/src/index.css` | Colors and theme |
| `client/index.html` | Page title and fonts |

---

## 🆘 Troubleshooting

**Port 5173 already in use?**
- Vite will automatically use the next available port
- Check terminal for the correct URL

**Changes not showing?**
- Save the file (`Ctrl + S`)
- Refresh browser (`F5`)

**Dependencies error?**
```bash
rm -rf node_modules
pnpm install
```

---

## 📦 Project Structure

```
kamal-sandeep-portfolio/
├── client/src/
│   ├── pages/Home.tsx          ← Edit your portfolio content here
│   ├── index.css               ← Edit colors and styling
│   └── App.tsx                 ← Main app file
├── package.json                ← Dependencies
└── README.md                   ← Full documentation
```

---

## 🔗 Useful Links

- **Local Dev Server**: http://localhost:5173
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite Docs**: https://vitejs.dev

---

**Happy coding! 🚀**
