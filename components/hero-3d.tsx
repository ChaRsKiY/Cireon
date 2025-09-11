"use client"

import { Suspense, useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, Html, Lightformer, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.25
    meshRef.current.rotation.y += delta * 0.18
  })
  const material = useMemo(() => new THREE.MeshStandardMaterial({ color: new THREE.Color("#8b5cf6"), roughness: 0.2, metalness: 0.6 }), [])
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={[1.1, 1.1, 1.1]}>
        <torusKnotGeometry args={[1.2, 0.35, 180, 24]} />
        <primitive object={material} attach="material" />
      </mesh>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 2]}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <Suspense fallback={null}>
          <RotatingTorus />
          <Environment preset="city">
            <Lightformer intensity={1} color="#8b5cf6" position={[0, 2, 4]} scale={[4, 2, 1]} />
          </Environment>
        </Suspense>
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </div>
  )
}


