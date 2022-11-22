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
    { key: 'socials', name: 'Socials' },
    { key: 'blogs', name: 'Blogs' },
    { key: 'devTools', name: 'Dev Tools' },
    { key: 'organic', name: 'Organic' },
];

interface VisitsData {
    name: string,
    value: number,
    category: string,
}

const visits: VisitsData[] = [
    {
        name: 'Google',
        value: 456,
        category: 'organic',
    },
    {
        name: 'GitHub',
        value: 271,
        category: 'devTools',
    },
    {
        name: 'Twitter',
        value: 191,
        category: 'socials',
    },
    {
        name: 'Reddit',
        value: 185,
        category: 'socials',
    },
    {
        name: 'NPM',
        value: 179,
        category: 'devTools',
    },
    {
        name: 'Youtube',
        value: 91,
        category: 'socials',
    },
    {
        name: 'Medium',
        value: 42,
        category: 'blogs',
    },
    {
        name: 'DEV.to',
        value: 21,
        category: 'blogs',
    },
];

const filterByCategory = (category: string, data: VisitsData[]) => (
    category === 'all'
        ? data
        : data.filter((item) => item.category === category)
);


function Sources() {

    const [filteredVisitData, setFilteredVisitData] = useState(visits);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        setFilteredVisitData(filterByCategory(selectedCategory, visits));
    }, [selectedCategory]);

  return (
    <Card maxWidth="max-w-lg">
        <Flex spaceX="space-x-8">
            <Title>Sources</Title>
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
            <Text><Bold>Visits</Bold></Text>
        </Flex>
        <BarList
            data={ filteredVisitData }
            showAnimation={ false }
            marginTop="mt-4"
        />
    </Card>  )
}

export default Sources