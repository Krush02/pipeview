import {
    Title,
    Text,
    Tab,
    TabList,
} from '@tremor/react';
import Month from '../components/Month';
import Qtr from '../components/Qtr';
import Year from './Year';
import { useState } from 'react';


export default function Example() {
    const [selectedView, setSelectedView] = useState(1);

    return (
        <main>
            <Title>Dashboard</Title>
            <Text>JURNY sales & performance data can be found on this dashboard.</Text>

            <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-5">
                <Tab value={ 1 } text="Month" />
                <Tab value={ 2 } text="QTR" />
                <Tab value={ 3 } text="Year" />
            </TabList>

            { selectedView === 1 ? (
                <Month />
                ) : selectedView === 2 ? (
                <Qtr />
                ) : (
                <Year />
                )
            }
        </main>
    );
}