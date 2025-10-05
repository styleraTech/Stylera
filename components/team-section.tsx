'use client'

import { useLanguage } from '@/contexts/language-context'
import { Linkedin, Github, Twitter } from 'lucide-react'

export default function TeamSection() {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed',
      position:
        language === 'ar'
          ? 'المدير التنفيذي ومطور الواجهات الأمامية'
          : 'CEO & Frontend Developer',
      image: '/professional-male-developer.png',
      bio:
        language === 'ar'
          ? 'خبير في تطوير الواجهات الأمامية مع أكثر من 8 سنوات من الخبرة في React و Next.js'
          : 'Frontend expert with 8+ years of experience in React and Next.js development',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: language === 'ar' ? 'فاطمة علي' : 'Fatima Ali',
      position:
        language === 'ar' ? 'مطورة الواجهات الخلفية' : 'Backend Developer',
      image: '/professional-female-developer.png',
      bio:
        language === 'ar'
          ? 'متخصصة في تطوير الأنظمة الخلفية وقواعد البيانات مع خبرة واسعة في Node.js و Python'
          : 'Backend systems specialist with extensive experience in Node.js and Python',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: language === 'ar' ? 'عمر حسن' : 'Omar Hassan',
      position: language === 'ar' ? 'مصمم UI/UX' : 'UI/UX Designer',
      image: '/professional-male-designer.png',
      bio:
        language === 'ar'
          ? 'مصمم إبداعي يركز على تجربة المستخدم مع خبرة في Figma و Adobe Creative Suite'
          : 'Creative designer focused on user experience with expertise in Figma and Adobe Creative Suite',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      name: language === 'ar' ? 'سارة أحمد' : 'Sara Ahmed',
      position:
        language === 'ar' ? 'مطورة تطبيقات الجوال' : 'Mobile App Developer',
      image: '/professional-female-mobile-developer-portrait.jpg',
      bio:
        language === 'ar'
          ? 'خبيرة في تطوير تطبيقات الجوال باستخدام React Native و Flutter'
          : 'Mobile development expert specializing in React Native and Flutter applications',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
  ]

  return (
    <section className='py-24 relative bg-card/10'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto mb-20 text-center`}>
          <h2 className='text-4xl md:text-5xl font-light text-white mb-6'>
            <span className='font-medium ltr:instrument text-accent'>
              {t('team.title')}
            </span>
          </h2>
          <p className='text-lg text-white/70 font-light leading-relaxed'>
            {language === 'ar'
              ? 'تعرف على فريقنا المتميز من المطورين والمصممين المتحمسين لإنشاء حلول رقمية استثنائية'
              : 'Meet our exceptional team of developers and designers passionate about creating outstanding digital solutions'}
          </p>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
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
                  <a
                    href={member.social.linkedin}
                    className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.social.github}
                    className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300'
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className='mt-20 text-center'>
          <div className='bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-border rounded-2xl p-12 max-w-2xl mx-auto'>
            <h3 className='text-2xl md:text-3xl font-light text-white mb-6'>
              {language === 'ar' ? 'انضم إلى فريقنا' : 'Join Our Team'}
            </h3>
            <p className='text-white/70 font-light mb-8 leading-relaxed'>
              {language === 'ar'
                ? 'نحن دائماً نبحث عن المواهب المتميزة للانضمام إلى فريقنا. إذا كنت شغوفاً بالتكنولوجيا والابتكار، فنحن نود أن نسمع منك'
                : "We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you"}
            </p>
            <button className='px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base transition-all duration-300 hover:bg-primary/90 cursor-pointer'>
              {language === 'ar' ? 'تقدم الآن' : 'Apply Now'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
