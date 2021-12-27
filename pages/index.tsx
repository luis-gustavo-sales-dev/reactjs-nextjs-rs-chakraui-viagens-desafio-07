import type { NextPage } from 'next'
import Banner from '../components/Home/Banner'
import ContinentSlide from '../components/Home/ContinentSlide'
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
      <ContinentSlide />
    </div>
  )
}

export default Home
