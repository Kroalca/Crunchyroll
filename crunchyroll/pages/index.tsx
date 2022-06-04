import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
    </>
  )
}

export default Home
