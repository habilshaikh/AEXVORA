'use client'

import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import {
  useScroll,
  Environment,
  Lightformer,
  ContactShadows,
  Float,
} from '@react-three/drei'
import * as THREE from 'three'
import { Capsule } from './capsule'
import { TShirt } from './tshirt'
import { DustParticles } from './particles'

function Rig() {
  const scroll = useScroll()
  const { camera, scene } = useThree()
  const target = useMemo(() => new THREE.Vector3(), [])
  const dark = useMemo(() => new THREE.Color('#181109'), [])
  const cream = useMemo(() => new THREE.Color('#f1e9da'), [])
  const tmp = useMemo(() => new THREE.Color(), [])

  useFrame(() => {
    const o = scroll.offset

    // cinematic orbit: ~1.3 rotations, dolly in around the middle
    const angle = o * Math.PI * 2 * 1.3
    const radius = 8.2 - Math.sin(o * Math.PI) * 2.6
    const height = 0.6 + Math.sin(o * Math.PI * 2) * 1.1 + o * 0.6

    target.set(Math.sin(angle) * radius, height, Math.cos(angle) * radius)
    camera.position.lerp(target, 0.06)
    camera.lookAt(0, 0.2, 0)

    // background + fog lerp from dark luxury to cream studio
    const bgT = THREE.MathUtils.smoothstep(o, 0.32, 0.82)
    tmp.copy(dark).lerp(cream, bgT)
    scene.background = tmp.clone()
    if (scene.fog) (scene.fog as THREE.Fog).color.copy(tmp)
  })

  return null
}

export function Scene() {
  return (
    <>
      <fog attach="fog" args={['#181109', 12, 30]} />
      <Rig />

      <ambientLight intensity={0.35} />
      <spotLight
        position={[6, 10, 6]}
        angle={0.4}
        penumbra={1}
        intensity={120}
        color={'#fff1dd'}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight
        position={[-8, 4, -4]}
        angle={0.5}
        penumbra={1}
        intensity={60}
        color={'#ff9d4d'}
      />
      <pointLight position={[0, 1, 0]} intensity={8} color={'#ffb066'} distance={8} />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Capsule />
        <TShirt />
      </Float>

      <DustParticles />

      <ContactShadows
        position={[0, -3.7, 0]}
        opacity={0.5}
        scale={18}
        blur={2.8}
        far={8}
        color={'#3a2a18'}
      />

      {/* Environment built from lightformers — no external assets, real reflections */}
      <Environment resolution={256}>
        <Lightformer
          intensity={2.2}
          position={[0, 4, -6]}
          scale={[10, 6, 1]}
          color={'#fff4e6'}
        />
        <Lightformer
          intensity={1.4}
          position={[-5, 2, 2]}
          scale={[6, 6, 1]}
          color={'#ffd9a8'}
        />
        <Lightformer
          intensity={1.0}
          position={[5, -2, 3]}
          scale={[6, 6, 1]}
          color={'#ffae66'}
        />
        <Lightformer
          intensity={1.6}
          position={[0, -5, -2]}
          scale={[10, 4, 1]}
          color={'#ffffff'}
        />
      </Environment>
    </>
  )
}
