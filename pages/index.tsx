import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import { getSession, GetSessionParams } from 'next-auth/react'

const Home: NextPage = () => {
  return (
  <div className="bg-zinc-100">
      <Head>
        <title>Pipeview | Dashboard</title>
        <link rel="icon" href="/pipeview.png" />
      </Head>
      <Header />
    <div className="max-w-7xl min-h-screen mx-auto p-5">
      <Dashboard />
    </div>
    <footer className="bg-white flex justify-center border-t">
        <Image className="py-5" src="/pipeview-logo1.png" alt="Pipeview Logo" width={100} height={100} />
    </footer>
  </div>
  )
}

export default Home

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context)
  
  return {
    props: {
      session,
    },
  }
}