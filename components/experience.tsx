'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll, Preload, Loader } from '@react-three/drei'
import { Scene } from './three/scene'
import { Overlay } from './overlay'

export function Experience() {
  return (
    <>
      <div className="fixed inset-0 h-screen w-full bg-espresso">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          camera={{ position: [0, 1, 11], fov: 38 }}
        >
          <color attach="background" args={['#181109']} />
          <Suspense fallback={null}>
            <ScrollControls pages={6.5} damping={0.28}>
              <Scene />
              <Scroll html style={{ width: '100%' }}>
                <Overlay />
              </Scroll>
            </ScrollControls>
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
      <Loader
        containerStyles={{ background: '#181109' }}
        barStyles={{ background: '#ff7a1a' }}
        dataStyles={{ color: '#f1e9da', fontFamily: 'var(--font-geist)' }}
        dataInterpolation={(p) => `Initializing AETHER ${p.toFixed(0)}%`}
      />
    </>
  )
}
