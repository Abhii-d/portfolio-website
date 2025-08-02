# Portfolio Website - Abhishek Dongare

A modern, minimalist portfolio website showcasing the work and experience of Abhishek Dongare, Senior Software Developer at Cimpress.

## 🚀 Built With

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/) (Planned)
- **Code Quality**: ESLint, Prettier
- **Performance**: Optimized for Core Web Vitals

## 🎨 Design Philosophy

- **Minimalist**: Clean, uncluttered layouts with plenty of whitespace
- **Professional**: Subtle, sophisticated color palette with light blue accents
- **Accessible**: WCAG 2.1 AA compliant with proper contrast ratios
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Optimized for performance and SEO

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and Tailwind directives
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/         # Main page sections
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components
├── data/                 # Static JSON data
│   ├── personal.json     # Personal information
│   ├── experience.json   # Work experience
│   └── projects.json     # Project details
├── lib/                  # Utility functions and types
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
│   └── images/          # Image assets
└── .copilot-instructions.md # Development guidelines
```

## 🛠️ Development Guidelines

This project follows industry best practices and coding standards documented in `.copilot-instructions.md`:

### Architecture Principles

- Feature-based folder structure
- Separation of concerns
- Component composition over inheritance
- Type-safe development with TypeScript

### Code Quality

- ESLint with Next.js and TypeScript rules
- Prettier for consistent formatting
- Strict TypeScript configuration
- Performance-focused development

### Performance Targets

- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository

```bash
git clone https://github.com/abhishek-dongare/portfolio.git
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📊 Data Management

Project data is stored in JSON files for easy maintenance:

- **Personal Info**: `data/personal.json` - Name, title, bio, contact information
- **Experience**: `data/experience.json` - Work history, achievements, technologies
- **Projects**: `data/projects.json` - Portfolio projects with details and links

## 🎨 Design System

### Color Palette

- **Primary**: Light blue (#0ea5e9) for accents and CTAs
- **Background**: Very light blue (#f0f9ff) for visual comfort
- **Text**: Dark slate (#374151) for readability
- **Cards**: White (#ffffff) with subtle shadows

### Typography

- **Font**: Inter (Google Fonts) for excellent readability
- **Hierarchy**: Clear heading structure (h1-h4)
- **Line Height**: 1.6 for optimal reading experience

### Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables (if needed)
3. Deploy automatically on push to main branch

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://your-portfolio-url.com
# Add other environment variables as needed
```

## 📈 Performance Optimizations

- **Next.js Image Component**: Automatic image optimization
- **Static Generation**: Pre-built pages for instant loading
- **Font Optimization**: Preloaded Google Fonts
- **Bundle Analysis**: Tree shaking and code splitting
- **CSS Optimization**: Tailwind CSS purging

## 🧪 Testing Strategy

- **Type Safety**: TypeScript for compile-time error checking
- **Code Quality**: ESLint rules for consistent code
- **Accessibility**: Manual testing with screen readers
- **Performance**: Lighthouse audits for Core Web Vitals

## 📞 Contact

**Abhishek Dongare**

- Email: abhishek.dongare@example.com
- LinkedIn: [linkedin.com/in/abhishek-dongare](https://linkedin.com/in/abhishek-dongare)
- GitHub: [github.com/abhishek-dongare](https://github.com/abhishek-dongare)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Abhishek Dongare
