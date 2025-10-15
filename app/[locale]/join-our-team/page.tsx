import Navigation from '@/components/layout/navigation'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import JoinOurTeam from '@/components/join-our-team/join-our-team'
// import ShaderBackground from '@/components/shader-background'

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
