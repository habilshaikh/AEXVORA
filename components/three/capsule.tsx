'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

/**
 * A frosted-glass capsule that splits into a top and bottom half as the
 * user scrolls, revealing the product inside.
 */
export function Capsule() {
  const scroll = useScroll()
  const topRef = useRef<THREE.Group>(null)
  const bottomRef = useRef<THREE.Group>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const matsRef = useRef<THREE.MeshPhysicalMaterial[]>([])

  useFrame((state) => {
    const o = scroll.offset
    const open = THREE.MathUtils.smoothstep(o, 0.0, 0.16)
    const shift = open * 3.2
    if (topRef.current) topRef.current.position.y = shift
    if (bottomRef.current) bottomRef.current.position.y = -shift

    const opacity = (1 - open * 0.8) * (1 - THREE.MathUtils.smoothstep(o, 0.18, 0.3) * 0.9)
    for (const m of matsRef.current) {
      if (m) m.opacity = opacity
    }
    if (ringRef.current) {
      const mat = ringRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = (0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.25) * (1 - open)
    }
  })

  const glass = (i: number) => (
    <meshPhysicalMaterial
      ref={(el: THREE.MeshPhysicalMaterial | null) => {
        if (el) matsRef.current[i] = el
      }}
      transmission={0.92}
      thickness={0.6}
      roughness={0.22}
      ior={1.3}
      color={'#fff3e6'}
      transparent
      side={THREE.DoubleSide}
      envMapIntensity={1.5}
      clearcoat={1}
    />
  )

  return (
    <group>
      <group ref={topRef}>
        <mesh position={[0, 2.05, 0]} castShadow>
          <cylinderGeometry args={[1.5, 1.5, 2.1, 64, 1, true]} />
          {glass(0)}
        </mesh>
        <mesh position={[0, 3.1, 0]}>
          <sphereGeometry args={[1.5, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
          {glass(1)}
        </mesh>
      </group>

      <group ref={bottomRef}>
        <mesh position={[0, -2.05, 0]} castShadow>
          <cylinderGeometry args={[1.5, 1.5, 2.1, 64, 1, true]} />
          {glass(2)}
        </mesh>
        <mesh position={[0, -3.1, 0]}>
          <sphereGeometry
            args={[1.5, 48, 24, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]}
          />
          {glass(3)}
        </mesh>
      </group>

      {/* glowing seam ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.52, 0.02, 16, 80]} />
        <meshBasicMaterial color={'#ff7a1a'} transparent opacity={0.6} />
      </mesh>

      {/* pedestal */}
      <mesh position={[0, -3.55, 0]} receiveShadow>
        <cylinderGeometry args={[1.7, 1.95, 0.25, 64]} />
        <meshStandardMaterial color={'#e9e1d4'} roughness={0.5} metalness={0.2} />
      </mesh>
    </group>
  )
}
