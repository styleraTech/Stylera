import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ShaderBackground from '@/components/shader-background'
import JoinOurTeamPage from '@/components/join-our-team/join-our-team'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function JoinTeamRoute({
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
      <JoinOurTeamPage
        dictionary={{
          teamSection: dictionary.teamSection,
          ApplyForm: dictionary.ApplyForm,
        }}
        isRTL={isRTL}
      />

      <Footer dictionary={dictionary.footer} />
    </div>
  )
}
