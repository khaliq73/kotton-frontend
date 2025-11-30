# Kotton Wholesale - Premium B2B Streetwear Website

A premium B2B wholesale streetwear website built with React 18, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── pages/          # All page components
├── components/     # Reusable components
│   ├── layout/     # Navbar, Footer, MobileMenu
│   ├── ui/         # UI components (ProductCard, HeroSlider, etc.)
│   └── common/     # Common components (Button, SectionTitle, etc.)
├── data/           # Static data (products, categories, blog posts)
└── assets/         # Images and static assets
```

## 🎯 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ WhatsApp integration for B2B inquiries
- ✅ Product catalog with categories
- ✅ Blog system
- ✅ Contact form
- ✅ Image galleries with zoom
- ✅ Size charts
- ✅ Instagram feed integration

## 📱 Pages

- `/` - Home page
- `/products` - All products
- `/category/:slug` - Category pages
- `/product/:slug` - Product detail pages
- `/blog` - Blog listing
- `/blog/:slug` - Blog post pages
- `/contact` - Contact page
- `/about` - About page

## 🔧 Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM v6
- Framer Motion
- Lucide React Icons

## 📝 Notes

- All data is currently static (no backend)
- WhatsApp number: +923001234567 (change in `src/components/ui/WhatsAppButton.jsx`)
- Images are using Unsplash placeholders
- No cart/checkout functionality (B2B wholesale only)

## 🎨 Customization

- Update WhatsApp number in `src/components/ui/WhatsAppButton.jsx`
- Modify products in `src/data/products.js`
- Update categories in `src/data/categories.js`
- Edit blog posts in `src/data/blogPosts.js`

