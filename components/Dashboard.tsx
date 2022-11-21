import {
    Card,
    Title,
    Text,
    Tab,
    TabList,
    ColGrid,
    Block,
    Metric,
    ProgressBar,
    Flex,
    Footer,
    ButtonInline,
    AreaChart,
    BadgeDelta,
} from '@tremor/react';
import { useState } from 'react';

const target = 400000;

const reps = [
    {
        name: 'Jason',
        metric: '$ 232,699',
        percentageValue: 62,
        target: target.toLocaleString("en-US", {style: "currency", currency: "USD"}),
    },
    {
        name: 'Maurizio',
        metric: '$ 65,564',
        percentageValue: 16.5,
        target: target.toLocaleString("en-US", {style: "currency", currency: "USD"}),
    },
    {
        name: 'Svitlana',
        metric: '$ 81,072',
        percentageValue: 20.2,
        target: target.toLocaleString("en-US", {style: "currency", currency: "USD"}),
    },
];

export default function Example() {
    const [selectedView, setSelectedView] = useState(1);
    return (
        <main>
            <Title>Dashboard</Title>
            <Text>JURNY sales & performance data can be found on this dashboard.</Text>

            <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
                <Tab value={ 1 } text="Month" />
                <Tab value={ 2 } text="QTR" />
                <Tab value={ 3 } text="Year" />
            </TabList>

            { selectedView === 1 ? (
                <>
                    <ColGrid marginTop='mt-5' numColsSm={ 1 } numColsMd={ 3 } gapX="gap-x-6" gapY="gap-y-6">
                        { reps.map((rep) => (
                            <Card key={ rep.name }>
                                <Text>{ rep.name }</Text>
                                <Metric>{ rep.metric }</Metric>
                                <Flex marginTop="mt-4">
                                    <Text truncate={ true }>{ `${rep.percentageValue}% (${rep.metric})` }</Text>
                                    <Text>{ rep.target }</Text>
                                </Flex>
                                <ProgressBar percentageValue={ rep.percentageValue } marginTop="mt-2" />
                            </Card>
                        )) }
                    </ColGrid>
                    <Block marginTop="mt-6">
                        <Card>
                            <div className="h-80" />
                        </Card>
                    </Block>
                </>
                ) : selectedView === 2 ? (
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
                ) : (
                    <Block marginTop="mt-6">
                        <Card>
                            <div className="h-96" />
                        </Card>
                    </Block>
                )
            }
        </main>
    );
}