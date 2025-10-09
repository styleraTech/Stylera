'use client'

import { useLanguage } from '@/contexts/language-context'
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa'
import Link from 'next/link'
import InViewSection from './ui/Custom-ui/in-view-section'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'

export default function TeamSection() {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: language === 'ar' ? 'لاست هيرميس' : 'Last Hermis',
      position:
        language === 'ar'
          ? 'المالك لشركة Stylera Tech | مهندس برمجيات'
          : 'Owner of Stylera Tech | Software Engineer',
      image: '/images/Levi_(854).png',
      bio:
        language === 'ar'
          ? 'مؤسس شركة Stylera Tech ومهندس برمجيات ذو خبرة تزيد عن ست سنوات في تطوير البرمجيات المتقدمة.'
          : 'Founder of Stylera Tech and software engineer with over 6 years of experience building advanced digital solutions.',
      social: {
        linkedin: '#',
        github: '#',
      },
      role: 'owner',
    },
    {
      name: language === 'ar' ? 'ريـم عصام' : 'Reem Esam',
      position:
        language === 'ar'
          ? 'مصممة واجهات المستخدم وتجربة المستخدم'
          : 'UI/UX Designer',
      image: '/images/Reem.jpg',
      bio:
        language === 'ar'
          ? 'مصممة واجهات وتجارب مستخدم مبدعة تهتم بالتفاصيل وتجربة المستخدم المثالية.'
          : 'Creative UI/UX designer focused on delivering seamless and aesthetic user experiences.',
      social: {
        linkedin:
          'https://www.linkedin.com/in/reemesam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        behance: 'https://www.behance.net/reemesam2',
      },
      role: 'designer',
    },
    {
      name: language === 'ar' ? 'آلاء سي' : 'Alaa Sy',
      position:
        language === 'ar'
          ? 'مصممة واجهات المستخدم وتجربة المستخدم'
          : 'UI/UX Designer',
      image: '/images/Alaa.jpg',
      bio:
        language === 'ar'
          ? 'مصممة UX/UI بخبرة في تحويل الأفكار إلى تصاميم عملية وجذابة.'
          : 'Experienced UI/UX designer skilled in turning ideas into intuitive and engaging designs.',
      social: {
        linkedin: '#',
        behance: '#',
      },
      role: 'designer',
    },
    {
      name: language === 'ar' ? 'عبدالرحمن' : 'Abdulrahman Super',
      position: language === 'ar' ? 'مطور برمجيات' : 'Software Developer',
      image: '/images/Abdo.jpg',
      bio:
        language === 'ar'
          ? 'مطور برمجيات بخبرة في تقنيات متنوعة وتطبيقات الويب الحديثة.'
          : 'Software developer with experience in various technologies.',
      social: {
        linkedin: '#',
        github: '#',
      },
      role: 'developer',
    },
    {
      name: language === 'ar' ? 'ساجي محمد' : 'Saje Mohammed',
      position:
        language === 'ar' ? 'مطور واجهات أمامية' : 'Front-End Developer',
      image: '/images/Saje New.jpg',
      bio:
        language === 'ar'
          ? 'متخصص في تطوير الواجهات الأمامية باستخدام React و Next.js.'
          : 'Front-end developer specialist in React and Next.js.',
      social: {
        linkedin: 'https://www.linkedin.com/in/saje-mohammed-20783b299/',
        github: 'https://github.com/Saje0',
      },
      role: 'developer',
    },
  ]

  return (
    <InViewSection
      className='py-24 relative bg-card/10'
      variants={defaultContainerVariants}
    >
      <Div className='container mx-auto px-6'>
        {/* Section Header */}
        <Div
          className={`max-w-3xl mx-auto mb-20 text-center`}
          variants={itemVariants}
        >
          <H2
            className='text-4xl md:text-5xl font-light text-white mb-6'
            variants={textVariants}
          >
            <span className='font-medium ltr:instrument text-accent'>
              {t('team.title')}
            </span>
          </H2>
          <P
            className='text-lg text-white/70 font-light leading-relaxed'
            variants={textVariants}
          >
            {language === 'ar'
              ? 'تعرف على فريقنا المتميز من المصممين والمطورين المتحمسين لإنشاء حلول رقمية استثنائية'
              : 'Meet our talented team of designers and developers passionate about crafting exceptional digital solutions.'}
          </P>
        </Div>

        {/* Team Grid */}
        <Div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='group bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl'
            >
              {/* Profile Image */}
              <div className='relative mb-6 overflow-hidden rounded-xl'>
                <img
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              {/* Member Info */}
              <div
                className={`${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300'>
                  {member.name}
                </h3>
                <p className='text-accent text-sm font-medium mb-3'>
                  {member.position}
                </p>
                <p className='text-white/70 text-sm font-light leading-relaxed mb-6'>
                  {member.bio}
                </p>

                {/* Social Links */}
                <div
                  className={`flex gap-3 ${
                    language === 'ar' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {/* LinkedIn (common) */}
                  <a
                    href={member.social.linkedin}
                    className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
                  >
                    <FaLinkedin size={16} />
                  </a>

                  {/* Conditional Social Icons */}
                  {member.role === 'designer' && (
                    <a
                      href={member.social.behance}
                      className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
                    >
                      <FaBehance size={16} />
                    </a>
                  )}

                  {(member.role === 'developer' || member.role === 'owner') && (
                    <a
                      href={member.social.github}
                      className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
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
          <div className='bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-border rounded-2xl p-12 max-w-2xl mx-auto'>
            <h3 className='text-2xl md:text-3xl font-light text-white mb-6'>
              {language === 'ar' ? 'انضم إلى فريقنا' : 'Join Our Team'}
            </h3>
            <p className='text-white/70 font-light mb-8 leading-relaxed'>
              {language === 'ar'
                ? 'نحن دائماً نبحث عن المواهب المتميزة للانضمام إلى فريقنا. إذا كنت شغوفاً بالتكنولوجيا والابتكار، فنحن نود أن نسمع منك'
                : "We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you."}
            </p>
            <Link href='/join-our-team' className='inline-block'>
              <button className='px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:bg-primary/90 cursor-pointer'>
                {language === 'ar' ? 'تقدم الآن' : 'Apply Now'}
              </button>
            </Link>
          </div>
        </div>
      </Div>
    </InViewSection>
  )
}
