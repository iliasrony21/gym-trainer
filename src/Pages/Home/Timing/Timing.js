import React from 'react'
import logo from '../../../images/timeshedule.png'
import './Timing.css'
import logo2 from '../../../images/time.png'

const Timing = () => {
  return (
    <div>
      <div className='timing-details'>
        <h1>
          <span>
            <img src={logo2} alt='' />
          </span>
          <span className='opening'>OPENING</span> HOURS
        </h1>
        <p className='info'>
          Everybody provide a golden opportunity to get stronger by eating
          better and living healthier and Now <br />
          the time to upgrate you to the latest and best possible vision
        </p>
        <div className='parts'>
          <div className='partOne'>
            <h3>From Monday to Friday</h3>
            <p>5:30 am to 9:30 am</p>
          </div>
          <div className='partTwo'>
            <h3>Saturday & Sunday</h3>
            <p>7:30 am to 9:30 am</p>
          </div>
        </div>
      </div>
      <div className='pic'>
        <img src={logo} alt='' />
      </div>
    </div>
  )
}

export default Timing
