import React from 'react'
import {Block, 
        Card,
        Divider, 
        Title, 
        Toggle,
        ToggleItem,
} from '@tremor/react';
import { MoonIcon,
         SunIcon,
} from '@heroicons/react/24/outline';

// Handle View Mode toggle change
const handleMode = (value: any) => {
    if (value === 1) {
        console.log('light mode')
    } else {
        console.log('dark mode')
    }
}

function Settings() {
  return (
    <Block marginTop="mt-6">
        <Card maxWidth="max-w-4xl">
            <div className=""> 
                <Title>Preferences</Title>

                <div className='mt-5 grid grid-cols-2 md:grid-cols-4'>
                    <div className='ml-3 space-y-3 sm:col-start-1 md:col-start-2 justify-around flex flex-col'>
                        <div className='text-neutral-600'>View Mode:</div>
                    </div>
                    <div className='space-y-3'>
                        <Toggle defaultValue={1} handleSelect={handleMode}>
                            <ToggleItem value={1} text="Light" icon={SunIcon} />
                            <ToggleItem value={2} text="Dark" icon={MoonIcon} />
                        </Toggle>
                    </div>
                </div>
                <Divider />
                <div className='mt-5 grid grid-cols-2 md:grid-cols-4'>
                    <div className='ml-3 space-y-3 sm:col-start-1 md:col-start-2'>
                        <div className='text-neutral-600'>Account Name:</div>
                        <div className='text-neutral-600'>Account Email:</div>
                        <div className='text-neutral-600'>Account Status:</div>
                    </div>
                    <div className='space-y-3'>
                        <div className='text-neutral-400' >Jurny, Inc.</div>
                        <div className='text-neutral-400' >jason@jurny.com</div>
                        <div className='text-neutral-400' >Active</div>
                    </div>
                </div>
            </div>
        </Card>
    </Block>  
  )
}

export default Settings