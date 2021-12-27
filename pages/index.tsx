import type { NextPage } from 'next'
import Banner from '../components/Home/Banner'
import Header from '../components/Home/Header'
import MessageCallAction from '../components/Home/MessageCallAction'
import TravelTypes from '../components/Home/TravelTypes'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <TravelTypes />
      <MessageCallAction />
    </div>
  )
}

export default Home
