import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 2000 }) {
  const mesh = useRef()
  const light = useRef()

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 200 - 100
      const y = Math.random() * 200 - 100
      const z = Math.random() * 200 - 100

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle
      const t = (particle.time += speed)

      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * factor) * 0.5),
        y + Math.sin((t / 10) * factor) + (Math.cos(t * factor) * 0.5),
        z + Math.cos((t / 10) * factor)
      )

      const s = Math.cos(t)
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()

      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="#FF006E" />
      <pointLight position={[20, 20, 20]} distance={40} intensity={6} color="#3A86FF" />
      <pointLight position={[-20, -20, -20]} distance={40} intensity={6} color="#06FFA5" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial 
          color="#FF006E"
          emissive="#FF006E"
          emissiveIntensity={0.5}
        />
      </instancedMesh>
    </>
  )
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 30] }}>
        <Particles />
      </Canvas>
    </div>
  )
}

export default ParticleBackground

