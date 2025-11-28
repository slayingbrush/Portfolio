#!/usr/bin/env node

/**
 * Environment Setup Helper
 * This script helps you set up your .env file interactively
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const envPath = path.join(__dirname, '.env')
const envExamplePath = path.join(__dirname, '.env.example')

// Create .env.example if it doesn't exist
const envExampleContent = `# EmailJS Configuration
# Get these from https://www.emailjs.com/
# See EMAILJS_SETUP.md for detailed instructions

VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here

# Google Analytics (Optional)
# Get your tracking ID from https://analytics.google.com/
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Plausible Analytics (Optional - Privacy-friendly alternative)
# Get your domain from https://plausible.io/
VITE_PLAUSIBLE_DOMAIN=yourdomain.com
`

if (!fs.existsSync(envExamplePath)) {
  fs.writeFileSync(envExamplePath, envExampleContent)
  console.log('✅ Created .env.example file')
}

// Create .env from .env.example if it doesn't exist
if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envExampleContent)
  console.log('✅ Created .env file from .env.example')
  console.log('\n📝 Next steps:')
  console.log('1. Open .env file in your editor')
  console.log('2. Replace the placeholder values with your actual EmailJS credentials')
  console.log('3. See EMAILJS_SETUP.md for detailed instructions')
  console.log('4. Restart your dev server after updating .env\n')
} else {
  console.log('ℹ️  .env file already exists')
  console.log('   If you need to update it, edit .env directly')
}

