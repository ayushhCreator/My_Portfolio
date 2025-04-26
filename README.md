# Ayush Raj Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Local Development Setup

1. Clone the repository to your local machine
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production
```bash
npm run build
```

## Free Hosting Options

### 1. Netlify (Recommended)
- Visit [Netlify](https://www.netlify.com/)
- Sign up for a free account
- Connect your GitHub repository
- Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`
- Your site will be live at `https://your-site-name.netlify.app`

### 2. GitHub Pages
- Enable GitHub Pages in your repository settings
- Configure your repository to deploy from the `gh-pages` branch
- Add homepage field to package.json:
  ```json
  {
    "homepage": "https://yourusername.github.io/repository-name"
  }
  ```

### 3. Vercel
- Visit [Vercel](https://vercel.com/)
- Sign up for a free account
- Import your GitHub repository
- Vercel will automatically detect build settings
- Your site will be live at `https://your-site-name.vercel.app`

## Adding to Resume

After deploying, you can add the following to your resume:

```
Portfolio: https://your-portfolio-url
GitHub: https://github.com/your-username/portfolio-repo
```

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons