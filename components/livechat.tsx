'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function LiveChatMock() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className='flex flex-col items-end gap-3'>
      {/* Toggle Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className='bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center'
        aria-label='Live Chat'
      >
        {showChat ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Mock Window */}
      {showChat && (
        <div className='w-72 bg-white text-gray-800 rounded-2xl shadow-xl p-4 border border-gray-200 animate-fade-in'>
          <div className='font-semibold text-primary mb-2'>Live Chat</div>
          <div className='bg-gray-100 rounded-lg p-3 text-sm'>
            👋 Hi there! Live chat will be available soon.
          </div>
          <div className='mt-3 flex justify-end'>
            <button
              onClick={() => setShowChat(false)}
              className='text-xs text-primary hover:underline'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
