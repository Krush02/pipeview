import React from 'react'
import SalesMTD from './SalesMTD';
import Sales from './Sales';
import Sources from './Sources';
import OverallPerformance from './OverallPerformance';
import RepCard from './RepCard';
import {
    ColGrid,
    Col,
} from '@tremor/react';

function Month() {
  return (
    <>
        <ColGrid numColsLg={ 8 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
            { /* Main section */ }
            <Col numColSpanMd={ 3 } numColSpanLg={ 6 }>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6'>
                    <SalesMTD />
                    <Sales />
                    <Sources />
                    <OverallPerformance />
                </div>
            </Col>
            <RepCard />
        </ColGrid>
    </>
  )
}

export default Month