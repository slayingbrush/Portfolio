import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Float, Html, Environment, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

// Floating Island Component
const FloatingIsland = ({ position, section, onClick, isActive, color }) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })

  return (
    <group position={position} ref={meshRef}>
      {/* Base Platform */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
        receiveShadow
        castShadow
      >
        <cylinderGeometry args={[2, 2.5, 0.5, 32]} />
        <meshStandardMaterial
          color={isActive ? color : hovered ? '#8b5cf6' : '#4a5568'}
          metalness={0.3}
          roughness={0.4}
          emissive={isActive ? color : '#000000'}
          emissiveIntensity={isActive ? 0.5 : 0}
        />
      </mesh>
      
      {/* Top Platform */}
      <mesh position={[0, 0.3, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.8, 2, 0.2, 32]} />
        <meshStandardMaterial
          color={isActive ? color : '#2d3748'}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Glowing Ring */}
      {isActive && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.4, 0]}>
          <torusGeometry args={[2.2, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1}
          />
        </mesh>
      )}

      {/* Section Label */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          color={isActive ? '#ffffff' : '#9ca3af'}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {section.name}
        </Text>
      </Float>

      {/* Icon/Visual Element */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  )
}

// Portal Component for Navigation
const Portal = ({ position, targetSection, onClick }) => {
  const portalRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={portalRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <torusGeometry args={[1, 0.1, 16, 100]} />
        <meshStandardMaterial
          color={hovered ? '#ec4899' : '#6366f1'}
          emissive={hovered ? '#ec4899' : '#6366f1'}
          emissiveIntensity={hovered ? 1.5 : 0.8}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[1.8, 1.8]} />
        <meshStandardMaterial
          color="#000000"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

// Central Hub
const CentralHub = ({ position }) => {
  const hubRef = useRef()

  useFrame((state) => {
    if (hubRef.current) {
      hubRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group position={position} ref={hubRef}>
      {/* Main Platform */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[4, 5, 1, 64]} />
        <meshStandardMaterial
          color="#1a202c"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Glowing Core */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Floating Rings */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, i * (Math.PI / 3)]}
          position={[0, 0.5 + i * 0.3, 0]}
        >
          <torusGeometry args={[2 + i * 0.5, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      <Text
        position={[0, 2.5, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff"
      >
        Portfolio Hub
      </Text>
    </group>
  )
}

// Particle System for Ambiance
const WorldParticles = () => {
  const particlesRef = useRef()
  const count = 500

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#6366f1" transparent opacity={0.6} />
    </points>
  )
}

// Main World Scene
const WorldScene = ({ sections, activeSection, onSectionClick, onPortalClick }) => {
  const { camera } = useThree()

  // Position sections in a circle around the hub
  const sectionPositions = sections.map((section, index) => {
    const angle = (index / sections.length) * Math.PI * 2
    const radius = 12
    return [
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius
    ]
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#6366f1" />
      <pointLight position={[0, -10, 0]} intensity={0.3} color="#8b5cf6" />

      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

      <CentralHub position={[0, 0, 0]} />

      {sections.map((section, index) => (
        <FloatingIsland
          key={section.id}
          position={sectionPositions[index]}
          section={section}
          onClick={() => onSectionClick(section.id)}
          isActive={activeSection === section.id}
          color={section.color}
        />
      ))}

      {/* Portals between sections */}
      {sections.map((section, index) => {
        if (index < sections.length - 1) {
          const midAngle = ((index + 0.5) / sections.length) * Math.PI * 2
          const radius = 6
          const portalPos = [
            Math.cos(midAngle) * radius,
            2,
            Math.sin(midAngle) * radius
          ]
          return (
            <Portal
              key={`portal-${index}`}
              position={portalPos}
              targetSection={sections[index + 1].id}
              onClick={() => onPortalClick(sections[index + 1].id)}
            />
          )
        }
        return null
      })}

      <WorldParticles />
      <FloatingOrbs />
    </>
  )
}

// Floating Orbs for Ambiance
const FloatingOrbs = () => {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 30,
      Math.random() * 10 + 5,
      (Math.random() - 0.5) * 30
    ],
    color: ['#6366f1', '#8b5cf6', '#ec4899', '#10b981'][i % 4],
    speed: 0.5 + Math.random() * 0.5
  }))

  return (
    <>
      {orbs.map((orb, i) => (
        <FloatingOrb key={i} position={orb.position} color={orb.color} speed={orb.speed} />
      ))}
    </>
  )
}

const FloatingOrb = ({ position, color, speed }) => {
  const orbRef = useRef()

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 2
      orbRef.current.rotation.x = state.clock.elapsedTime * speed
      orbRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
    }
  })

  return (
    <mesh ref={orbRef} position={position}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

// Main World Component
const World3D = ({ onSectionSelect, onBackToHero }) => {
  const [activeSection, setActiveSection] = useState(null)
  const [showUI, setShowUI] = useState(true)

  const sections = [
    { id: 'about', name: 'About', color: '#6366f1' },
    { id: 'skills', name: 'Skills', color: '#8b5cf6' },
    { id: 'projects', name: 'Projects', color: '#ec4899' },
    { id: 'linkedin', name: 'Posts', color: '#10b981' },
    { id: 'contact', name: 'Contact', color: '#f59e0b' },
  ]

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId)
    onSectionSelect(sectionId)
    setShowUI(false)
  }

  const handlePortalClick = (sectionId) => {
    handleSectionClick(sectionId)
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 15, 25], fov: 60 }}
        shadows
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <WorldScene
            sections={sections}
            activeSection={activeSection}
            onSectionClick={handleSectionClick}
            onPortalClick={handlePortalClick}
          />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={10}
            maxDistance={50}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>

      {/* UI Overlay */}
      {showUI && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="bg-black/60 backdrop-blur-md rounded-lg p-6 border border-indigo-500/30">
            <p className="text-white text-center mb-2 text-sm font-semibold">
              🌍 Welcome to My Interactive Portfolio World
            </p>
            <p className="text-gray-400 text-center text-xs">
              Click on floating islands to explore sections • Drag to rotate • Scroll to zoom • Use portals to travel
            </p>
          </div>
        </motion.div>
      )}

      {/* Section Navigation Mini-Map */}
      <div className="absolute top-20 right-4 z-10">
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 border border-indigo-500/30 shadow-xl">
          {onBackToHero && (
            <button
              onClick={onBackToHero}
              className="w-full mb-3 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded text-xs text-white font-semibold transition-all transform hover:scale-105"
            >
              ← Back to Home
            </button>
          )}
          <p className="text-white text-xs mb-3 font-semibold uppercase tracking-wider">Quick Navigation</p>
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`block w-full text-left px-3 py-2 rounded text-xs transition-all transform hover:scale-105 ${
                  activeSection === section.id
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: section.color }}
                  ></span>
                  <span>{section.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default World3D

