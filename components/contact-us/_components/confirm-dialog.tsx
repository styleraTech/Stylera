'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Info } from 'lucide-react'

interface ConfirmBookingDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  platform: string | null
  onConfirm: (data: { name: string; contact: string }) => void
  dictionary: Dictionary['appointments']
  isRTL?: boolean
}

const ConfirmBookingDialog: React.FC<ConfirmBookingDialogProps> = ({
  open,
  onOpenChange,
  platform,
  onConfirm,
  dictionary,
  isRTL,
}) => {
  if (!dictionary) return null
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const handleConfirm = () => {
    onConfirm({ name, contact })
    onOpenChange(false)
  }

  const isWhatsApp = platform?.includes('WhatsApp')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md font-[cairo] bg-white text-slate-900'>
        <DialogHeader>
          <DialogTitle className='text-lg font-semibold text-center text-[#1E1E2D]'>
            {dictionary.dialogTitle}
          </DialogTitle>
          <DialogDescription className='text-slate-500 text-center'>
            <span dir='auto'>
              {dictionary.dialogDescription.includes('{platform}')
                ? dictionary.dialogDescription.replace(
                    '{platform}',
                    platform || ''
                  )
                : `${dictionary.dialogDescription.trim()} ${platform || ''}`}
            </span>
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4 mt-4'>
          {/* Name Input */}

          <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <Label htmlFor='name' className='text-[#1E1D56] mb-1 block'>
              {dictionary.fullNameLabel}
            </Label>
            <Input
              id='name'
              placeholder={dictionary.fullNamePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={isRTL ? 'text-right' : 'text-left'}
            />
          </div>

          {/* Contact Input */}
          <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <Label htmlFor='contact' className='text-[#1E1D56] mb-1 block'>
              {isWhatsApp ? dictionary.whatsappLabel : dictionary.emailLabel}
            </Label>
            <Input
              id='contact'
              type={isWhatsApp ? 'tel' : 'email'}
              placeholder={
                isWhatsApp
                  ? dictionary.whatsappPlaceholder
                  : dictionary.emailPlaceholder
              }
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={isRTL ? 'text-right' : 'text-left'}
            />
          </div>

          {/* Info Message */}
          <div className='flex items-center justify-center gap-2 py-3 px-1.5 bg-slate-100 rounded-lg text-xs text-slate-600'>
            <Info className='w-4 h-4 mt-0.5 shrink-0' />
            {dictionary.infoText}
          </div>
        </div>

        {/* Footer Buttons */}
        <DialogFooter className='mt-6 flex flex-col sm:flex-row justify-center gap-3'>
          <button
            onClick={() => onOpenChange(false)}
            className='w-full sm:w-1/2 py-2 rounded-full border border-[#E5E7EB] cursor-pointer hover:bg-slate-100'
          >
            {dictionary.cancel}
          </button>
          <button
            className='w-full sm:w-1/2 bg-[#05A3BE] hover:bg-cyan-600 py-2 cursor-pointer rounded-full text-white disabled:opacity-60'
            onClick={handleConfirm}
            disabled={!name || !contact}
          >
            {dictionary.confirm}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmBookingDialog
