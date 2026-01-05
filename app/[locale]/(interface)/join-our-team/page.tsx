import Navigation from '@/components/layout/navigation'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import JoinOurTeam from '@/components/join-our-team/join-our-team'
import { Metadata } from 'next'
// import ShaderBackground from '@/components/shader-background'

export const metadata: Metadata = {
  title: 'Join Our Team | StyleraTech',
  description:
    'Join the StyleraTech family! We’re looking for creative and passionate developers, designers, and thinkers to help shape the future of digital experiences.',
  openGraph: {
    title: 'Join Our Team | StyleraTech',
    description:
      'Join the StyleraTech family! We’re looking for creative and passionate developers, designers, and thinkers to help shape the future of digital experiences.',
    url: 'https://styleratech.com/en/join-our-team',
    siteName: 'StyleraTech',
    type: 'website',
  },
}

export default async function JoinOurTeamPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  const isRTL = locale === 'ar'

  return (
    <div className='relative'>
      <Navigation dictionary={dictionary.nav} />
      <JoinOurTeam
        dictionary={{
          teamSection: dictionary.teamSection,
          ApplyForm: dictionary.ApplyForm,
        }}
        isRTL={isRTL}
      />
    </div>
  )
}
