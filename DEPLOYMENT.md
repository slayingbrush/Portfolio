# Deployment Guide

This guide covers deploying your portfolio to various free hosting platforms.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended - Easiest)

**Steps:**
1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://www.netlify.com/) and sign up/login

3. **Option A: Drag & Drop**
   - Drag the `dist` folder to Netlify's deploy area
   - Your site will be live instantly!

4. **Option B: Git Integration (Recommended)**
   - Push your code to GitHub
   - Connect your GitHub repo to Netlify
   - Netlify will auto-deploy on every push
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Environment Variables:**
   - Go to Site settings > Environment variables
   - Add your EmailJS and Analytics variables:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
     - `VITE_GA_TRACKING_ID` (optional)
     - `VITE_PLAUSIBLE_DOMAIN` (optional)

**Netlify Features:**
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Automatic deployments
- ✅ Form handling (can use Netlify Forms as alternative)
- ✅ Analytics (basic plan available)

---

### 2. Vercel (Great for React Apps)

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. **Or use GitHub Integration:**
   - Push to GitHub
   - Go to [Vercel](https://vercel.com/)
   - Import your repository
   - Vercel auto-detects Vite/React

4. **Environment Variables:**
   - Go to Project Settings > Environment Variables
   - Add all your `VITE_*` variables

**Vercel Features:**
- ✅ Free SSL
- ✅ Custom domains
- ✅ Edge network (fast global CDN)
- ✅ Automatic deployments
- ✅ Analytics included

---

### 3. GitHub Pages

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/professionalPortfolio"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages:
   - Go to repo Settings > Pages
   - Select `gh-pages` branch
   - Your site will be at `https://yourusername.github.io/professionalPortfolio`

**Note:** Environment variables need to be set in your build process or use a different approach.

---

### 4. Cloudflare Pages (Fast & Free)

**Steps:**
1. Push code to GitHub/GitLab

2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)

3. Connect your repository

4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`

5. Add environment variables in Pages settings

**Cloudflare Features:**
- ✅ Free SSL
- ✅ Global CDN (very fast)
- ✅ Custom domains
- ✅ Unlimited bandwidth

---

### 5. Render

**Steps:**
1. Go to [Render](https://render.com/)

2. Create new Static Site

3. Connect your GitHub repo

4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Add environment variables

**Render Features:**
- ✅ Free SSL
- ✅ Custom domains
- ✅ Automatic deployments

---

## 📧 Setting Up EmailJS (Contact Form)

1. **Sign up:** Go to [EmailJS](https://www.emailjs.com/) (free tier: 200 emails/month)

2. **Create Email Service:**
   - Go to Email Services
   - Add new service (Gmail, Outlook, etc.)
   - Follow setup instructions

3. **Create Email Template:**
   - Go to Email Templates
   - Create new template
   - Use these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (amengesh@vols.utk.edu)

4. **Get API Keys:**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Add to .env file:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   ```

---

## 📊 Setting Up Analytics

### Option 1: Google Analytics (Free)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create account and property
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add to `.env`:
   ```env
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

### Option 2: Plausible Analytics (Privacy-friendly)

1. Go to [Plausible](https://plausible.io/)
2. Sign up (free trial, then $9/month or self-host)
3. Add your domain
4. Add to `.env`:
   ```env
   VITE_PLAUSIBLE_DOMAIN=yourdomain.com
   ```

### Option 3: Netlify Analytics (If using Netlify)

- Built into Netlify
- Go to Site settings > Analytics
- Enable (may require paid plan for advanced features)

---

## 🔧 Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add your profile image to `public/profile-image.jpg`
- [ ] Set up EmailJS and add credentials to `.env`
- [ ] Set up Analytics (optional)
- [ ] Test contact form locally
- [ ] Build project: `npm run build`
- [ ] Test build locally: `npm run preview`
- [ ] Create `.env` file with all variables
- [ ] Add `.env` to `.gitignore` (don't commit secrets!)
- [ ] Push to GitHub
- [ ] Deploy to chosen platform
- [ ] Add environment variables in hosting platform
- [ ] Test live site

---

## 🎯 Recommended Setup

**Best for beginners:** Netlify
- Easiest deployment
- Great documentation
- Free tier is generous

**Best for performance:** Vercel or Cloudflare Pages
- Fastest global CDN
- Great for React apps

**Best for free hosting:** GitHub Pages
- Completely free
- Easy to set up
- Good for static sites

---

## 📝 Environment Variables Reference

Create a `.env` file in your project root:

```env
# Required for Contact Form
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Optional - Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_PLAUSIBLE_DOMAIN=yourdomain.com
```

**Important:** Never commit `.env` to Git! It's already in `.gitignore`.

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check EmailJS credentials in environment variables
- Verify template variables match
- Check browser console for errors

**Analytics not showing?**
- Verify tracking ID is correct
- Check if ad blockers are blocking analytics
- Wait 24-48 hours for data to appear

**Build fails?**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript/ESLint errors
- Verify all environment variables are set

---

## 🎉 You're Ready!

Once deployed, share your portfolio URL and start collecting those messages!

