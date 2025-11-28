import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials not configured. Please check your .env file.')
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'amengesh@vols.utk.edu', // Your email
        },
        publicKey
      )

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or email me directly at amengesh@vols.utk.edu',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'amengesh@vols.utk.edu', link: 'mailto:amengesh@vols.utk.edu' },
    { icon: <FaMapMarkerAlt />, text: 'Knoxville, TN', link: null },
    { icon: <FaMapMarkerAlt />, text: 'University of Tennessee, Knoxville', link: null },
  ]

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com', name: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com/in/ahadum', name: 'LinkedIn' },
    { icon: <FaTwitter />, link: 'https://twitter.com', name: 'Twitter' },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4 relative bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d3748]">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#80A1C1]">
              <h3 className="text-3xl font-bold mb-6 text-[#2d3748]">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="text-3xl" style={{ color: ['#80A1C1', '#A77E58', '#B15F3B'][index] }}>{info.icon}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#2d3748] hover:text-[#A77E58] transition-colors font-bold text-lg"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-[#2d3748] font-bold text-lg">{info.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#A77E58] mt-8">
              <h3 className="text-3xl font-bold mb-6 text-[#2d3748]">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-3xl transition-colors"
                    style={{ color: ['#80A1C1', '#A77E58', '#B15F3B'][index] }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#B15F3B]"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#2d3748] mb-2 font-bold text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-[#B7C2B6] rounded-xl text-[#2d3748] focus:outline-none focus:border-[#80A1C1] transition-colors font-medium"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#2d3748] mb-2 font-bold text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-[#B7C2B6] rounded-xl text-[#2d3748] focus:outline-none focus:border-[#A77E58] transition-colors font-medium"
                  placeholder="amengesh@vols.utk.edu"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#2d3748] mb-2 font-bold text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white border-2 border-[#B7C2B6] rounded-xl text-[#2d3748] focus:outline-none focus:border-[#B15F3B] transition-colors resize-none font-medium"
                  placeholder="Your Message"
                />
              </div>
              {submitStatus.message && (
                <div
                  className={`p-4 rounded-xl font-semibold ${
                    submitStatus.type === 'success'
                      ? 'bg-[#EEE3AB] text-[#2d3748] border-2 border-[#A77E58]'
                      : 'bg-red-100 text-red-800 border-2 border-red-300'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full px-8 py-4 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] rounded-xl text-white font-bold text-lg hover:shadow-2xl transition-all ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16 text-gray-500"
      >
        <p>© 2024 Professional Portfolio. Built with React & Three.js</p>
      </motion.div>
    </section>
  )
}

export default Contact

