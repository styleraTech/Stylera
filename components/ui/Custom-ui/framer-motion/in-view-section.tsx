'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  containerFromTop,
  defaultContainerVariants,
} from '@/constants/animation'

const InViewSection: React.FC<
  React.ComponentPropsWithRef<typeof motion.section> & {
    containerVariants?: 'come-from-top'
  }
> = ({
  variants,
  initial = 'hidden',
  animate = 'visible',
  containerVariants,
  ...props
}) => {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  })

  return (
    <motion.section
      ref={ref}
      variants={
        variants ||
        (containerVariants === 'come-from-top'
          ? containerFromTop
          : defaultContainerVariants)
      }
      initial={initial}
      animate={isInView ? animate : initial}
      {...props}
    />
  )
}

export default InViewSection
