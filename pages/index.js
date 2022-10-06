import Head from 'next/head'
import Background  from '../components/background/Background.js'
import SectionTwo from '../components/sectionTwo/SectionTwo.js'
import SectionThree from '../components/sectionThree/SectionThree.js'
import Footer from '../components/Footer/Footer.js'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Task</title>
        <meta name="description" content="Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background/>
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  )
}
