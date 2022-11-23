import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getSession, GetSessionParams } from 'next-auth/react'
import {
    Card,
    Title,
    Text,
    Tab,
    TabList,
    Block,
} from '@tremor/react';
import { useState } from 'react';

export default function Example() {
    const [selectedView, setSelectedView] = useState(1);
    return (
        <main className='bg-zinc-100'>
            <Header />
            <div className="max-w-7xl min-h-screen mx-auto p-5 ">
                <Title>Settings</Title>
                <Text>Account settings can be configured below.</Text>

                <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
                    <Tab value={ 1 } text="Page 1" />
                    <Tab value={ 2 } text="Page 2" />
                </TabList>


                { selectedView === 1 ? (
                    <Block marginTop="mt-6">
                        <Card>
                            <div className="h-96" />
                        </Card>
                    </Block>
                ) : (
                    <Block marginTop="mt-6">
                        <Card>
                            <div className="h-96" />
                        </Card>
                    </Block>
                ) }
            </div>
            <Footer />
        </main>
    );
}

export async function getServerSideProps(context: GetSessionParams) {
    const session = await getSession(context)
  
    if (!session) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }
  
    return {
      props: { session }
    }
  }