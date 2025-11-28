import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

// Geometric shapes for modern aesthetic
const FloatingCube = ({ position, color, speed = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.4
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
    }
  })

  return (
    <Box ref={meshRef} position={position} args={[0.5, 0.5, 0.5]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0.3}
        metalness={0.5}
      />
    </Box>
  )
}

const GeometricScene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#80A1C1" />
      
      <FloatingCube position={[-2, 0, 0]} color="#80A1C1" speed={0.8} />
      <FloatingCube position={[2, 0, 0]} color="#A77E58" speed={1.2} />
      <FloatingCube position={[0, 2, -2]} color="#B15F3B" speed={1} />
      <FloatingCube position={[0, -2, 2]} color="#BA3F1D" speed={0.9} />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </>
  )
}

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <GeometricScene />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D9CFC1]/80 via-[#E4D9B6]/60 to-[#B7C2B6]/80 z-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Profile Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#80A1C1] via-[#A77E58] to-[#B15F3B] rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-[#EEE3AB] shadow-2xl">
                <img
                  src="/profile-image.jpg"
                  alt="Ahadum"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-[#80A1C1] to-[#A77E58] flex items-center justify-center">
                        <span class="text-6xl font-bold text-white">AH</span>
                      </div>
                    `
                  }}
                />
              </div>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full space-y-4"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-[#B7C2B6]">
                <p className="text-[#A77E58] font-semibold text-sm uppercase tracking-wide">Location</p>
                <p className="text-[#2d3748] font-bold text-lg">Knoxville, TN</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-[#80A1C1]">
                <p className="text-[#80A1C1] font-semibold text-sm uppercase tracking-wide">Education</p>
                <p className="text-[#2d3748] font-bold text-lg">UTK • EE Student</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-4 text-[#2d3748]"
              >
                Engineering & CS
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-2xl md:text-3xl font-semibold mb-6 text-[#A77E58]"
              >
                Electrical Engineering Student | CS Minor
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-xl text-[#2d3748] mb-8 max-w-xl leading-relaxed"
              >
                University of Tennessee, Knoxville | Building innovative solutions at the intersection of hardware and software
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex justify-center md:justify-start space-x-6 mb-8"
              >
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-[#80A1C1] flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ahadum"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-[#A77E58] flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:amengesh@vols.utk.edu"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-[#B15F3B] flex items-center justify-center text-white text-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <FaEnvelope />
                </motion.a>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#80A1C1] via-[#A77E58] to-[#B15F3B] rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-[#B15F3B]/50 transition-all"
              >
                <span>Explore My Work</span>
                <FaArrowDown className="animate-bounce" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
