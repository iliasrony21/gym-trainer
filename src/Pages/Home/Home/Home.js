import React from 'react'
import Banner from '../Banner/Banner'
import Exercise from '../Exercise/Exercise'
import Services from '../Services/Services'
import Timing from '../Timing/Timing'
// import SheduleTime from '../SheduleTime/SheduleTime'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Timing></Timing>
      <Exercise></Exercise>
    </div>
  )
}

export default Home
