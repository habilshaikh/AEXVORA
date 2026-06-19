'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// 1. Digital Ocean (Flowing Particle Wave)
function DataOcean() {
  const ref = useRef<THREE.Points>(null!)
  const count = 60 // 60x60 = 3600 points (extremely fast for mobile)
  const sep = 1.5
  
  const positions = useMemo(() => {
    let pos = []
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2)
        let z = sep * (zi - count / 2)
        pos.push(x, 0, z)
      }
    }
    return new Float32Array(pos)
  }, [count, sep])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    let i = 0
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        // Pure math for wave effect - zero lag
        pos[i + 1] = Math.sin((xi + t) * 0.2) * 1.5 + Math.cos((zi + t) * 0.15) * 1.5
        i += 3
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref} position={[0, -12, -20]} rotation={[Math.PI / 8, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#06b6d4" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// 2. Neural Swarm (Swarming Constellation)
function ConstellationSwarm() {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const count = 300
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const radius = 3 + Math.random() * 8
      const speed = 0.1 + Math.random() * 0.2
      const yOffset = -8 + Math.random() * 16
      temp.push({ t, radius, speed, yOffset })
    }
    return temp
  }, [count])

  useFrame((state, delta) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    particles.forEach((particle, i) => {
      particle.t += particle.speed * delta
      const angle = particle.t
      const x = Math.cos(angle) * particle.radius
      const z = Math.sin(angle) * particle.radius
      const y = particle.yOffset + Math.sin(time + particle.radius) * 1.5
      
      dummy.position.set(x, y, z)
      const scale = 0.3 + Math.sin(time * 2 + i) * 0.2
      dummy.scale.set(scale, scale, scale)
      dummy.rotation.x += delta
      dummy.rotation.y += delta
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
    meshRef.current.rotation.y = time * 0.05
    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.1
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} position={[4, 0, -12]}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.6} />
    </instancedMesh>
  )
}

// 3. Abstract Geometry Core
function AbstractCore() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 1.5
    }
  })

  return (
    <group ref={groupRef} position={[4, 0, -12]}>
      <mesh>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial color="#020617" />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[2.8, 1]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.4} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[3.8, 2]} />
        <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

function AnimatedBackground() {
  const bgRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    // Smooth mouse parallax effect
    if (bgRef.current) {
      const targetX = state.pointer.x * 3
      const targetY = state.pointer.y * 3
      bgRef.current.position.x += (targetX - bgRef.current.position.x) * delta * 2
      bgRef.current.position.y += (targetY - bgRef.current.position.y) * delta * 2
    }
  })

  return (
    <group ref={bgRef}>
      <Stars radius={100} depth={50} count={3000} factor={6} saturation={1} fade speed={1} />
      <Sparkles count={200} scale={40} size={2} speed={0.5} opacity={0.4} color="#8b5cf6" />
      <DataOcean />
      <AbstractCore />
      <ConstellationSwarm />
    </group>
  )
}

export function Experience() {
  return (
    <div className="pointer-events-none fixed inset-0 h-[100dvh] w-full bg-black text-white">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 1, 11], fov: 38 }}
      >
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[-10, 10, -5]} intensity={2} color="#ffffff" />
        
        <AnimatedBackground />
      </Canvas>
    </div>
  )
}
