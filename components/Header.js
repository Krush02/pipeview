import React from 'react'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import Router from 'next/router';

function Header() {
  const { data: session } = useSession();

  const logout = () => {
    signOut();
  };

  const routeSettings = () => {
    let path = `/settings`;
    Router.push(path);
  };

  return (
    <div className='flex justify-between h-20 bg-white border-b-2 border-zinc-300 shadow-sm top-0 sticky z-50'>
        <div className="flex items-center justify-end text-gray-500 p-3">
          <div className='flex items-center space-x-1 border-2 p-1 rounded-full'>
              <UserCircleIcon onClick={routeSettings} className='h-9 cursor-pointer hover:scale-105 hover:text-gray-800 active:scale-95 transition-all'/>
              <div className='dropdown inline-block relative group'>
                  <Bars3Icon className='h-9 cursor-pointer hover:text-gray-800 hover:scale-105 active:scale-95 transition-all'/>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-40 -left-4 group-hover:block">
                      <li><a className="items-center gap-x-2 flex rounded-t bg-zinc-200 hover:bg-zinc-300 py-2 px-4" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                      </svg>
                      Dashboard</a></li>
                      <li><a className="items-center gap-x-2 flex bg-zinc-200 hover:bg-zinc-300 py-2 px-4" href="/aes">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                      </svg>
                      AE's
                      </a></li>
                      <li><a className="items-center gap-x-2 flex bg-zinc-200 hover:bg-zinc-300 py-2 px-4" href="/sdrs">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                      SDR's</a></li>
                      <li><a className="items-center gap-x-2 bg-zinc-200 hover:bg-zinc-300 py-2 px-4 flex" href="/settings">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </a></li>
                      <li><p className="items-center gap-x-2 flex rounded-b bg-zinc-200 hover:bg-zinc-300 hover:cursor-pointer py-2 px-4" onClick={logout}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                      </svg>
                      Log out
                      </p></li>
                  </ul>
              </div>
          </div>
        </div>
        <div className='flex items-center justify-start mx-5'>
                <a href='/' className='flex '>        
                    <img src='/pipeview-logo1.png' alt='logo' className='h-20 active:scale-95 transition-all duration-200 py-1' />
                </a>
        </div>
    </div>
  )
}

export default Header