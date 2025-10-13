import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center px-4'>
      <div className='text-center max-w-md'>
        <div className='text-8xl font-bold text-slate-600 mb-4'>404</div>
        <h1 className='text-2xl font-bold text-white mb-4'>Page Not Found</h1>
        <p className='text-slate-400 mb-8'>
          The page you are looking for does not exist or has been moved.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            asChild
            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
          >
            <Link href='/'>
              <Home className='w-4 h-4 mr-2' />
              Back to Home
            </Link>
          </Button>
          <Button
            variant='outline'
            asChild
            className='border-slate-600 text-white hover:bg-slate-800 bg-transparent'
          >
            <Link href='javascript:history.back()'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
