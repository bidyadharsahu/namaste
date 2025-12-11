# Media Assets Guide for Namaste Rides

This document lists all the images and videos needed for the website.

## 🎥 Videos

### Hero Background Video
**Location**: `public/videos/hero-bg.mp4`
- **Purpose**: Full-screen background video for homepage hero
- **Specs**: 
  - Format: MP4 (H.264 codec)
  - Resolution: 1920x1080 (Full HD) minimum
  - Duration: 10-30 seconds (will loop)
  - File size: Under 10MB (compress if needed)
  - Frame rate: 30fps
  - Aspect ratio: 16:9
- **Style**: Dynamic city/traffic/people commuting footage
- **Note**: Should look good with dark overlay

### Hero Poster Image (Fallback)
**Location**: `public/images/hero-poster.jpg`
- **Purpose**: Shown while video loads or if video fails
- **Specs**: 1920x1080 JPG, under 500KB
- **Style**: Same as video thumbnail

---

## 🖼️ Images

### Logo
**Location**: `public/images/logo.png`
- **Specs**: PNG with transparent background, 512x512px
- **Usage**: Navbar, footer, and general branding

### Signature
**Location**: `public/images/signature.svg`
- **Purpose**: Founder's handwritten signature
- **Format**: SVG (vector) preferred, or high-res PNG
- **Color**: Dark/black stroke

---

## 👥 Team Photos

All team photos should be:
- **Format**: JPG or WebP
- **Size**: 800x800px (square)
- **Style**: Professional headshots, consistent background/lighting
- **Quality**: High resolution, well-lit

### Required Photos:

1. **Ravi Kumar (Founder & CEO)**
   - Location: `public/images/team/ravi.jpg`

2. **Priya Sharma (CTO)**
   - Location: `public/images/team/priya.jpg`

3. **Arjun Mehta (COO)**
   - Location: `public/images/team/arjun.jpg`

4. **Sneha Patel (CMO)**
   - Location: `public/images/team/sneha.jpg`

**Add more as needed** - just place them in `public/images/team/` and update the database.

---

## 📰 Newsroom Images

**Location**: `public/images/news/`

Suggested images (name them accordingly):
- `expansion.jpg` - City expansion/map visual
- `partnership.jpg` - Business handshake/meeting
- `funding.jpg` - Growth/charts/money
- `safety.jpg` - Safety features/technology
- `drivers.jpg` - Happy driver partners
- `ev.jpg` - Electric vehicles

**Specs**:
- Size: 1200x630px (social media optimized)
- Format: JPG
- Quality: High, but under 200KB each

---

## 📝 Blog Featured Images

**Location**: `public/images/blog/`

Suggested images:
- `urban-mobility.jpg` - Cityscapes/modern transportation
- `safety-tips.jpg` - Safety icons/secure ride
- `tech-platform.jpg` - Technology/servers/code
- `corporate-guide.jpg` - Office/business people
- `driver-stories.jpg` - Driver portraits/testimonials
- `sustainability.jpg` - Green/eco-friendly vehicles

**Specs**:
- Size: 1200x630px
- Format: JPG
- Style: Modern, professional stock photos or custom graphics

---

## 📦 Where to Get Images

### Free Stock Photo Sites:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Search Terms:
- "indian city traffic"
- "rideshare driver"
- "business commute"
- "smartphone transportation app"
- "electric vehicle india"
- "safe travel"
- "corporate office india"

### Video Sources:
- **Pexels Videos**: https://www.pexels.com/videos/
- **Pixabay Videos**: https://pixabay.com/videos/
- Search: "city traffic", "commute", "urban transportation"

---

## 🎨 Image Processing Tips

### Compress Images:
- Use https://tinypng.com or https://squoosh.app
- Target: Under 200KB for regular images, under 10MB for videos

### Resize Images:
- Use https://www.iloveimg.com/resize-image
- Or Photoshop/GIMP/Canva

### Convert to WebP (optional):
- Better compression, modern format
- Use https://cloudconvert.com/jpg-to-webp

---

## 📋 Checklist

Once you have the assets, place them in the appropriate folders:

- [ ] Hero video: `public/videos/hero-bg.mp4`
- [ ] Hero poster: `public/images/hero-poster.jpg`
- [ ] Logo: `public/images/logo.png`
- [ ] Signature: `public/images/signature.svg`
- [ ] Team photos (4+): `public/images/team/*.jpg`
- [ ] News images (6+): `public/images/news/*.jpg`
- [ ] Blog images (6+): `public/images/blog/*.jpg`

---

## 🔄 Next Steps After Adding Images

1. **Place all files in the correct folders**
2. **Restart the development server**: `npm run dev`
3. **Check the website** - images should now appear
4. **Optional**: Update image paths in code if you used different names

---

## 💡 Temporary Placeholder

Until you add real images, the site will show:
- Placeholder colors for missing images
- Gradients as backgrounds
- The site is fully functional, just waiting for your media!

---

**Questions?** Let me know which assets you need help with!
