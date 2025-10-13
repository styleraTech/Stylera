'use client'

import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import InViewSection from '../ui/Custom-ui/framer-motion/in-view-section'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
interface TeamSectionProps {
  dictionary?: Dictionary['teamSection']
}

export default function TeamSection({ dictionary }: TeamSectionProps) {
  const team = dictionary?.team
  if (!team) return null

  return (
    <InViewSection
      className='py-24 relative bg-card/10'
      variants={defaultContainerVariants}
    >
      <Div className='container mx-auto px-6'>
        {/* Section Header */}
        <Div
          className='max-w-3xl mx-auto mb-20 text-center'
          variants={itemVariants}
        >
          <H2
            className='text-4xl md:text-5xl font-light text-white mb-6'
            variants={textVariants}
          >
            <span className='font-medium ltr:instrument text-accent'>
              {team.title}
            </span>
          </H2>
          <P
            className='text-lg text-white/70 font-light leading-relaxed'
            variants={textVariants}
          >
            {team.description}
          </P>
        </Div>

        {/* Team Members Grid */}
        <Div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {team.members.map((member, index) => (
            <div
              key={index}
              className='group will-change-transform bg-card/40 border border-border rounded-2xl p-6 flex flex-col 
              hover:bg-card/50 transition-transform duration-300 ease-out
              hover:scale-[1.03] hover:shadow-xl'
            >
              {/* Profile Image */}
              <div className='relative mb-6 overflow-hidden rounded-xl'>
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  width={400}
                  height={400}
                  className='w-full h-64 object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110'
                  priority={index < 2}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out will-change-transform' />
              </div>

              {/* Member Info */}
              <div className='flex flex-col flex-1'>
                <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300 ease-out'>
                  {member.name}
                </h3>
                <p className='text-accent text-sm font-medium mb-3'>
                  {member.position}
                </p>
                <p className='text-white/70 text-sm font-light leading-relaxed mb-6 flex-1 min-h-[4.5rem]'>
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className='flex gap-3'>
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-colors duration-300 ease-out'
                    >
                      <FaLinkedin size={16} />
                    </a>
                  )}
                  {member.social.behance && (
                    <a
                      href={member.social.behance}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-colors duration-300 ease-out'
                    >
                      <FaBehance size={16} />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-colors duration-300 ease-out'
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Div>

        {/* Join Team CTA */}
        <div className='mt-20 text-center'>
          <div className='bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-12 max-w-2xl mx-auto will-change-transform'>
            <h3 className='text-2xl md:text-3xl font-light text-white mb-6'>
              {team.join_title}
            </h3>
            <p className='text-white/70 font-light mb-8 leading-relaxed'>
              {team.join_description}
            </p>
            <Link href='/join-our-team' className='inline-block'>
              <button className='px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base transition-colors duration-300 ease-out hover:bg-primary/90 cursor-pointer will-change-transform'>
                {team.apply_button}
              </button>
            </Link>
          </div>
        </div>
      </Div>
    </InViewSection>
  )
}
