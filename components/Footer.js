import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-white border-t">
        <Image className="py-5" src="/pipeview-logo1.png" alt="Pipeview Logo" width={100} height={100} />
        <p className='pb-2 text-sm text-zinc-600'>© 2022 Pipeview. All rights reserved.</p>
    </footer>
  )
}

export default Footer