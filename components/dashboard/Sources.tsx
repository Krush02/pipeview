import React from 'react'
import { useState, useEffect } from 'react'
import {
    Card,
    Title,
    Text,
    Flex,
    Dropdown,
    DropdownItem,
    BarList,
    Bold,
} from '@tremor/react';

// ================== SALES BY SOURCE ===================== //
const categories = [
    { key: 'all', name: 'All' },
    { key: 'capterra', name: 'Capterra' },
    { key: 'softAdv', name: 'Software Advice' },
    { key: 'organic', name: 'Website' },
];

interface VisitsData {
    name: string,
    value: number,
    category: string,
}

const visits: VisitsData[] = [
    {
        name: 'Website',
        value: 96456,
        category: 'organic',
    },
    {
        name: 'Software Advice',
        value: 79271,
        category: 'softAdv',
    },
    {
        name: 'Capterra',
        value: 41191,
        category: 'capterra',
    },
];

const filterByCategory = (category: string, data: VisitsData[]) => (
    category === 'all'
        ? data
        : data.filter((item) => item.category === category)
);

const currencyFormatter = (value: number) => `${value.toLocaleString("en-US", {style: "currency", currency: "USD"})}`;


function Sources() {

    const [filteredVisitData, setFilteredVisitData] = useState(visits);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        setFilteredVisitData(filterByCategory(selectedCategory, visits));
    }, [selectedCategory]);

  return (
    <Card maxWidth="max-w-lg">
        <Flex spaceX="space-x-8">
            <Title>Deal Sources</Title>
            <Dropdown
                handleSelect={ (value) => setSelectedCategory(value) }
                placeholder="Source Selection"
                maxWidth="max-w-xs"
            >
                { categories.map((category) => (
                    <DropdownItem
                        key={ category.key }
                        value={ category.key }
                        text={ category.name }
                    />
                )) }
            </Dropdown>
        </Flex>
        <Flex marginTop="mt-8">
            <Text><Bold>Source</Bold></Text>
            <Text><Bold>ARR $</Bold></Text>
        </Flex>
        <BarList
            data={ filteredVisitData }
            showAnimation={ false }
            marginTop="mt-4"
            valueFormatter={ currencyFormatter }
        />
    </Card>  )
}

export default Sources