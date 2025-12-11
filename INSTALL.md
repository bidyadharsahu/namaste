# Installation & Troubleshooting Guide

## 🚀 Installation Steps

### Step 1: Verify Prerequisites

Check if you have Node.js and npm installed:

```powershell
node --version
# Should show v18.0.0 or higher

npm --version
# Should show v9.0.0 or higher
```

**Don't have Node.js?**
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Restart your computer after installation

---

### Step 2: Navigate to Project

```powershell
cd c:\Users\bidya\OneDrive\Documents\GitHub\namaste
```

---

### Step 3: Install Dependencies

```powershell
npm install
```

**This installs**:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase Client
- React Icons

**Expected time**: 2-5 minutes (depending on internet speed)

---

### Step 4: Run Development Server

```powershell
npm run dev
```

**You should see**:
```
▲ Next.js 14.0.4
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

---

### Step 5: Open in Browser

Visit: **http://localhost:3000**

---

## 🐛 Troubleshooting

### Problem: "npm: command not found" or "npm is not recognized"

**Solution**: Install Node.js
1. Go to https://nodejs.org/
2. Download LTS version (20.x)
3. Run installer
4. Restart PowerShell
5. Verify: `node --version`

---

### Problem: "EACCES: permission denied"

**Solution 1**: Run PowerShell as Administrator
- Right-click PowerShell
- Select "Run as Administrator"

**Solution 2**: Change npm global directory
```powershell
mkdir "$env:APPDATA\npm"
npm config set prefix "$env:APPDATA\npm"
```

---

### Problem: "Module not found" errors

**Solution**: Clean install
```powershell
# Remove existing modules
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Fresh install
npm install
```

---

### Problem: Port 3000 is already in use

**Solution 1**: Kill the process
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill it (replace PID with actual number)
taskkill /PID [PID] /F
```

**Solution 2**: Use different port
```powershell
npm run dev -- -p 3001
# Then visit http://localhost:3001
```

---

### Problem: "Cannot find module '@/...' "

**Solution**: TypeScript path mapping issue
```powershell
# Delete .next folder
Remove-Item -Recurse -Force .next

# Restart dev server
npm run dev
```

---

### Problem: Tailwind styles not working

**Solution**: Clear Next.js cache
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

---

### Problem: Images not showing

**Checklist**:
- [ ] Images are in `public/` folder (not `src/`)
- [ ] Path starts with `/` (e.g., `/images/logo.png`)
- [ ] File extension is correct (.jpg, .png, etc.)
- [ ] File names match exactly (case-sensitive on some systems)

**Fix**: Restart dev server after adding images

---

### Problem: Supabase connection errors

**Solution**: Check `.env.local`
```powershell
# Make sure file exists
Test-Path .env.local

# Should return True
```

**Mock data fallback**: App works without Supabase!
- API routes automatically use mock data if Supabase fails
- You can develop the entire site without database

---

### Problem: Build errors (npm run build)

**Solution 1**: Check TypeScript errors
```powershell
npm run build
# Read error messages carefully
```

**Solution 2**: Type issues
- Most common: missing types for props
- Check components match their interfaces

**Solution 3**: Clean build
```powershell
Remove-Item -Recurse -Force .next
npm run build
```

---

### Problem: Slow performance in development

**Normal!** Development mode is slower than production.

**For production speed**:
```powershell
npm run build
npm start
```

---

## 📦 Alternative Installation Methods

### Using Yarn (if you prefer)

```powershell
# Install Yarn
npm install -g yarn

# Install dependencies
yarn install

# Run dev server
yarn dev
```

### Using pnpm (fastest)

```powershell
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Run dev server
pnpm dev
```

---

## 🔧 Useful Commands

```powershell
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clean cache and reinstall
Remove-Item -Recurse -Force node_modules, .next, package-lock.json
npm install

# Update all dependencies
npm update

# Check for outdated packages
npm outdated
```

---

## 📊 Verify Installation

After `npm install`, check these exist:

```powershell
# Should exist
Test-Path node_modules          # True
Test-Path package-lock.json     # True

# Should have these key packages
Test-Path node_modules\next     # True
Test-Path node_modules\react    # True
Test-Path node_modules\framer-motion  # True
```

---

## 🌐 Browser Compatibility

**Tested & Working**:
- ✅ Chrome (recommended)
- ✅ Edge
- ✅ Firefox
- ✅ Safari

**For best development experience**: Use Chrome or Edge

---

## 💻 VS Code Setup (Optional but Recommended)

### Install Extensions:
1. **ESLint** - Linting
2. **Tailwind CSS IntelliSense** - Autocomplete
3. **Pretty TypeScript Errors** - Better errors
4. **ES7+ React/Redux** - Snippets

### Settings:
Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## 🎯 Quick Health Check

Run all these - should pass:

```powershell
# 1. Node installed?
node --version
# ✅ Should show v18+ or v20+

# 2. In project directory?
Get-Location
# ✅ Should show ...namaste

# 3. Files exist?
Test-Path package.json
# ✅ Should return True

# 4. Dependencies installed?
Test-Path node_modules
# ✅ Should return True

# 5. Can start server?
npm run dev
# ✅ Should start without errors
```

---

## 🆘 Still Having Issues?

### Get Debug Info:

```powershell
# System info
node --version
npm --version
$PSVersionTable.PSVersion

# Project info
Get-Location
Test-Path package.json
Test-Path node_modules
Test-Path .env.local

# Last error
$Error[0]
```

**Share this output** and I can help diagnose the issue!

---

## 📞 Common Questions

**Q: Do I need Supabase to run the site?**
A: No! It works with mock data. Supabase is only for production.

**Q: Can I use this without images?**
A: Yes! Site works, just shows placeholder colors where images would be.

**Q: How long does first install take?**
A: 2-5 minutes usually, depending on internet speed.

**Q: Do I need to install globally?**
A: No, everything is installed locally in the project.

**Q: Can I deploy without a database?**
A: Yes, mock data works in production too!

---

**Still stuck?** Let me know the exact error message and I'll help! 🚀
