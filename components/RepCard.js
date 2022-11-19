import React, { useState, useEffect } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Line, Circle } from 'rc-progress'


function RepCard() {
    const [progress, setProgress] = useState(0);

    const ARR = (min, max) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const reps = [
        {
        name: 'Jason',
        qtd: ARR(15140, 12270),
        ytd: ARR(1501140, 2701450),
        goal: ARR(1500000, 2700000),
        progress: Math.floor(Math.random() * 100),},
        {
        name: 'Maurizio',
        qtd: ARR(15140, 12270),
        ytd: ARR(1501140, 2701450),
        goal: ARR(1500000, 2700000),
        progress: Math.floor(Math.random() * 100),},
        {
        name: 'Svitlana',
        qtd: ARR(15140, 12270),
        ytd: ARR(1501140, 2701450),
        goal: ARR(1500000, 2700000),
        progress: Math.floor(Math.random() * 100),},
    ]

  return ( {reps.map((rep) => (

    <div className='flex flex-col items-center border-0 rounded-lg bg-zinc-200 md:w-1/3 xl:w-2/5 m-3 p-10 shadow-md'>
        <div className='text-lg font-bold text-zinc-800'>{reps.name}</div>
        <UserCircleIcon className='h-20 text-zinc-600' />
        <div className='flex flex-col'>
            <div className='flex flex-col justify-between'>
                <p className='flex text-2xl'>
                    {ARR(1510, 2740)}
                </p>
                <p className=''>
                    this qtr
                </p>
            </div>
            <div className=''>
                <Line className='py-2' percent={progress} strokeWidth='22' strokeColor={`green`} trailColor='#B9B9B9' trailWidth='22' />
                <p className='text-xs relative px-2 -top-7 text-white font-medium'>{progress}%</p>
            </div>
        </div>
        <div className='border border-gray-500 w-full mt-2 mb-5'></div>
        <div className='flex flex-col'>
            <p className='text-2xl'>
                {ARR(1454350, 974505)}
            </p>
            <p className=''>
                this year
            </p>
            <div className=''>
                <Circle className='py-2' percent={progress} strokeWidth='10' strokeColor={`royalBlue`} trailColor='#B9B9B9' trailWidth='10' />
                <p className='relative px-2 -top-20 -mt-3 ml-14 text-zinc-600 font-bold'>{progress}%</p>
            </div>
        </div>
    </div>
  )) }
    )

export default RepCard