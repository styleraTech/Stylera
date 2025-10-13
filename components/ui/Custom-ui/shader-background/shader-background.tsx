'use client'

import type React from 'react'
import { useEffect, useRef, useState, useMemo } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [mounted, setMounted] = useState(false) //  used for lazy mount

  //  Memoize the color array so it doesn’t trigger re-renders
  const colors = useMemo(
    () => ['#1e1d56', '#473367', '#7c3f98', '#46469d', '#3057a7'],
    []
  )

  useEffect(() => {
    // Lazy mount shader after page load
    const timeout = setTimeout(() => setMounted(true), 800) // delay in ms
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className='bg-[#1e1d56] relative overflow-hidden min-h-[90vh] sm:min-h-80'
    >
      {/* SVG Filters */}
      {/* <svg className='absolute inset-0 w-0 h-0'>
        <defs>
          <filter
            id='glass-effect'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feTurbulence baseFrequency='0.005' numOctaves='1' result='noise' />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='0.3' />
            <feColorMatrix
              type='matrix'
              values='1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0'
              result='tint'
            />
          </filter>

          <filter
            id='gooey-filter'
            x='-50%'
            y='-50%'
            width='200%'
            height='200%'
          >
            <feGaussianBlur in='SourceGraphic' stdDeviation='4' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 19 -9'
              result='gooey'
            />
            <feComposite in='SourceGraphic' in2='gooey' operator='atop' />
          </filter>
        </defs>
      </svg> */}

      {/* Background Shaders */}
      {mounted && (
        <MeshGradient
          className='absolute inset-0 w-full h-full'
          colors={colors}
          speed={isActive ? 0.25 : 0}
        />
      )}
      {/* <MeshGradient
        className='absolute inset-0 w-full h-full opacity-60'
        colors={['#1e1d56', '#473367', '#7c3f98', '#000000']}
        speed={0.18}
      /> */}

      {children}
    </div>
  )
}
