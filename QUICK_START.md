# 🚀 Quick Start Guide

## Step 2: Set Up EmailJS (Contact Form)

I've created your `.env` file! Now follow these steps:

### 1. Get Your EmailJS Credentials (5 minutes)

**A. Create Account & Service:**
1. Go to **https://www.emailjs.com/** and sign up (free)
2. Click **"Email Services"** → **"Add New Service"**
3. Choose **Gmail** (or your email provider)
4. Connect your account
5. **Copy the Service ID** (e.g., `service_abc123`)

**B. Create Template:**
1. Click **"Email Templates"** → **"Create New Template"**
2. **Subject:** `New Portfolio Message from {{from_name}}`
3. **Content:**
   ```
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Save and **copy the Template ID** (e.g., `template_xyz789`)

**C. Get Public Key:**
1. Go to **Account** → **General** → **API Keys**
2. **Copy your Public Key**

### 2. Update Your .env File

1. Open `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123        ← Your actual Service ID
VITE_EMAILJS_TEMPLATE_ID=template_xyz789      ← Your actual Template ID
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp      ← Your actual Public Key
```

### 3. Test It!

```bash
# Restart your dev server
npm run dev
```

Then:
1. Go to your contact form
2. Fill it out and submit
3. Check your email! 📧

---

## ✅ Done!

Your contact form is now working! 

**Next:** Deploy to Netlify (see DEPLOYMENT.md)

---

## 📚 Need More Help?

- **Detailed EmailJS setup:** See `EMAILJS_SETUP.md`
- **Deployment guide:** See `DEPLOYMENT.md`
- **Full setup guide:** See `SETUP.md`

