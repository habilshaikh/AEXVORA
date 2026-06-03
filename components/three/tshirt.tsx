'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

function buildShirtShape() {
  const s = new THREE.Shape()
  s.moveTo(-0.34, 0.98)
  s.lineTo(-0.92, 1.02)
  s.lineTo(-1.72, 0.52)
  s.lineTo(-1.4, 0.16)
  s.lineTo(-0.96, 0.46)
  s.lineTo(-0.92, -1.42)
  s.quadraticCurveTo(0, -1.56, 0.92, -1.42)
  s.lineTo(0.96, 0.46)
  s.lineTo(1.4, 0.16)
  s.lineTo(1.72, 0.52)
  s.lineTo(0.92, 1.02)
  s.lineTo(0.34, 0.98)
  s.quadraticCurveTo(0, 0.72, -0.34, 0.98)
  return s
}

export function TShirt({ color = '#f4efe6' }: { color?: string }) {
  const group = useRef<THREE.Group>(null)
  const scroll = useScroll()

  const geometry = useMemo(() => {
    const shape = buildShirtShape()
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.42,
      bevelEnabled: true,
      bevelThickness: 0.12,
      bevelSize: 0.12,
      bevelSegments: 8,
      curveSegments: 24,
    })
    geo.center()
    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const o = scroll.offset
    const e = THREE.MathUtils.smoothstep(o, 0.05, 0.2)
    const t = state.clock.elapsedTime
    const s = 1.05 * e
    group.current.scale.set(s, s, s)
    group.current.rotation.y = Math.sin(t * 0.3) * 0.2 + o * Math.PI * 0.4
    group.current.position.y = (1 - e) * -1.6 + Math.sin(t * 0.8) * 0.06
    group.current.visible = e > 0.001
  })

  return (
    <group ref={group} scale={[0, 0, 0]}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color={color}
          roughness={0.78}
          metalness={0}
          sheen={1}
          sheenRoughness={0.6}
          sheenColor={'#ffb27a'}
          clearcoat={0.25}
          clearcoatRoughness={0.7}
          envMapIntensity={0.9}
        />
      </mesh>
    </group>
  )
}
