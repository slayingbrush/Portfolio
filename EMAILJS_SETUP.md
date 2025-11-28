# EmailJS Setup - Step by Step Guide

## 🎯 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Sign up with Google, GitHub, or email
4. Verify your email if needed

### Step 2: Create Email Service
1. Once logged in, go to **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended) or your email provider
4. Click **"Connect Account"**
5. Authorize EmailJS to send emails from your account
6. **Copy the Service ID** (looks like `service_abc123`)
   - You'll see it in the service list

### Step 3: Create Email Template
1. Go to **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Use these settings:

**Template Name:** Portfolio Contact Form

**Subject Line:**
```
New Portfolio Message from {{from_name}}
```

**Content:**
```
Hello!

You received a new message from your portfolio contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From: {{from_name}}
Email: {{from_email}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was sent automatically from your portfolio.
Reply directly to: {{from_email}}
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_xyz789`)
   - You'll see it in the template list

### Step 4: Get Public Key
1. Go to **"Account"** (top right) → **"General"**
2. Scroll down to **"API Keys"** section
3. Find your **Public Key** (looks like `AbCdEfGhIjKlMnOpQrStUvWxYz`)
4. **Copy the Public Key**

### Step 5: Add to Your Project
1. In your project, create a `.env` file in the root directory
2. Add these three lines (replace with YOUR values):

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOpQrStUvWxYz
```

**Important:** 
- Replace `service_abc123` with your actual Service ID
- Replace `template_xyz789` with your actual Template ID  
- Replace `AbCdEfGhIjKlMnOpQrStUvWxYz` with your actual Public Key

### Step 6: Test It!
1. Restart your dev server:
   ```bash
   # Stop the server (Ctrl+C) then:
   npm run dev
   ```

2. Go to your contact form
3. Fill it out and submit
4. Check your email inbox!

---

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Service ID copied
- [ ] Email template created
- [ ] Template ID copied
- [ ] Public Key copied
- [ ] `.env` file created with all three values
- [ ] Dev server restarted
- [ ] Test message sent successfully
- [ ] Email received in inbox

---

## 🆘 Troubleshooting

**"EmailJS credentials not configured" error?**
- Make sure `.env` file is in the project root (same level as `package.json`)
- Check that all three variables start with `VITE_`
- Restart dev server after creating/editing `.env`
- No spaces around the `=` sign

**Form submits but no email?**
- Check EmailJS dashboard → **Logs** (see if there are errors)
- Verify email service is connected properly
- Check spam folder
- Make sure template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`

**"Service not found" error?**
- Double-check Service ID is correct
- Make sure service is active in EmailJS dashboard

**"Template not found" error?**
- Double-check Template ID is correct
- Make sure template is saved and active

---

## 📧 EmailJS Free Tier Limits

- **200 emails per month** (free)
- Perfect for portfolio sites!
- Upgrade available if needed

---

## 🔒 Security Note

- Never commit `.env` file to Git (already in `.gitignore`)
- For production, add environment variables in your hosting platform:
  - Netlify: Site settings → Environment variables
  - Vercel: Project settings → Environment variables

---

## 🎉 You're Done!

Once you've added your credentials to `.env` and restarted the server, your contact form will work!

