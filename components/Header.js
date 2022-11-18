import React from 'react'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <div className='flex justify-between h-20 border-b-2 border-gray-200 top-0 sticky z-50'>
        <div className='flex items-center justify-start pl-5'>
            <div className='flex'>
                <a href='/index' className='flex'>        
                    <img src='/pipeview-logo1.png' alt='logo' className='h-16' />
                    <span className='pl-2 font-extralight text-xl flex items-center'>PIPEVIEW</span>
                </a>
            </div>
        </div>
        <div className='hidden md:flex items-center justify-center'>
            <p>Middle</p>
        </div>
        <div className='flex items-center justify-end p-2 text-gray-500 border border-solid rounded-full border-gray-300 m-3'>
            <UserCircleIcon className='h-10 hover:text-gray-600 hover:cursor-pointer active:scale-90 transition-all duration-200' />
            <Bars3Icon className='h-10 hover:text-gray-600 hover:cursor-pointer active:scale-90 transition-all duration-200' />
        </div>
    </div>
  )
}

export default Header