# Namaste Rides - About-First Business Website

A modern, full-featured Next.js website for Namaste Rides with beautiful animations, responsive design, and Supabase integration.

## 🚀 Features

- **Full-viewport Hero** with video/image background and smooth animations
- **About Landing Page** with all sections:
  - Founder's Message with expandable letter modal
  - Why We Ride feature bullets with testimonial
  - Leadership Team grid with detailed bio modals
  - Offerings showcase
  - How We Work process flow
  - Newsroom & Blog previews
- **Newsroom Page** with paginated news listings
- **Blog Page** with featured images and categories
- **Careers Page** with job listings
- **Newsletter Subscription** integrated with Supabase
- **Responsive Design** - works perfectly on mobile, tablet, and desktop
- **Accessibility** - ARIA labels, focus states, keyboard navigation
- **Animations** - Framer Motion with prefers-reduced-motion support
- **SEO Optimized** - Meta tags, semantic HTML

## 🎨 Design

- **Color Scheme**: Yellow (#FFD700), Orange (#FF8C00), White, Charcoal (#1A1A1A)
- **Fonts**: Poppins (display), Inter (body)
- **Inspired by**: Diljit Dosanjh website style with smooth animations and video backgrounds

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: React Icons (Feather Icons)
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd namaste
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.local.example` to `.env.local`:
   ```powershell
   Copy-Item .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   NEWSLETTER_EMAIL=your-email@example.com
   ```

4. **Set up Supabase Database**
   
   - Create a new Supabase project at https://supabase.com
   - Go to SQL Editor and run the `supabase-schema.sql` file
   - This will create all necessary tables and sample data

5. **Run the development server**
   ```powershell
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to http://localhost:3000

## 📁 Project Structure

```
namaste/
├── app/
│   ├── api/              # API routes
│   │   ├── team/
│   │   ├── newsroom/
│   │   ├── blog/
│   │   ├── jobs/
│   │   └── subscribe/
│   ├── blog/             # Blog page
│   ├── careers/          # Careers page
│   ├── newsroom/         # Newsroom page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page (About landing)
├── components/           # React components
│   ├── AboutHero.tsx
│   ├── BlogList.tsx
│   ├── FeatureBullets.tsx
│   ├── Footer.tsx
│   ├── FounderLetter.tsx
│   ├── HowItWorks.tsx
│   ├── Navbar.tsx
│   ├── NewsList.tsx
│   ├── OfferingsGrid.tsx
│   └── TeamGrid.tsx
├── lib/
│   └── supabase.ts       # Supabase client
├── public/               # Static assets
│   ├── images/           # Place your images here
│   │   ├── team/
│   │   ├── blog/
│   │   └── news/
│   └── videos/           # Place your videos here
├── supabase-schema.sql   # Database schema
└── README.md
```

## 🖼️ Adding Your Content

### 1. Logo
Place your logo in `public/images/logo.png` and update the Navbar component.

### 2. Hero Video/Image
- **Video**: Place in `public/videos/hero-bg.mp4`
- **Poster Image**: Place in `public/images/hero-poster.jpg`

### 3. Team Photos
Place team member photos in `public/images/team/` folder:
- `ravi.jpg`, `priya.jpg`, `arjun.jpg`, `sneha.jpg`, etc.

### 4. Blog & News Images
- Blog images: `public/images/blog/`
- News images: `public/images/news/`

### 5. Founder Signature
Place signature SVG in `public/images/signature.svg`

## 🗄️ Database Management

The app works with both Supabase and mock data:

1. **With Supabase**: Data is fetched from your Supabase tables
2. **Without Supabase**: Mock data is automatically used (great for development)

### Adding Data via Supabase Dashboard

1. Go to your Supabase project
2. Click on "Table Editor"
3. Add/edit data in tables: `team`, `newsroom`, `blog`, `jobs`

### API Endpoints

- `GET /api/team` - Fetch all team members
- `GET /api/newsroom?limit=10&page=1` - Fetch newsroom posts (paginated)
- `GET /api/blog?limit=10&page=1` - Fetch blog posts (paginated)
- `GET /api/jobs` - Fetch all job listings
- `POST /api/subscribe` - Subscribe to newsletter

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  brand: {
    yellow: '#FFD700',
    orange: '#FF8C00',
    // ... customize as needed
  },
}
```

### Fonts
Edit `app/layout.tsx` to change fonts.

### Content
Edit `app/page.tsx` to update hero text, founder letter, and other content.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- `prefers-reduced-motion` support
- Alt text on images

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Works with any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 📝 Environment Variables

Required:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

Optional:
- `NEWSLETTER_EMAIL` - Email to receive newsletter notifications
- `NEXT_PUBLIC_BASE_URL` - Your production URL

## 🤝 Contributing

Feel free to customize this project for your needs!

## 📄 License

This project is for Namaste Rides.

## 📞 Support

For questions or issues, contact: business@namasterides.com

---

**Built with ❤️ for Namaste Rides**
