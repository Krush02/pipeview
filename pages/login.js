
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Header from '../components/Header'
import Image from 'next/image'
import Head from 'next/head'

function Login({ providers }) {
  return (
    <div className="bg-zinc-50max-w-7xl mx-auto">
      <Head>
        <title>Pipeview | Login</title>
        <link rel="icon" href="/pipeview.png" />
      </Head>
      <Header />

        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                {Object.values(providers).map((provider) => (
                    <div className='flex flex-col items-center m-10'>
                        <div key={provider.name}>
                            <button className="bg-orange-600 text-zinc-100 font-semibold p-5 rounded-full active:scale-90 hover:bg-zinc-600 transition-all"
                            onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Login with {provider.name}</button>
                        </div>
                    </div>
                ))}
            </main>

            <footer className="bg-white flex h-24 w-full items-center justify-center border-t z-10">
                <Image className="pt-5" src="/pipeview-logo1.png" alt="Pipeview Logo" width={100} height={100} />
            </footer>
        </div>
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
        providers,
    },
};
}