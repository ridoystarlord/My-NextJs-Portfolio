# Mehedi Hasan Ridoy - Portfolio Website

A modern, professional portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

Visit: [ridoy.dev](https://ridoy.dev)

## ✨ Features

### Design & UX

- **Modern & Colorful Design**: Eye-catching gradients, glass-morphism effects, and professional layouts
- **Smooth Animations**: Powered by Framer Motion for fluid page transitions and interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Dark Mode Ready**: Beautiful color schemes for both light and dark themes
- **Fast Loading**: Server-side rendering and optimized assets for blazing-fast performance

### Pages

#### 🏠 Home

- Impressive hero section with animated gradient backgrounds
- Statistics showcase (years of experience, projects completed, clients served)
- Interactive tech stack display with 19+ technologies
- Agile methodology section explaining development process
- Featured projects carousel
- Call-to-action section

#### 💼 Projects

- Featured projects with detailed descriptions
- Tech stack badges for each project
- Live demo links and case studies
- Varied layouts (grid and featured cards)
- Project categories: SaaS, Shopify Apps, E-commerce, Backend

**Showcased Projects:**

- Retail Pilot (POS System)
- Accounting Pilot (Accounting Software)
- Message Pilot (Omnichannel Messaging)
- Sender Bee (Email Marketing)
- Shopify Apps & Hydrogen Stores
- Custom Backend Solutions

#### 👨‍💻 About

- Professional journey timeline
- Work experience with companies (Bevy Commerce, Softs.ai, IBOS Limited)
- Skills categorized by expertise
- Achievement statistics
- International client experience (UAE, Netherlands, Singapore, Germany, Holland)

#### 📝 Blog

- Modern blog grid layout
- Category filtering
- Search functionality
- Read time estimates
- Technical articles on React, Next.js, Shopify, Go, TypeScript, and more

#### 🎨 Gallery

- Visual portfolio showcase
- Masonry layout for images and videos
- Client testimonials from international clients
- Project categories with filtering

#### 📧 Contact

- Professional contact form with validation
- Multiple contact methods (Email, Phone, Location)
- Social media links (GitHub, LinkedIn, Twitter, Telegram, WhatsApp, Discord)
- FAQ section
- Quick response information

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **UI Components**: Shadcn/ui

### Backend & Database (Ready for integration)

- Node.js / Go / Python
- PostgreSQL / MongoDB
- Redis for caching
- Prisma ORM

### DevOps

- Docker
- GitHub Actions
- Vercel (deployment)
- AWS (optional)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ridoy/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🎨 Customization

### Update Personal Info

1. Edit `app/layout.tsx` for SEO metadata
2. Update `components/navigation.tsx` for navigation links
3. Modify `components/footer.tsx` for contact information
4. Customize `app/page.tsx` for homepage content

### Add Projects

Edit the `projects` array in `app/projects/page.tsx`:

```typescript
{
  title: "Your Project",
  description: "Project description",
  tech: [{ icon: SiReact, name: "React" }],
  gradient: "from-blue-600 to-purple-600",
  demoUrl: "https://demo.com",
}
```

### Modify Colors

The entire website uses a centralized CSS variable system for easy color customization:

**Location**: `app/globals.css` (lines ~76-95)

```css
/* Brand Colors - Change these to update colors across the entire site */
--color-primary: #3b82f6; /* Blue - Primary actions */
--color-secondary: #8b5cf6; /* Purple - Secondary elements */
--color-tertiary: #ec4899; /* Pink - Accent highlights */
```

**Utility Classes Available**:

- **Solid Colors**: `bg-brand-primary`, `text-brand-secondary`, `border-brand-tertiary`
- **Gradients**:
  - `bg-brand-gradient` (primary → secondary)
  - `bg-brand-gradient-full` (primary → secondary → tertiary)
  - `text-brand-gradient` (gradient text effect)
- **Hover States**: `hover:border-brand-secondary`, `hover:text-brand-primary`

**Example Usage**:

```tsx
// Button with gradient
<button className="bg-brand-gradient text-white">Click Me</button>

// Gradient text
<h1 className="text-brand-gradient">Welcome</h1>

// Solid color with hover
<div className="border-2 border-gray-300 hover:border-brand-secondary">
```

**To Change Colors**: Simply update the three CSS variables in `globals.css` and the entire website will reflect the new color scheme instantly!

## 📱 Pages Structure

```
/                   - Homepage with hero, tech stack, agile process
/projects          - Portfolio projects showcase
/about             - Professional journey and experience
/blog              - Technical articles and tutorials
/gallery           - Visual portfolio and testimonials
/contact           - Contact form and social links
```

## 🎯 Key Features Implemented

- ✅ Modern gradient-based design
- ✅ Smooth Framer Motion animations
- ✅ Responsive navigation with mobile menu
- ✅ Interactive project cards
- ✅ Agile methodology showcase
- ✅ Tech stack with 19+ technologies
- ✅ Professional footer with social links
- ✅ Contact form with validation
- ✅ Blog with search and filters
- ✅ Gallery with testimonials
- ✅ SEO optimized metadata
- ✅ Fast loading with SSR

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

## 🤝 Connect

- **Email**: hello@ridoy.dev
- **GitHub**: [@ridoy](https://github.com/ridoy)
- **LinkedIn**: [Mehedi Hasan Ridoy](https://linkedin.com/in/ridoy)
- **Website**: [ridoy.dev](https://ridoy.dev)

---

Built with ❤️ by Mehedi Hasan Ridoy
