"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Sphere, OrbitControls, useTexture } from "@react-three/drei"
import { Mesh, Vector3, Group, BufferGeometry, Float32BufferAttribute, PointsMaterial } from "three"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const VIENNA_LAT = 48.2082
const VIENNA_LON = 16.3738

function latLonToVector3(lat: number, lon: number, radius: number = 1.01) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = (radius * Math.sin(phi) * Math.sin(theta))
  const y = (radius * Math.cos(phi))
  
  return new Vector3(x, y, z)
}

function AdaptiveStars() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const starsRef = useRef<Mesh>(null!)
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.005
    }
  })

  const starsGeometry = useMemo(() => {
    const geometry = new BufferGeometry()
    const count = 600
    const vertices = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      vertices[i3 + 0] = (Math.random() - 0.5) * 20
      vertices[i3 + 1] = (Math.random() - 0.5) * 20
      vertices[i3 + 2] = (Math.random() - 0.5) * 20
    }
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))
    return geometry
  }, [])

  return (
    <points ref={starsRef} geometry={starsGeometry}>
      <pointsMaterial 
        size={0.02} 
        color={isDark ? "#ffffff" : "#1a1a1a"} 
        transparent 
        opacity={0.8} 
      />
    </points>
  )
}

function Globe() {
  const groupRef = useRef<Group>(null!)
  const earthTexture = useTexture('/earth.jpg')

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial map={earthTexture} />
      </Sphere>
      <ViennaMarker />
    </group>
  )
}

function ViennaMarker() {
  const viennaPosition = useMemo(() => 
    latLonToVector3(VIENNA_LAT, VIENNA_LON, 1.02), 
    []
  )
  
  const ringRef = useRef<Mesh>(null!)
  
  useFrame((state) => {
    if (ringRef.current) {
      const time = state.clock.elapsedTime
      ringRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.2)
      ringRef.current.rotation.z = time * 0.5
    }
  })
  
  return (
    <group position={viennaPosition}>
      <mesh>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshStandardMaterial 
          color="#ef4444" 
          emissive="#ef4444" 
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh ref={ringRef}>
        <ringGeometry args={[0.04, 0.06, 32]} />
        <meshBasicMaterial 
          color="#ef4444" 
          transparent 
          opacity={0.4}
        />
      </mesh>
      
      <Text
        position={[0.12, 0.12, 0]}
        fontSize={0.06}
        color="#ef4444"
        anchorX="left"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        Vienna
      </Text>
    </group>
  )
}

export default function Earth3D() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  
  return (
    <motion.div
      className="w-full h-[420px] rounded-xl overflow-hidden border bg-muted/30 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <pointLight position={[-1, -1, -1]} intensity={0.2} />
        <pointLight position={[1, 1, 1]} intensity={0.1} color="#4f46e5" />

        <AdaptiveStars />
        <Globe />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.3}
          minDistance={2.2}
          maxDistance={4}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
    </motion.div>
  )
}
