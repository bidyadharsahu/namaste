# Namaste Rides - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```powershell
npm install
```

### Step 2: Set Up Environment Variables

Create `.env.local` file:
```powershell
Copy-Item .env.local.example .env.local
```

**For now, you can run without Supabase** - the app will use mock data!

### Step 3: Run Development Server
```powershell
npm run dev
```

Open http://localhost:3000 🎉

---

## 📸 Adding Your Media Assets

### Required Assets to Replace:

1. **Hero Video or Image**
   - Video: `public/videos/hero-bg.mp4`
   - Poster: `public/images/hero-poster.jpg`
   - Recommended size: 1920x1080, MP4 format, under 10MB

2. **Team Photos**
   - `public/images/team/ravi.jpg` (Founder photo)
   - `public/images/team/priya.jpg`
   - `public/images/team/arjun.jpg`
   - `public/images/team/sneha.jpg`
   - Recommended: Square images, 800x800px, JPG format

3. **Logo**
   - `public/images/logo.png`
   - Recommended: PNG with transparent background, 200x200px

4. **Signature (Optional)**
   - `public/images/signature.svg`
   - SVG format for best quality

5. **Blog & News Images**
   - `public/images/blog/` folder
   - `public/images/news/` folder
   - Recommended: 1200x630px, JPG format

---

## 🗄️ Supabase Setup (Optional - for production)

### Step 1: Create Supabase Project

1. Go to https://supabase.com
2. Click "New Project"
3. Fill in project details

### Step 2: Run Database Schema

1. In Supabase Dashboard, go to "SQL Editor"
2. Click "New Query"
3. Copy contents of `supabase-schema.sql`
4. Paste and click "Run"

### Step 3: Get Your Credentials

1. Go to Project Settings > API
2. Copy these values:
   - Project URL
   - Anon/Public key

### Step 4: Update .env.local

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEWSLETTER_EMAIL=your-email@example.com
```

### Step 5: Restart Dev Server

```powershell
npm run dev
```

---

## ✏️ Customizing Content

### Update Hero Section
Edit `app/page.tsx` around line 35:

```typescript
const heroData = {
  title: 'Your Title — Your Subtitle',
  subtitle: 'Your description here',
  // ...
};
```

### Update Founder Letter
Edit `app/page.tsx` around line 48:

```typescript
const founderData = {
  name: 'Your Name',
  title: 'Your Title',
  paragraphs: [
    'Your message here...',
    // ...
  ],
};
```

### Change Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    yellow: '#FFD700',    // Change these
    orange: '#FF8C00',    // to your colors
    // ...
  },
}
```

---

## 📝 What You Need to Provide

Please share the following so I can help you integrate them:

### 1. Media Files
- [ ] Logo image
- [ ] Hero background video or high-res image
- [ ] Founder/CEO photo
- [ ] Team member photos (3-7 people)
- [ ] Any specific images for blog/news

### 2. Supabase Credentials (if you want database)
- [ ] Supabase Project URL
- [ ] Supabase Anon Key
- [ ] Email for newsletter subscriptions

### 3. Content (optional - has defaults)
- [ ] Founder's letter text
- [ ] Company description
- [ ] Team member bios
- [ ] Any specific copy changes

---

## 🎨 Design Reference

The design is inspired by:
- Diljit Dosanjh website (https://diljitdosanjh.com/) - smooth animations
- Uber About page - clean layout and structure
- Color scheme: Yellow/Orange/White/Charcoal

---

## 🐛 Troubleshooting

### "Module not found" errors
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Port 3000 already in use
```powershell
npm run dev -- -p 3001
```

### Images not showing
- Check that images are in `public/images/` folder
- Use paths like `/images/team/ravi.jpg` (starting with /)
- Restart dev server after adding new images

---

## 📞 Next Steps

1. Run `npm install` and `npm run dev`
2. Browse the site at http://localhost:3000
3. Share your media files (logo, photos, videos)
4. Provide Supabase credentials (or use mock data for now)
5. Test and customize as needed

---

**Need help?** Just ask! I'm here to assist with:
- Integrating your images and videos
- Setting up Supabase
- Customizing colors and content
- Deploying to production
