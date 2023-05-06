import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Homescreen/Header'
// import Gallery from '@/components/Homescreen/Gallery'
import FindUs from '@/components/Homescreen/FindUs'
import Footer from '@/components/Homescreen/Footer'
import Events from '@/components/Homescreen/Events'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("../components/Homescreen/Gallery"), { ssr: false });
export default function Home() {
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <Header />
      <div className='home-info' id='home'>
        <div className='banner1-text'>
        <h1 className='font-[700]'>Some Important Life Lessons From Gita</h1>
        <blockquote>We are a Hindu that belives in Lord Rama and Vishnu Deva the </blockquote>
        <blockquote>followers and We are a Hindu that belives in Lord Rama and Vishnu Deva.</blockquote>
        <blockquote>This is where you should start </blockquote>
        </div>
      </div>
      <Events/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}
