# 🚀 Deployment Guide

## Quick Start (Choose One)

### 1. **Vercel** (Recommended - Best for Vite) ⭐

#### Step 1: Push to GitHub
```bash
cd c:\Projects\Portfolio-Website
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-Website.git
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite
5. Click "Deploy"
6. Done! Your site is live 🎉

**Result:** `https://portfolio-website.vercel.app`

---

### 2. **Netlify** (Easy - Drag & Drop) 🎯

#### Step 1: Build locally
```bash
npm run build
```

#### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `dist/` folder
3. Done! Your site is live 🎉

**Or connect GitHub:**
1. Push to GitHub (see Vercel steps)
2. Go to Netlify
3. Click "New site from Git"
4. Select your repo
5. Auto-deploys on every push

**Result:** `https://your-site.netlify.app`

---

### 3. **GitHub Pages** (Free & Simple) 💚

#### Step 1: Add to package.json
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/Portfolio-Website"
}
```

#### Step 2: Install gh-pages
```bash
npm install --save-dev gh-pages
```

#### Step 3: Update package.json scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

#### Step 4: Deploy
```bash
npm run deploy
```

#### Step 5: GitHub Settings
1. Go to repo Settings
2. Pages → Source: "Deploy from a branch"
3. Select: `gh-pages` branch
4. Save

**Result:** `https://YOUR_USERNAME.github.io/Portfolio-Website`

---

### 4. **Your Own Server** (Advanced)

#### Step 1: Build
```bash
npm run build
```

#### Step 2: Upload `dist/` folder
- Via FTP, SSH, or hosting control panel
- Deploy to your hosting server
- Configure domain

#### Step 3: Nginx/Apache Configuration
Make sure 404s redirect to index.html for routing

---

## Pre-Deployment Checklist

### Before You Deploy
- [ ] All Gist files updated with your data
- [ ] Resume PDF URL set correctly
- [ ] LeetCode username correct
- [ ] Test locally: `npm run dev`
- [ ] Build works: `npm run build`
- [ ] No console errors
- [ ] Theme toggle works
- [ ] All links clickable
- [ ] Mobile responsive tested
- [ ] Git repo created

### Testing Before Deploy
```bash
# Test development
npm run dev
# Visit http://localhost:5173

# Test build
npm run build
npm run preview
# Visit http://localhost:4173
```

---

## Environment Variables (Optional)

If you need to use environment variables:

#### Create `.env` file
```
VITE_GIST_URL=https://gist.githubusercontent.com/6355121720/591efca2e09f0a1a769b33ff184c8d56/raw
VITE_LEETCODE_USERNAME=viraldobariya33
```

#### Use in code
```javascript
const GIST_URL = import.meta.env.VITE_GIST_URL;
```

#### In `.env.example` for others
```
VITE_GIST_URL=your-gist-url
VITE_LEETCODE_USERNAME=your-username
```

---

## Custom Domain Setup

### Vercel
1. Dashboard → Settings → Domains
2. Add custom domain
3. Follow DNS instructions

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions

### GitHub Pages
1. Repo Settings → Pages → Custom domain
2. Add your domain
3. Add CNAME record to DNS

---

## Performance Optimization

### Already Done ✅
- Vite minification
- Code splitting
- Image optimization
- CSS purging
- Tree shaking

### Additional (Optional)
```bash
# Install image optimization
npm install --save-dev vite-plugin-image-optimization

# Or use services like
# - TinyPNG for images
# - FontAwesome CDN for icons
# - Cloudflare for DNS
```

---

## Monitoring & Analytics (Optional)

### Add Vercel Analytics
```bash
npm install @vercel/analytics @vercel/web-vitals
```

Add to main.jsx:
```javascript
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  )
}
```

### Add Google Analytics
```bash
npm install react-ga4
```

Add to main.jsx:
```javascript
import GA4 from 'react-ga4'
GA4.initialize('GA_TRACKING_ID')
```

---

## Troubleshooting Deployment

### Site not showing data?
- Check if Gist is public
- Verify filenames match exactly
- Check browser console (F12)
- Wait 2 seconds after Gist updates

