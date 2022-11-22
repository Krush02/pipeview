import React from 'react'
import { useState } from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import {
    Card,
    Text,
    Tab,
    TabList,
    Block,
    Metric,
    ProgressBar,
    Flex,
    Footer,
    ButtonInline,
    AreaChart,
    BadgeDelta,
} from '@tremor/react';

// =============== SALES LINE GRAPH DATA =============== //
const sales = [
    {
        Month: 'Jan 21',
        Sales: 2890,
    },
    {
        Month: 'Feb 21',
        Sales: 1890,
    },
    {
        Month: 'Mar 21',
        Sales: 2190,
    },
    {
        Month: 'Apr 21',
        Sales: 3470,
    },
    {
        Month: 'May 21',
        Sales: 2170,
    },
    {
        Month: 'Jun 21',
        Sales: 3170,
    },
    {
        Month: 'Jul 21',
        Sales: 3490,
    },
    {
        Month: 'Aug 21',
        Sales: 2680,
    },
    {
        Month: 'Sep 21',
        Sales: 1290,
    },
    {
        Month: 'Oct 21',
        Sales: 1010,
    },
    {
        Month: 'Nov 21',
        Sales: 2350,
    },
    {
        Month: 'Dec 21',
        Sales: 3350,
    },
];

const products: {[key: string]: any} = [
    {
        title: 'Jurny OS',
        percentageValue: 6,
        metric: '$ 10,838',
        location: 'A',
    },
    {
        title: 'Jurny MOS',
        percentageValue: 60,
        metric: '$ 190,152',
        location: 'A',
    },
    {
        title: 'Jurny MOS Pro',
        percentageValue: 34,
        metric: '$ 113,542',
        location: 'A',
    },
    {
        title: 'Product Z',
        percentageValue: 82,
        metric: '$ 108,799',
        location: 'B',
    },
    {
        title: 'Product E',
        percentageValue: 10,
        metric: '$ 13,268',
        location: 'B',
    },
    {
        title: 'Product N',
        percentageValue: 8,
        metric: '$ 10,614',
        location: 'B',
    },
];

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat('us').format(number).toString()}`;

function SalesMTD() {
  const [selectedLocation, setSelectedLocation] = useState('A');

  return (
    <Card maxWidth="max-w-lg">
        <Flex alignItems="items-start">
            <Text>Sales This Month</Text>
            <BadgeDelta text="23.1%" deltaType="moderateIncrease" />
        </Flex>
        <Flex justifyContent="justify-start" alignItems="items-baseline" spaceX="space-x-3" truncate={ true }>
            <Metric>$ 442,276</Metric>
            <Text>vs last month: $ 382,482</Text>
        </Flex>
        <AreaChart
            data={ sales }
            dataKey="Month"
            categories={ ['Sales'] }
            colors={ ['blue'] }
            showYAxis={ false }
            showLegend={ false }
            startEndOnly={ true }
            valueFormatter={ valueFormatter }
            height="h-48"
            marginTop="mt-10"
        />
        <TabList marginTop="mt-4" defaultValue="A" handleSelect={ (value) => setSelectedLocation(value) }>
            <Tab value="A" text="Location A" />
            <Tab value="B" text="Location B" />
        </TabList>
        { products.filter((item: any) => item.location === selectedLocation).map((item: any) => (
            <Block key={ item.title } marginTop="mt-4" spaceY="space-y-2">
                <Flex>
                    <Text>{ item.title }</Text>
                    <Text>{ `${item.percentageValue}% (${item.metric})` }</Text>
                </Flex>
                <ProgressBar percentageValue={ item.percentageValue } />
            </Block>
        )) }
        <Footer>
            <ButtonInline
                size="sm"
                text="View details"
                icon={ ArrowLongRightIcon }
                iconPosition="right"
                handleClick={ () => console.log('View details') }
            />
        </Footer>
    </Card>  
)
}

export default SalesMTD