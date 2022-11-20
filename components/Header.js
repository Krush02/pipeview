import React from 'react'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession();
  const sessionHandler = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <div className='flex justify-between h-20 bg-white border-b-2 border-gray-200 shadow-sm top-0 sticky z-50'>
        <div className='flex items-center justify-end p-2 text-zinc-500 border border-solid rounded-full border-gray-300 m-3'>
            <UserCircleIcon onClick={sessionHandler} className='h-10 hover:text-zinc-600 hover:cursor-pointer active:scale-90 transition-all duration-200' />
            <Bars3Icon className='h-10 hover:text-zinc-600 hover:cursor-pointer active:scale-90 transition-all duration-200' />
        </div>
        <div className='hidden md:flex items-center justify-center'>
            
        </div>
        <div className='flex items-center justify-start mx-5'>
                <a href='#' className='flex '>        
                    <img src='/pipeview-logo1.png' alt='logo' className='h-20 active:scale-95 transition-all duration-200 py-1' />
                </a>
        </div>
    </div>
  )
}

export default Header