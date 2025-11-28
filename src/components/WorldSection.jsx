import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const WorldSection = ({ sectionId, isActive, onClose, children }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (isActive && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [isActive])

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          ref={sectionRef}
          id={sectionId}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen flex items-center justify-center py-20 px-4"
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white transition-colors shadow-lg flex items-center space-x-2"
              aria-label="Back to World"
            >
              <FaTimes />
              <span className="text-sm hidden sm:inline">Back to World</span>
            </motion.button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WorldSection

