# Hemanth Raj - Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer and Android Application Developer.

## 🚀 Features

### ✨ Modern Design
- **Glass morphism effects** with backdrop blur and transparency
- **Gradient text** and smooth animations
- **Responsive design** that works on all devices
- **Dark theme** with forest color scheme
- **Smooth transitions** and hover effects

### 🎯 Performance & SEO
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **SEO optimized** with proper meta tags, Open Graph, and Twitter cards
- **Sitemap and robots.txt** for better search engine indexing
- **Image optimization** with Next.js Image component

### 🛠 Technical Features
- **Interactive skill showcase** with rating system and visual indicators
- **Project portfolio** with filtering by category and status
- **Contact integration** with copy-to-clipboard functionality
- **Accessibility features** with proper ARIA labels and keyboard navigation
- **Custom CSS animations** and utility classes

## 🏗 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS + DaisyUI
- **Icons:** React Feather
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
my-website/
├── app/
│   ├── components/          # Reusable components
│   │   └── ProjectCard.tsx  # Project showcase component
│   ├── data/               # Data files
│   │   └── projects.ts     # Project information
│   ├── assets/             # Images and icons
│   ├── AboutME.tsx         # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Project.tsx         # Projects portfolio
│   ├── Contacts.tsx        # Contact information
│   ├── navbar.tsx          # Navigation component
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── public/
│   ├── sitemap.xml         # SEO sitemap
│   ├── robots.txt          # Search engine directives
│   └── Presentation1.pptx  # Resume file
└── ...config files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hemanthraj2003/my-website.git
   cd my-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Adding New Projects
Edit `app/data/projects.ts` to add your projects:

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  description: 'Brief description',
  longDescription: 'Detailed description',
  technologies: ['React', 'Node.js', '...'],
  category: 'web' | 'mobile' | 'desktop' | 'fullstack',
  status: 'completed' | 'in-progress' | 'planned',
  githubUrl: 'https://github.com/...',
  demoUrl: 'https://...',
  features: ['Feature 1', 'Feature 2'],
  // ... more fields
}
```

### Updating Skills
Modify the skills arrays in `app/Skills.tsx`:

```typescript
<SkillCard name="Technology Name" rating={4.5} imgsrc={TechIcon} />
```

### Changing Contact Information
Update contact details in `app/Contacts.tsx` and `app/ContactDetails.tsx`.

### Customizing Styles
- **Colors:** Edit CSS variables in `app/globals.css`
- **Theme:** Modify DaisyUI theme in `tailwind.config.ts`
- **Animations:** Add custom animations in `app/globals.css`

## 🎨 Design System

### Color Palette
- **Primary:** `#22c55e` (Green)
- **Secondary:** `#16a34a` (Dark Green)
- **Accent:** `#84cc16` (Lime)
- **Background:** `#171717` (Dark Gray)

### Typography
- **Headings:** Geist Sans (Bold/Black)
- **Body:** Geist Sans (Regular)
- **Code:** Geist Mono

### Components
- **Glass Effect:** `glass-effect` class
- **Hover Lift:** `hover-lift` class
- **Gradient Text:** `gradient-text` class
- **Animations:** `fade-in`, `slide-up` classes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Environment Variables
No environment variables required for basic functionality.

## 📊 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Optimized for LCP, FID, and CLS
- **Bundle Size:** Optimized with Next.js automatic code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Hemanth Raj N**
- GitHub: [@Hemanthraj2003](https://github.com/Hemanthraj2003)
- LinkedIn: [hemanth-raj-6667b6273](https://www.linkedin.com/in/hemanth-raj-6667b6273)
- Email: hemanth3raj@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [DaisyUI](https://daisyui.com/) for the component library
- [React Feather](https://feathericons.com/) for the beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment

---

⭐ **Star this repository if you found it helpful!**
