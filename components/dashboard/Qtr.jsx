import React from 'react'
import {
    Card,
    ColGrid,
    Block,
} from '@tremor/react';

function Qtr() {
  return (
    <>
        <ColGrid numColsMd={ 3 } numColsSm={ 1 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
            <Card>
                <div className="h-28" />
            </Card>
            <Card>
                { /* Placeholder to set height */ }
                <div className="h-28" />
            </Card>
            <Card>
                { /* Placeholder to set height */ }
                <div className="h-28" />
            </Card>
        </ColGrid>
        <Block marginTop="mt-6">
            <Card>
                <div className="h-80" />
            </Card>
        </Block>
    </>  
  )
}

export default Qtr