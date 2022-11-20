import React from 'react'
import { Line } from 'rc-progress'

function TeamSales() {

  const qtr = 385475;
  const year = 1475845;

  return (
    <div className='flex flex-col items-center border-0 rounded-lg bg-zinc-200 md:w-50 lg:w-60 xl:w-80 m-3 p-10 shadow-md'>
        <p className='font-bold relative -top-3'>Team Sales</p>
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <p className='flex text-2xl'>{qtr.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <p className=''>this qtr</p>
            </div>
            <div className='border border-zinc-500 w-full my-5'></div>
            <div className='flex flex-col'>
                <p className='text-xl'>{year.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <p className=''>this year</p>
            </div>
        </div>
    </div>
  )
}

export default TeamSales