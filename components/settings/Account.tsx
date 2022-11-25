import React from 'react'
import { Block, Card, Title, Divider } from '@tremor/react';

function Account() {
  return (
    <Block marginTop="mt-6">
        <Card maxWidth="max-w-4xl">
            <div className=""> 
                <Title>Account Info</Title>

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

export default Account