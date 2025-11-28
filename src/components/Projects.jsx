import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-[#80A1C1] to-[#B7C2B6]',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable chat application using WebSockets with real-time messaging, file sharing, and group chat capabilities.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-[#A77E58] to-[#C0A78D]',
    },
    {
      title: 'Machine Learning Dashboard',
      description: 'Interactive dashboard for visualizing ML model performance with real-time data processing and analytics.',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-[#B15F3B] to-[#A77E58]',
    },
    {
      title: 'Cloud Infrastructure Manager',
      description: 'DevOps tool for managing cloud resources across multiple providers with automated scaling and monitoring.',
      technologies: ['Python', 'AWS', 'Kubernetes', 'Terraform'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-[#BA3F1D] to-[#B15F3B]',
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology with smart contracts and decentralized storage.',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-[#EEE3AB] to-[#E4D9B6]',
    },
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform with AI-driven insights, predictive modeling, and automated reporting.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
      github: 'https://github.com',
      demo: 'https://example.com',
      color: 'from-[#80A1C1] to-[#A77E58]',
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 relative bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d3748]">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#B7C2B6] hover:border-[#A77E58] transition-all duration-300 ease-out group hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className={`w-full h-40 rounded-xl mb-4 bg-gradient-to-br ${project.color} opacity-100 group-hover:opacity-100 transition-opacity shadow-lg`}></div>
              <h3 className="text-2xl font-bold mb-3 text-[#2d3748] group-hover:text-[#A77E58] transition-colors">{project.title}</h3>
              <p className="text-[#2d3748] mb-4 text-base leading-relaxed font-medium">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 text-sm bg-[#EEE3AB] text-[#2d3748] rounded-full border-2 border-[#E4D9B6] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 text-[#80A1C1] hover:text-[#A77E58] transition-colors font-bold"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-base">Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-2 text-[#B15F3B] hover:text-[#BA3F1D] transition-colors font-bold"
                >
                  <FaExternalLinkAlt className="text-xl" />
                  <span className="text-base">Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

