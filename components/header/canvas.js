// Derived from https://codesandbox.io/s/108u5
import * as THREE from 'three'
import gsap from 'gsap'
import React, { Suspense, useEffect, useMemo, useRef } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'
import usePrefersMotion from '../../lib/use-prefers-motion'
import { Canvas, useFrame } from 'react-three-fiber'
import { Environment } from '@react-three/drei'

function Text({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1,
  color = '#000000',
  i,
  ...props
}) {
  const font = useLoader(THREE.FontLoader, '/bold.blob')
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 10,
      curveSegments: 30,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 4,
      bevelOffset: 0.3,
      bevelSegments: 10,
    }),
    [font],
  )
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x +=
        hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y +=
        vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children],
  )

  const prefersMotion = usePrefersMotion()

  useEffect(() => {
    if (!prefersMotion) return
    gsap.to(mesh.current.rotation, {
      x: 0,
      ease: 'power3.inOut',
      delay: 0.8 + i * 0.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    })
  }, [prefersMotion])

  return (
    <>
      <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
        <mesh
          ref={mesh}
          rotation={[Math.PI * 0.5, 0, 0]}
          receiveShadow
          castShadow
        >
          <textBufferGeometry args={[children, config]} />
          <meshStandardMaterial
            attach="material"
            metalness={0.2}
            roughness={0.3}
            color="#E32310"
          />
        </mesh>
      </group>
    </>
  )
}

const { PI, sin, cos } = Math

const Letter = ({ i, count, radius, l }) => {
  const $ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
  })
  return (
    <group ref={$ref} rotation={[0, 0, 0]}>
      <Text
        hAlign="center"
        position={[
          radius * sin((i / count) * PI * 2),
          radius * cos((i / count) * PI * 2),
          0,
        ]}
        rotation={[0, 0, (-i / count) * PI * 2]}
        i={i}
        children={l}
      />
    </group>
  )
}

const Magic = ({ text, count, radius, start = 0, position }) => {
  const $ref = useRef()
  const prefersMotion = usePrefersMotion()

  useEffect(() => {
    if (!prefersMotion) return
    gsap.to($ref.current.rotation, {
      duration: 6,
      z: PI * 0.3 + PI * 2,
      repeat: -1,
      ease: 'power3.inOut',
    })
  }, [prefersMotion])

  return (
    <group ref={$ref} position={position} rotation={[0, 0, PI * 0.3]}>
      {text.split('').map((l, i) => (
        <Letter key={`1${i}`} l={l} radius={radius} i={i} count={count} />
      ))}
    </group>
  )
}

const HeaderCanvas = () => {
  return (
    <Canvas
      colorManagement
      orthographic
      camera={{ zoom: 20, position: [0, -50, 30] }}
      aria-hidden
    >
      <directionalLight position={[-20, 10, 20]} color="#69A5A8" />
      <directionalLight position={[20, -10, -3]} color="#69A5A8" />
      <ambientLight color="#E5663B" />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <Magic text={'ONE MORE YEAR'} count={14} radius={15} />
        {/* <Magic text={"YEAR"} start={Math.PI * 1.18} count={4} radius={8} /> */}
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  )
}

export default HeaderCanvas
