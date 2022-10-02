import React from 'react'
import './Footer.css'
import logo1 from '../../../images/fb.png'
import logo2 from '../../../images/io-removebg-preview.png'
import logo3 from '../../../images/ed.png'
import logo4 from '../../../images/po-removebg-preview.png'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='part-one'>
          <h1>
            <span>
              FIT <span className='and'>&</span> FINE
            </span>
          </h1>
          <button className='footerbtn'>Check Now</button>
        </div>
        <div className='part-two'>
          <li>Personal Training</li>
          <li>Physiotherapy</li>
          <li>Netritional Advice</li>
          <li>Team</li>
          <li>Fitness hub</li>
        </div>
        <div className='part-three'>
          <li>Location-dhanmondi</li>
          <li>Location-badda</li>
          <li>Terms and condition</li>
          <li>Cookies</li>
          <li>Privacy policy</li>
        </div>
        <div className='part-four'>
          <h4>Follow us</h4>
          <span>
            <img className='image' src={logo1} alt='' />
          </span>{' '}
          <span>
            <img src={logo2} alt='' />
          </span>{' '}
          <span>
            <img src={logo3} alt='' />
          </span>
          <h4>Call us</h4>
          <p>
            <span>
              <img src={logo4} alt='' />
            </span>{' '}
            0123457999
          </p>
        </div>
      </div>
      <div>
        <hr className='new1'></hr>
      </div>
      <p className='copyright'>Copyright @2022</p>
    </div>
  )
}

export default Footer
