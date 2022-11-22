
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function Login({ providers }) {
  return (
    <div className="bg-zinc-100">
      <Head>
        <title>Pipeview | Login</title>
        <link rel="icon" href="/pipeview.png" />
      </Head>
      <Header />

      <div className="flex flex-col max-w-7xl min-h-screen mx-auto">
          <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
              {Object.values(providers).map((provider) => (
                  <div className='flex flex-col items-center m-10'>
                      <div key={provider.name}>
                          <button className="bg-orange-600 text-zinc-100 font-semibold p-5 rounded-full active:scale-90 hover:bg-orange-700 transition-all"
                          onClick={() => signIn(provider.id, { callbackUrl: "/" })}>Login with {provider.name}</button>
                      </div>
                  </div>
              ))}
          </main>

      </div>
      <Footer />
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