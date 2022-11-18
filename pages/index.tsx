import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
  <div className="">
      <Head>
        <title>Pipeview | Dashboard</title>
        <link rel="icon" href="/pipeview-logo1.png" />
      </Head>

      <Header />

    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
   
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t z-10">
          <Image className="pt-5" src="/pipeview-logo1.png" alt="Pipeview Logo" width={100} height={100} />
      </footer>
    </div>
  </div>
  )
}

export default Home
