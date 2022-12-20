import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'
import Footer from '../components/footer'



export default function Home() {
  return (
    <div className='home overflow-x-hidden'>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