### Build fails?
```bash
# Clear cache
rm -r node_modules dist
npm install
npm run build
```

### 404 on refresh?
- Configure server for SPA
- Vercel/Netlify handle this automatically
- For custom server, redirect 404 to index.html

### Slow loading?
- Enable Gist caching
- Optimize images
- Use CDN
- Check API response time

### Theme not persisting?
- Check localStorage enabled
- Clear browser cache
- Test in incognito mode

---

## Post-Deployment

### Update Content
1. Edit Gist files
2. Commit updated portfolio code (if changes)
3. Push to GitHub
4. Automatic redeploy (Vercel/Netlify)
5. Wait 30 seconds for cache clear

### Monitor
- Check if site loads
- Verify data appears
- Test theme toggle
- Check mobile view
- Share link with friends!

### Share Your Portfolio
```
🚀 Check out my new portfolio!
https://your-portfolio-url.com

Built with React, Vite, Tailwind CSS
Dark/Light theme, LeetCode stats, all projects!
```

---

## Performance Metrics to Monitor

### Ideal Numbers
- **First Contentful Paint (FCP)**: < 2s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.8s

### Check with
- Google PageSpeed Insights
- GTMetrix
- WebPageTest
- Lighthouse (DevTools)

---

## Updating After Deployment

### Simple Content Update
```bash
# Update Gist file
# Wait 2 seconds
# Refresh browser
```

### Code Update
```bash
git add .
git commit -m "Update portfolio"
git push origin main
# Auto-deploys in 1-2 minutes
```

### Rollback if Issues
```bash
git revert HEAD
git push origin main
# Or go back to previous deploy via platform UI
```

---

## SEO Optimization

### Already Good ✅
- Semantic HTML
- Proper headings (h1, h2, etc.)
- Meta tags (add in index.html)
- Mobile responsive
- Fast loading

### Enhance (Optional)
```html
<!-- Add to index.html head -->
<meta name="description" content="Viral Dobariya - Full Stack Developer">
<meta name="keywords" content="developer, portfolio, react, vite">
<meta name="author" content="Viral Dobariya">
<meta property="og:title" content="Viral Dobariya Portfolio">
<meta property="og:description" content="Check out my projects and skills">
<meta property="og:image" content="https://your-site.com/og-image.png">
```

---

## Security

### Already Secure ✅
- No sensitive data in code
- Gist data fetched client-side
- No backend needed
- HTTPS enforced

### Best Practices
- Keep dependencies updated: `npm audit fix`
- Don't commit `.env` files
- Use environment variables for secrets
- Regular security updates

---

## Backup & Version Control

### Git Best Practices
```bash
# Always commit before deploy
git status
git add .
git commit -m "Descriptive message"
git push

# View history
git log --oneline

# Revert if needed
git reset --hard HEAD~1
```

### Backup Gist
- GitHub automatically versions Gist
- Click "Revisions" to see history
- Can revert to any version

---

## Final Checklist Before Going Live

### Technical
- [ ] Build completes without errors
- [ ] No console errors/warnings
- [ ] All pages load
- [ ] All links work
- [ ] Theme toggle works
- [ ] LeetCode stats display
- [ ] Resume downloads
- [ ] Mobile responsive
- [ ] All Gist data loads

### Content
- [ ] Name and title correct
- [ ] Bio/description finalized
- [ ] Education complete
- [ ] Skills accurate
- [ ] Projects up to date
- [ ] Links all correct
- [ ] Resume current

### Performance
- [ ] Load time < 2s
- [ ] Lighthouse score > 90
- [ ] No failed API calls
- [ ] Smooth animations

### Security
- [ ] No secrets in code
- [ ] No API keys exposed
- [ ] HTTPS enabled
- [ ] Dependencies updated

---

## Celebrate! 🎉

Your portfolio is now live! 

Share it:
- Tweet about it
- Add to GitHub profile
- Put in LinkedIn
- Share with recruiters
- Show friends and family

**Congratulations!** 🚀✨

---

## Support & Help

If issues arise:
1. Check browser console (F12)
2. Review deployment logs
3. Check error messages
4. Verify Gist files
5. Clear browser cache
6. Try incognito mode

**You got this!** 💪
