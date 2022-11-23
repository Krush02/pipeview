import React from 'react'
import { useState, useEffect } from 'react'
import {
    Card,
    Title,
    Flex,
    BadgeDelta,
    DonutChart,
    Dropdown,
    DropdownItem,
    Legend,
    List,
    ListItem,
    DeltaType,
} from '@tremor/react';

// ================== DONUT CARD DATA ===================== //
const regions = [
    { key: 'all', name: 'All Deal Types' },
    { key: 'os', name: 'Jurny OS' },
    { key: 'mos', name: 'Jurny MOS' },
    { key: 'pro', name: 'Jurny MOS Pro' },
];

interface DealData {
    name: string,
    region: string,
    sales: number,
    delta: string,
    deltaType: DeltaType,
}

const deals: DealData[] = [
    {
        name: 'Shoreham',
        region: 'pro',
        sales: 98488,
        delta: '6.1%',
        deltaType: 'increase',
    },
    {
        name: 'Casa de la O',
        region: 'pro',
        sales: 45670,
        delta: '1.2%',
        deltaType: 'moderateDecrease',
    },
    {
        name: 'Tahoe',
        region: 'mos',
        sales: 24000,
        delta: '2.3%',
        deltaType: 'moderateIncrease',
    },
    {
        name: 'OVSI',
        region: 'pro',
        sales: 39080,
        delta: '0.5%',
        deltaType: 'moderateDecrease',
    },
    {
        name: 'STR Accommodations',
        region: 'mos',
        sales: 19080,
        delta: '1.8%',
        deltaType: 'moderateIncrease',
    },
    {
        name: 'Harmony Heart',
        region: 'os',
        sales: 16440,
        delta: '3.4%',
        deltaType: 'decrease',
    },
    {
        name: 'Sunapee VR',
        region: 'mos',
        sales: 13980,
        delta: '3.1%',
        deltaType: 'moderateIncrease',
    },
];

const filterByRegion = (region: string, data: DealData[]) => (
    region === 'all'
        ? data
        : data.filter((deal) => deal.region === region)
);

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat('us').format(number).toString()}`;

function Sales() {
  const [filteredData, setFilteredData] = useState(deals);
  const [selectedRegion, setSelectedRegion] = useState('all');
  
  useEffect(() => {
    const data = deals;
    setFilteredData(filterByRegion(selectedRegion, data));
  }, [selectedRegion]);

  return (
    <Card maxWidth="max-w-lg">
        <Flex spaceX="space-x-8" justifyContent="justify-start" alignItems="items-center">
            <Title>Sales</Title>
            <Dropdown
                handleSelect={ (value) => setSelectedRegion(value) }
                placeholder="Deal Type"
            >
                { regions.map((region) => (
                    <DropdownItem
                        key={ region.key }
                        value={ region.key }
                        text={ region.name }
                    />
                )) }
            </Dropdown>
        </Flex>
        <Legend categories={ filteredData.map((deal) => deal.name) } marginTop="mt-6" />
        <DonutChart
            data={ filteredData }
            category="sales"
            dataKey="name"
            valueFormatter={ valueFormatter }
            marginTop="mt-6"
        />
        <List marginTop="mt-6">
            { filteredData.map((deal) => (
                <ListItem key={ deal.name }>
                    { deal.name }
                    <BadgeDelta
                        deltaType={ deal.deltaType }
                        text={ deal.delta }
                        size="xs"
                    />
                </ListItem>
            )) }
        </List>
    </Card>
  )
}

export default Sales