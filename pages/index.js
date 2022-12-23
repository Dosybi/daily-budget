import Head from 'next/head'
import { useState } from 'react'

import Description from '../components/Description'
import Inputs from '../components/Inputs'
import Result from '../components/Result'

export default function Home() {
  const [result, setResult] = useState()

  const handleResult = (result) => setResult(result)

  return (
    <>
      <Head>
        <title>Сколько вы можете тратить в день</title>
        <meta name="description" content="Сколько вы можете тратить в день" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl bg-white px-4 pt-4">
        <Description />
        <Inputs handleResult={handleResult} />
        <Result {...result} />
      </main>
    </>
  )
}
