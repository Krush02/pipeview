import React from 'react'
import {
    Card,
    Title,
    Text,
    Col,
    Metric,
    ProgressBar,
    Flex,
    Divider,
    LineChart,
} from '@tremor/react';


// ================ REP CARDS DATA ================= //
const target = 400000;

const reps = [
    {
        name: 'Jason',
        position: "Sales Director",
        metric: (232699).toLocaleString("en-US", {style: "currency", currency: "USD"}),
        target: target.toLocaleString("en-US", {style: "currency", currency: "USD"}),
        percentToGoal: 55,
        chartdata: [
            {
                month: 'October',
                "ARR $": 55,
            },
            {
                month: 'November',
                "ARR $": 78,
            },
            {
                month: 'December',
                "ARR $": 80,
            },
        ],
    },
    {
        name: 'Maurizio',
        position: "Account Executive",
        metric: (65564).toLocaleString("en-US", {style: "currency", currency: "USD"}),
        percentToGoal: 16.5,
        target: target.toLocaleString("en-US", {style: "currency", currency: "USD"}),
        chartdata: [
            {
                month: 'October',
                "ARR $": 18,
            },
            {
                month: 'November',
                "ARR $": 40,
            },
            {
                month: 'December',
                "ARR $": 75,
            },
        ],
    },
    {
        name: 'Svitlana',
        position: "Account Executive",
        metric: (81072).toLocaleString("en-US", {style: "currency", currency: "USD"}),
        percentToGoal: 20.2,
        target: target.toLocaleString("en-US", {style: "currency", currency: "USD"}),
        chartdata: [
            {
                month: 'October',
                "ARR $": 11,
            },
            {
                month: 'November',
                "ARR $": 54,
            },
            {
                month: 'December',
                "ARR $": 73,
            },
        ],
    },
];

const repClickHandler = (rep: any) => {
    console.log(rep.name);
}

const dataFormatter = (number: number) =>
`${Intl.NumberFormat("us").format(number).toString()}%`;

function RepCard() {
  return (
    <Col numColSpanLg={ 2 }>
        <div className='space-y-5'>
            { reps.map((rep) => (
                <div onClick={repClickHandler} className='hover:cursor-pointer hover:scale-105 active:scale-100 transition-all duration-100'>
                    <Card key={ rep.name } maxWidth="max-w-lg">
                        <Title>{ rep.name }</Title>
                        <Text>{ rep.position }</Text>
                        <Metric>{ rep.metric }</Metric>
                        <Flex marginTop="mt-4">
                            <Text truncate={ true }>{ `${rep.percentToGoal}% (${rep.metric})` }</Text>
                            <Text>{ rep.target }</Text>
                        </Flex>
                        <ProgressBar percentageValue={ rep.percentToGoal } marginTop="mt-2" />
                        <Divider />
                        <div className=''>
                            <Text>Year to Date</Text>
                            <LineChart
                                data={rep.chartdata}
                                dataKey="month"
                                categories={["ARR $"]}
                                colors={["blue"]}
                                valueFormatter={dataFormatter}           
                                showGridLines={false}
                                showLegend={false}
                                showXAxis={false}
                                showYAxis={false}
                                showTooltip={true}
                                height="h-16"
                            />
                        </div>
                    </Card>
                </div>
            )) }
        </div>
    </Col>  
  )
}

export default RepCard