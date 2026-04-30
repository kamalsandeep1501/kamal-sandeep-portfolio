# Kamal Sandeep A | AI Engineer Portfolio

A modern, professional portfolio website showcasing AI/ML projects, technical expertise, and professional experience. Built with React 19, Tailwind CSS 4, and Vite for optimal performance and developer experience.

## 🎯 Overview

This portfolio is designed to establish credibility in the AI/ML industry and secure full-time employment opportunities. It features:

- **Professional Hero Section** - Strong headline and value proposition
- **Featured Projects** - In-depth case studies with Challenge-Approach-Results framework
- **Technical Skills** - Organized expertise across Generative AI, Computer Vision, Data Engineering, and Core Engineering
- **Professional Certifications** - AWS, Oracle Cloud, and Data Analytics credentials
- **About Section** - Personal narrative and career goals
- **Contact Integration** - Direct links to email, LinkedIn, and GitHub

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI framework with hooks and concurrent rendering |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS 4** | Utility-first CSS framework with OKLCH color support |
| **shadcn/ui** | Pre-built, accessible UI components |
| **TypeScript** | Type-safe development |
| **Wouter** | Client-side routing (lightweight alternative to React Router) |

## 📁 Project Structure

```
kamal-sandeep-portfolio/
├── client/
│   ├── public/                 # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx       # Main portfolio page
│   │   │   └── NotFound.tsx   # 404 page
│   │   ├── components/
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── Map.tsx        # Google Maps integration
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/               # Utility functions
│   │   ├── App.tsx            # Main app component with routing
│   │   ├── main.tsx           # React entry point
│   │   └── index.css          # Global styles and Tailwind config
│   └── index.html             # HTML template
├── server/                     # Backend placeholder (static only)
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── tailwind.config.ts         # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **pnpm** (recommended) - [pnpm Installation](https://pnpm.io/installation)
- **Git** - [Download](https://git-scm.com/)
- **VS Code** - [Download](https://code.visualstudio.com/)

### Installation & Setup

#### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/kamal-sandeep-portfolio.git
cd kamal-sandeep-portfolio
```

Replace `yourusername` with your actual GitHub username.

#### Step 2: Install Dependencies

Using **pnpm** (recommended for faster installation):

```bash
pnpm install
```

Or using **npm**:

```bash
npm install
```

#### Step 3: Start the Development Server

```bash
pnpm dev
```

Or with npm:

```bash
npm run dev
```

The development server will start at `http://localhost:5173` (or the next available port). Your browser should automatically open the portfolio.

#### Step 4: Open in VS Code

```bash
code .
```

This opens the project in VS Code.

## 📝 Running in VS Code

### Method 1: Using VS Code Terminal (Recommended)

1. **Open the project folder in VS Code:**
   ```bash
   code /path/to/kamal-sandeep-portfolio
   ```

2. **Open the integrated terminal:**
   - Press `Ctrl + `` (backtick) on Windows/Linux or `Cmd + `` on Mac
   - Or go to `View → Terminal`

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

5. **View the portfolio:**
   - Click the link in the terminal (usually `http://localhost:5173`)
   - Or open your browser and navigate to `http://localhost:5173`

### Method 2: Using VS Code Run Configuration

1. **Create a `.vscode/launch.json` file** (optional, for debugging):
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Launch Dev Server",
         "type": "node",
         "request": "launch",
         "program": "${workspaceFolder}/node_modules/vite/bin/vite.js",
         "args": [],
         "cwd": "${workspaceFolder}",
         "preLaunchTask": "pnpm: dev"
       }
     ]
   }
   ```

2. **Run using F5** to start the debugger.

## 📦 Available Scripts

| Command | Purpose |
| :--- | :--- |
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run TypeScript type checking |
| `pnpm format` | Format code with Prettier |

## 🎨 Customization

### Updating Your Information

Edit `client/src/pages/Home.tsx` to customize:

- **Hero Section**: Your headline, description, and call-to-action buttons
- **Projects**: Add or modify featured projects with Challenge-Approach-Results framework
- **Skills**: Update technical expertise categories and technologies
- **About Section**: Personalize your career narrative
- **Contact**: Update email, phone, LinkedIn, and GitHub links

### Styling & Theme

- **Global Colors**: Edit `client/src/index.css` to modify the dark theme colors
- **Typography**: Update font imports in `client/index.html` (currently using Sora font)
- **Component Styling**: Use Tailwind utility classes in component files

### Adding New Pages

1. Create a new file in `client/src/pages/` (e.g., `Blog.tsx`)
2. Add a route in `client/src/App.tsx`:
   ```tsx
   <Route path="/blog" component={Blog} />
   ```
3. Add navigation link in the header

## 🚀 Deployment

### Deploy to Manus

The portfolio is pre-configured for deployment on Manus:

1. **Create a checkpoint:**
   ```bash
   # This is handled by Manus UI
   ```

2. **Click Publish** in the Manus Management UI

3. **Your portfolio will be live** at a Manus-generated URL or custom domain

### Deploy to Other Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
1. Update `vite.config.ts` with your repository name
2. Run `pnpm build`
3. Push the `dist/` folder to GitHub Pages

## 🔧 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Hot Reload Not Working

1. Check that the dev server is running (`pnpm dev`)
2. Refresh your browser manually
3. Restart the dev server: `Ctrl + C` and `pnpm dev` again

### TypeScript Errors

Run type checking:
```bash
pnpm check
```

Fix any reported errors in your code.

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:

1. Check the troubleshooting section above
2. Review the [Vite documentation](https://vitejs.dev)
3. Open an issue on GitHub

## 🎯 Next Steps

To strengthen your portfolio for placement:

1. **Add GitHub Links** - Link to your actual GitHub repositories in each project
2. **Include Resume Download** - Add a button to download your PDF resume
3. **Add Blog Section** - Write technical articles explaining your projects
4. **Custom Domain** - Deploy with a custom domain (e.g., kamal-portfolio.com)
5. **SEO Optimization** - Add meta tags and structured data for better search visibility

---

**Built with ❤️ for your career success**

Last Updated: April 30, 2026
