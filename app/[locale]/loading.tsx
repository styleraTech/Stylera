import LoadingSpinner from '@/components/ui/Custom-ui/loading-spinner/loading-spinner'

export default function Loading() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center'>
      <div className='text-center flex justify-center items-center flex-col'>
        <LoadingSpinner size='lg' />
        <p className='text-slate-400 mt-4'>Loading...</p>
      </div>
    </div>
  )
}
