import type { NextPage } from 'next'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}

export default Home
