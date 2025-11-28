import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
      color: '#80A1C1',
    },
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Agile development approach ensuring rapid iteration and deployment.',
      color: '#A77E58',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions to problems.',
      color: '#B15F3B',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d3748]">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 bg-white rounded-3xl p-8 shadow-xl border-2 border-[#B7C2B6]"
          >
            <p className="text-lg text-[#2d3748] leading-relaxed font-medium">
              I'm an Electrical Engineering student at the University of Tennessee, Knoxville, with a
              minor in Computer Science. My passion lies at the intersection of hardware and software,
              where I can combine my engineering knowledge with programming skills to create innovative solutions.
            </p>
            <p className="text-lg text-[#2d3748] leading-relaxed font-medium">
              Through my studies and projects, I've developed expertise in full-stack development,
              working with modern frameworks and technologies. I'm particularly interested in building
              scalable applications that bridge the gap between electrical systems and software solutions.
            </p>
            <p className="text-lg text-[#2d3748] leading-relaxed font-medium">
              When I'm not studying or coding, you'll find me exploring new technologies, working on
              personal projects, or contributing to open-source initiatives that push the boundaries
              of what's possible in engineering and computer science.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#80A1C1]">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#80A1C1] mb-2">50+</div>
                  <div className="text-[#2d3748] font-semibold">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#A77E58] mb-2">3+</div>
                  <div className="text-[#2d3748] font-semibold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#B15F3B] mb-2">100%</div>
                  <div className="text-[#2d3748] font-semibold">Dedication</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#BA3F1D] mb-2">∞</div>
                  <div className="text-[#2d3748] font-semibold">Curiosity</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-2 border-transparent hover:border-[#A77E58] transition-all"
            >
              <div className="text-5xl mb-4" style={{ color: feature.color }}>{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-[#2d3748]">{feature.title}</h3>
              <p className="text-[#2d3748] font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
