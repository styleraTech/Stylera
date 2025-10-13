'use client'

import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { motion } from 'framer-motion'
import { CalendarDays, Video, PhoneCall } from 'lucide-react'
import ConfirmBookingDialog from './_components/confirm-dialog'
import { toast } from 'sonner'

interface AppointmentsScheduleProps {
  dictionary: Dictionary['appointments']
  isRTL?: boolean
}

const AppointmentsSchedule: React.FC<AppointmentsScheduleProps> = ({
  dictionary,
  isRTL,
}) => {
  if (!dictionary) return null

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const times = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ]

  const platforms = [
    { name: 'Google Meet', icon: <Video className='text-blue-400 w-5 h-5' /> },
    {
      name: 'WhatsApp',
      icon: <PhoneCall className='text-green-400 w-5 h-5' />,
    },
    { name: 'Zoom', icon: <Video className='text-purple-400 w-5 h-5' /> },
  ]

  const handlePlatformClick = (platformName: string) => {
    setSelectedPlatform(platformName)
    if (selectedTime) {
      setIsDialogOpen(true)
    } else {
      toast.warning(dictionary.alertSelectTime, {
        description: dictionary.chooseTimePlatformTitle,
        duration: 3000,
      })
    }
  }

  const handleConfirm = (data: { name: string; contact: string }) => {
    console.log('Booking confirmed:', {
      date: selectedDate,
      time: selectedTime,
      platform: selectedPlatform,
      ...data,
    })

    toast.success(dictionary.toastSuccessTitle, {
      description: dictionary.toastSuccessDescription.replace(
        '{platform}',
        selectedPlatform || ''
      ),
      duration: 4000,
    })
  }

  return (
    <section className='py-20 bg-[#0B1121]'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-16'
        >
          {dictionary.title}
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-xl'>
          {/* Left side — Calendar */}
          <div className='p-8 bg-gray-200 backdrop-blur-md'>
            <h3 className='text-xl font-semibold text-black mb-2'>
              {dictionary.selectDateTitle}
            </h3>
            <p className='text-[#4A5565] mb-6'>
              {dictionary.selectDateSubtitle}
            </p>

            <div className='flex justify-center'>
              <Calendar
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
                className='rounded-md border-0 bg-white text-slate-900'
              />
            </div>

            {selectedDate && (
              <div className='mt-6 p-3 flex items-center justify-center rounded-xl shadow-md bg-white text-black gap-2'>
                <CalendarDays className='w-5 h-5' />
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}
          </div>

          {/* Right side — Time + Platform */}
          <div className='p-8 bg-gradient-to-br to-[#9C27B04D]/30 from-[#05A3BE33]/70'>
            <h3 className='text-xl font-semibold text-white mb-2'>
              {dictionary.chooseTimePlatformTitle}
            </h3>
            <p className='text-slate-300 mb-6'>
              {dictionary.availableTimeSlots}
            </p>

            <div className='grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8'>
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-cyan-500 text-white border-cyan-400'
                      : 'bg-white/10 text-white/80 border-white/10 hover:bg-cyan-600/20'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <h4 className='text-white mb-3 font-semibold'>
              {dictionary.selectPlatform}
            </h4>

            <div className='flex flex-col gap-3'>
              {platforms.map((p) => (
                <button
                  key={p.name}
                  onClick={() => handlePlatformClick(p.name)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                    selectedPlatform === p.name
                      ? 'bg-cyan-500/10 border-cyan-400 text-white'
                      : 'bg-white/10 border-white/10 text-white/80 hover:bg-cyan-600/20'
                  }`}
                >
                  {p.icon}
                  <span className='font-medium'>{p.name}</span>
                </button>
              ))}
            </div>

            <ConfirmBookingDialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
              platform={selectedPlatform}
              onConfirm={handleConfirm}
              dictionary={dictionary}
              isRTL={isRTL}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentsSchedule
