# Setup Guide

## 📧 Contact Form Setup (EmailJS)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

### Step 2: Set Up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. **Save your Service ID** (looks like `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:** New Portfolio Contact: {{from_name}}

**Content:**
```
Hello!

You received a new message from your portfolio:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Save your Template ID** (looks like `template_xxxxx`)

### Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find **API Keys** section
3. Copy your **Public Key**

### Step 5: Add to Environment Variables
1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

3. Restart your dev server: `npm run dev`

### Step 6: Test
1. Fill out the contact form
2. Submit
3. Check your email inbox!

---

## 📊 Analytics Setup

### Option 1: Google Analytics (Free)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create an account
3. Create a new property
4. Get your **Measurement ID** (G-XXXXXXXXXX)
5. Add to `.env`:
   ```env
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

### Option 2: Plausible Analytics (Privacy-friendly)

1. Go to [Plausible](https://plausible.io/)
2. Sign up (free trial available)
3. Add your domain
4. Add to `.env`:
   ```env
   VITE_PLAUSIBLE_DOMAIN=yourdomain.com
   ```

---

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✅ Testing Checklist

- [ ] Contact form sends emails successfully
- [ ] Analytics tracking works (check browser console)
- [ ] All links work correctly
- [ ] Site is responsive on mobile
- [ ] Profile image displays (or fallback shows)

---

## 🆘 Troubleshooting

**"EmailJS credentials not configured" error?**
- Make sure `.env` file exists in project root
- Check that all three EmailJS variables are set
- Restart dev server after adding variables
- Variable names must start with `VITE_`

**Analytics not working?**
- Check browser console for errors
- Verify tracking ID is correct
- Ad blockers may prevent analytics from loading
- Wait 24-48 hours for data to appear in dashboard

**Form submits but no email received?**
- Check EmailJS dashboard > Logs for errors
- Verify email service is properly connected
- Check spam folder
- Verify template variables match exactly

---

## 📝 Notes

- EmailJS free tier: 200 emails/month
- Environment variables must start with `VITE_` to be accessible in the browser
- Never commit `.env` file to Git (already in `.gitignore`)
- For production, add environment variables in your hosting platform's settings

