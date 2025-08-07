import React from 'react'
import Link from 'next/link'

const RRSSIcons = () => {
  return (
    <div className='flex justify-center gap-x-4 mt-4 relative z-10'>
      <Link href='https://github.com/diegokaiser' target='_blank' className='bg-[#0f0f0f]/90 backdrop-blur flex items-center justify-center h-[40px] w-[40px] rounded-full text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className='h-auto w-7/12'>
          <rect width="256" height="256" fill="none"/>
          <path d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </svg>
      </Link>
      <Link href='https://www.linkedin.com/in/diegocaceres/' target='_blank' className='bg-[#0f0f0f]/90 backdrop-blur flex items-center justify-center h-[40px] w-[40px] rounded-full text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className='h-auto w-7/12'>
          <rect width="256" height="256" fill="none"/>
          <rect x="32" y="32" width="192" height="192" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
          <circle cx="88" cy="84" r="12"/>
        </svg>
      </Link>
    </div>
  )
}

export default RRSSIcons