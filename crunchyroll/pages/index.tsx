import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <nav>
      <div className='text-3xl font-bold underline'>
        logo
        <div>
          <a href="">Explorar</a>
          <a href="">Manga</a>
          <a href="">Juegos</a>
          <a href="">Tienda</a>
          <a href="">Noticias</a>
        </div>
      </div>
      <div>
        User
      </div>
    </nav>
  )
}

export default Home
