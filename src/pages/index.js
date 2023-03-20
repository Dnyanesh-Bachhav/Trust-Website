import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Homescreen/Header'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

    <Header/>
    <h1>Hello world...!!!</h1>
    <p>It is paragraph</p>
    </div>
  )
}
