'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useLanguage } from '@/contexts/language-context'
import {
  Div,
  H2,
  P,
  defaultContainerVariants,
  itemVariants,
  textVariants,
} from '@/constants/animation'
import InViewSection from '@/components/ui/Custom-ui/in-view-section'
import JoinTeamForm from '@/components/join-our-team/join-form'

export default function JoinOurTeamPage() {
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <div className='relative z-10'>
      <Navigation />

      <InViewSection
        className='container mx-auto px-6 py-20'
        variants={defaultContainerVariants}
      >
        <Div
          className='max-w-3xl mx-auto bg-card/10 border border-border rounded-2xl p-10 backdrop-blur-md'
          variants={defaultContainerVariants}
        >
          {/* Header */}
          <Div className='text-center mb-8' variants={itemVariants}>
            <H2
              className='text-3xl font-semibold text-accent mb-4'
              variants={textVariants}
            >
              {isArabic ? 'انضم إلى فريقنا' : 'Join Our Team'}
            </H2>
            <P
              className='text-white/70 leading-relaxed'
              variants={textVariants}
            >
              {isArabic
                ? 'نبحث عن مطورين ومصممين موهوبين في مجالات الواجهة الأمامية والخلفية والتصميم وغير ذلك. قدم طلبك الآن.'
                : "We're looking for talented developers and designers across frontend, backend, and UI/UX. Apply below!"}
            </P>
          </Div>
          {/* Join Form */}
          <JoinTeamForm />
        </Div>
      </InViewSection>

      <Footer />
    </div>
  )
}
