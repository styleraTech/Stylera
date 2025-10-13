import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Info } from 'lucide-react'

interface ConfirmBookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  platform: string | null
  onConfirm: (data: { name: string; contact: string }) => void
}

const ConfirmBookingDialog: React.FC<ConfirmBookingDialogProps> = ({
  open,
  onOpenChange,
  platform,
  onConfirm,
}) => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const handleConfirm = () => {
    onConfirm({ name, contact })
    onOpenChange(false)
  }

  const isWhatsApp = platform?.includes('WhatsApp')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md bg-white text-slate-900'>
        <DialogHeader>
          <DialogTitle className='text-lg font-semibold text-center text-[#1E1E2D]'>
            Confirm Your Booking Details
          </DialogTitle>
          <DialogDescription className='text-slate-500 text-center'>
            Complete your meeting request for <b>{platform}</b>
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4 mt-4'>
          <div>
            <Label htmlFor='name' className='text-[#1E1D56] mb-1'>
              Full Name
            </Label>
            <Input
              id='name'
              placeholder='Enter your full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor='contact' className='text-[#1E1D56] mb-1'>
              {isWhatsApp ? 'WhatsApp Number' : 'Email Address'}
            </Label>
            <Input
              id='contact'
              type={isWhatsApp ? 'tel' : 'email'}
              placeholder={
                isWhatsApp ? '+1 234 567 890' : 'your.email@example.com'
              }
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-center gap-2 py-3 px-1.5 bg-slate-100 rounded-lg text-xs text-slate-600'>
            <Info className='w-4 h-4 mt-0.5 shrink-0' />
            Your appointment details will be sent to your calendar
            automatically.
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className='mt-6 flex flex-col sm:flex-row justify-center gap-3'>
          <button
            onClick={() => onOpenChange(false)}
            className='w-full sm:w-1/2 py-2 rounded-full border border-[#E5E7EB] cursor-pointer hover:bg-slate-100'
          >
            Cancel
          </button>
          <button
            className='w-full sm:w-1/2 bg-[#05A3BE] hover:bg-cyan-600 py-2 cursor-pointer rounded-full text-white'
            onClick={handleConfirm}
            disabled={!name || !contact}
          >
            Confirm Booking
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmBookingDialog
