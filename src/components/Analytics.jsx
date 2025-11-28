import { useEffect } from 'react'

// Google Analytics Component
const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    if (trackingId && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}');
      `
      document.head.appendChild(script2)

      return () => {
        // Cleanup
        document.head.removeChild(script1)
        document.head.removeChild(script2)
      }
    }
  }, [trackingId])

  return null
}

// Plausible Analytics (Privacy-friendly alternative)
const PlausibleAnalytics = ({ domain }) => {
  useEffect(() => {
    if (domain && typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.defer = true
      script.setAttribute('data-domain', domain)
      script.src = 'https://plausible.io/js/script.js'
      document.head.appendChild(script)

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      }
    }
  }, [domain])

  return null
}

// Main Analytics Component - Choose one or both
const Analytics = () => {
  // Get analytics IDs from environment variables
  const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID
  const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN

  return (
    <>
      {GA_TRACKING_ID && <GoogleAnalytics trackingId={GA_TRACKING_ID} />}
      {PLAUSIBLE_DOMAIN && <PlausibleAnalytics domain={PLAUSIBLE_DOMAIN} />}
    </>
  )
}

export default Analytics

