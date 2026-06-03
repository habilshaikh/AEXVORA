'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function DustParticles({ count = 700 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22
      speeds[i] = 0.05 + Math.random() * 0.12
    }
    return { positions, speeds }
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    const arr = ref.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * delta
      arr[i * 3] += Math.sin(state.clock.elapsedTime * 0.2 + i) * delta * 0.04
      if (arr[i * 3 + 1] > 8) arr[i * 3 + 1] = -8
    }
    ref.current.geometry.attributes.position.needsUpdate = true
    ref.current.rotation.y += delta * 0.01
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={'#ffd9b0'}
        transparent
        opacity={0.55}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
