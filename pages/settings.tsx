import React from 'react'
import Head from 'next/head';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Account from '../components/settings/Account';
import Settings from '../components/settings/Settings';
import { getSession, GetSessionParams } from 'next-auth/react'
import { useState } from 'react';
import {
    Card,
    Title,
    Text,
    Tab,
    TabList,
    Block,
    Flex,
} from '@tremor/react';


export default function Example() {
    const [selectedView, setSelectedView] = useState(1);
    return (
    <>
        <Head>
            <title>Pipeview | Settings</title>
            <link rel="icon" href="/pipeview.png" />
        </Head>
        <main className='bg-zinc-100'>
            <Header />
            <div className="max-w-7xl min-h-screen mx-auto p-5 ">
                <Title>Account Settings</Title>
                <Text>Account settings can be configured below.</Text>

                <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
                    <Tab value={ 1 } text="Account" />
                    <Tab value={ 2 } text="Settings" />
                </TabList>


                { selectedView === 1 ? (
                    <Account />
                ) : (
                    <Settings />
                ) }
            </div>
            <Footer />
        </main>
    </>
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