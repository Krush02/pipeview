import React from 'react'
import { useState, useEffect } from 'react';
import {
  Card,
  Title,
  Text,
  Tab,
  TabList,
  ColGrid,
  Block,
  Metric,
  Flex,
  ProgressBar,
  BadgeDelta,
  DeltaType,
  DonutChart,
  Dropdown,
  DropdownItem,
  Legend,
  List,
  ListItem,
} from '@tremor/react';

const regions = [
  { key: 'all', name: 'All Regions' },
  { key: 'us', name: 'United States' },
  { key: 'europe', name: 'Europe' },
  { key: 'asia', name: 'Asia' },
];

interface CityData {
  name: string,
  region: string,
  sales: number,
  delta: string,
  deltaType: DeltaType,
}

const cities: CityData[] = [
  {
      name: 'New York',
      region: 'us',
      sales: 984888,
      delta: '6.1%',
      deltaType: 'increase',
  },
  {
      name: 'London',
      region: 'europe',
      sales: 456700,
      delta: '1.2%',
      deltaType: 'moderateDecrease',
  },
  {
      name: 'San Francisco',
      region: 'us',
      sales: 240000,
      delta: '2.3%',
      deltaType: 'moderateIncrease',
  },
  {
      name: 'Hong Kong',
      region: 'asia',
      sales: 390800,
      delta: '0.5%',
      deltaType: 'moderateDecrease',
  },
  {
      name: 'Singapore',
      region: 'asia',
      sales: 190800,
      delta: '1.8%',
      deltaType: 'moderateIncrease',
  },
  {
      name: 'Zurich',
      region: 'europe',
      sales: 164400,
      delta: '3.4%',
      deltaType: 'decrease',
  },
  {
      name: 'Vienna',
      region: 'europe',
      sales: 139800,
      delta: '3.1%',
      deltaType: 'moderateIncrease',
  },
];

const valueFormatter = (number: number) => `${Intl.NumberFormat('us').format(number).toString()} $`;

const filterByRegion = (region: string, data: CityData[]) => (
  region === 'all'
      ? data
      : data.filter((city) => city.region === region)
);

function Dashboard() {
  const [selectedView, setSelectedView] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [filteredData, setFilteredData] = useState(cities);

    useEffect(() => {
        const data = cities;
        setFilteredData(filterByRegion(selectedRegion, data));
    }, [selectedRegion]);

    return (
        <main className='p-5'>
            <Title>Dashboard</Title>
            <Text>Sales team stats can be viewed here.</Text>

            <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
                <Tab value={ 1 } text="Overview" />
                <Tab value={ 2 } text="QTD" />
                <Tab value={ 3 } text="YTD" />
            </TabList>

            { selectedView === 1 ? (
                  <>
                    <ColGrid numColsMd={ 3 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
                      <div className='hover:scale-105 hover:cursor-pointer active:scale-100 transition-all duration-150'>
                        <Card decoration="top" decorationColor='blue'>
                          <Title>Team Sales</Title>
                          <Flex>
                            <Text>$ 335,152 &bull; 95%</Text>
                            <Text>$ 400,000</Text>
                          </Flex>
                          <ProgressBar percentageValue={95} color="blue" marginTop="mt-2" />
                        </Card>
                      </div>
                      <div className='hover:scale-105 hover:cursor-pointer active:scale-100 transition-all duration-150'>
                          <Card decoration="top" decorationColor='blue'>
                            <Title>QTD Sales</Title>
                            <Flex>
                              <Text>$ 335,152 &bull; 55%</Text>
                              <Text>$ 600,000</Text>
                            </Flex>
                            <ProgressBar percentageValue={55} color="blue" marginTop="mt-2" />
                          </Card>
                        </div>
                        <div className='hover:scale-105 hover:cursor-pointer active:scale-100 transition-all duration-150'>
                          <Card decoration="top" decorationColor='blue'>
                            <Title>YTD Sales</Title>
                            <Flex>
                              <Text>$ 335,152 &bull; 35%</Text>
                              <Text>$ 1,200,000</Text>
                            </Flex>
                            <ProgressBar percentageValue={35} color="blue" marginTop="mt-2" />
                          </Card>
                        </div>
                      </ColGrid>

                      <Block marginTop="mt-6">
                          <Card>
                              <div className="h-80" />
                          </Card>
                      </Block>
                  </>
              ) : selectedView === 2 ? (
                  <>
                      <ColGrid numColsMd={ 3 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
                          
                      <Card>
                        <Text>Sales</Text> 
                        <Flex>
                          <Text>$ 335,152 &bull; 95%</Text>
                          <Text>$ 200,000</Text>
                        </Flex>
                        <ProgressBar percentageValue={95} color="blue" marginTop="mt-2" />
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
              ) : selectedView === 3 ? (
                  <Block marginTop="mt-6">
                      <Card>
                          <div className="h-96" />
                      </Card>
                  </Block>
              ) 
              : null 
          }
        </main>
    );
}

export default Dashboard