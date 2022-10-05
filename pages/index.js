import Head from 'next/head'
import Background  from '../components/background/Background.js'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Task</title>
        <meta name="description" content="Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Background />
     <h1>task</h1>
    </div>
  )
}
