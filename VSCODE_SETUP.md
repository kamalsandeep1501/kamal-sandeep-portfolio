# VS Code Setup Guide

## 🎯 Recommended Extensions

Install these extensions in VS Code for the best development experience:

### Essential Extensions

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Provides quick snippets for React components

2. **Tailwind CSS IntelliSense**
   - ID: `bradlc.vscode-tailwindcss`
   - Auto-complete for Tailwind classes

3. **TypeScript Vue Plugin (Volar)**
   - ID: `Vue.volar`
   - Better TypeScript support

4. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - Auto-format code on save

5. **ESLint**
   - ID: `dbaeumer.vscode-eslint`
   - Code quality and error detection

### Optional but Useful

- **Thunder Client** or **REST Client** - For testing APIs
- **GitLens** - Better Git integration
- **Todo Tree** - Track TODOs in code

### How to Install Extensions

1. Open VS Code
2. Press `Ctrl + Shift + X` (Extensions panel)
3. Search for the extension name or ID
4. Click "Install"

---

## ⚙️ VS Code Settings

### Recommended Settings

Create or update `.vscode/settings.json` in your project:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### Enable Format on Save

1. Press `Ctrl + ,` to open Settings
2. Search for "Format on Save"
3. Enable the checkbox

---

## 🔧 Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + `` | Open/close terminal |
| `Ctrl + Shift + P` | Command palette |
| `Ctrl + /` | Toggle comment |
| `Alt + Shift + F` | Format document |
| `Ctrl + S` | Save file |
| `Ctrl + F` | Find in file |
| `Ctrl + H` | Find and replace |
| `F12` | Go to definition |
| `Ctrl + Shift + X` | Open extensions |

---

## 📂 Workspace Setup

### Create Workspace File (Optional)

For better project organization, create `.vscode/kamal-portfolio.code-workspace`:

```json
{
  "folders": [
    {
      "path": ".",
      "name": "Kamal Portfolio"
    }
  ],
  "settings": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

Open with: `File → Open Workspace from File`

---

## 🚀 Debugging in VS Code

### Debug React Components

1. Install the **Debugger for Chrome** extension:
   - ID: `msjsdiag.debugger-for-chrome`

2. Create `.vscode/launch.json`:
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "chrome",
         "request": "launch",
         "name": "Launch Chrome",
         "url": "http://localhost:5173",
         "webRoot": "${workspaceFolder}/client/src"
       }
     ]
   }
   ```

3. Press `F5` to start debugging

### Console Logging

Add `console.log()` in your React components:

```tsx
export default function Home() {
  console.log("Component mounted");
  return <div>Portfolio</div>;
}
```

View logs in browser DevTools (`F12` → Console tab)

---

## 🎨 Theme Recommendations

For a comfortable development experience:

- **Dark Theme**: "One Dark Pro" or "Dracula"
- **Light Theme**: "GitHub Light"
- **Font**: "Fira Code" or "Cascadia Code"

Install themes from Extensions panel.

---

## 📦 Project-Specific Setup

### Install Project Dependencies

```bash
# In VS Code terminal
pnpm install
```

### Verify Installation

```bash
# Check Node version
node --version

# Check pnpm version
pnpm --version

# Start dev server
pnpm dev
```

---

## 🔍 Useful VS Code Features

### Quick File Navigation
- Press `Ctrl + P` to quickly open any file
- Type filename and press Enter

### Multi-Cursor Editing
- `Ctrl + D` to select next occurrence
- `Ctrl + Shift + L` to select all occurrences
- Edit multiple places at once

### Emmet Abbreviations
- Type `div.container` and press `Tab` to expand
- Works for HTML and JSX

### IntelliSense
- Press `Ctrl + Space` to trigger auto-complete
- Especially useful for Tailwind classes

---

## 🆘 Common Issues

### TypeScript Errors Not Showing

1. Press `Ctrl + Shift + P`
2. Search "TypeScript: Restart TS Server"
3. Press Enter

### Extensions Not Working

1. Reload VS Code: `Ctrl + Shift + P` → "Reload Window"
2. Or restart VS Code completely

### Terminal Not Opening

- Press `Ctrl + `` (backtick key)
- Or go to `View → Terminal`

---

## 📚 Learning Resources

- [VS Code Official Docs](https://code.visualstudio.com/docs)
- [VS Code Tips & Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [React DevTools Extension](https://react-devtools-tutorial.vercel.app/)

---

**You're all set! Happy coding! 🚀**
