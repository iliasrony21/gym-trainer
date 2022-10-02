import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../../images/banner4.jpg'
import banner2 from '../../../images/banner1.webp'
import banner3 from '../../../images/banner7.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <Carousel className='banners'>
        <Carousel.Item>
          <img
            className='d-block w-100 slider1'
            src={banner1}
            alt='First slide'
          />
          <Carousel.Caption className='textarea'>
            <h1>
              <span className='headertext'>Let's go for private</span> <br />{' '}
              Training
            </h1>
            <p>
              At Fitness Lab, we take personal training and PT sessions to a
              whole new level.
            </p>
            <button className='sliderbtn'> Book My Consultation</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='slider1' src={banner2} alt='Second slide' />

          <Carousel.Caption className='textarea'>
            <h1>
              <span className='headertext'>Let's go for private</span> <br />{' '}
              Training
            </h1>
            <p>
              At Fitness Lab, we take personal training and PT sessions to a
              whole new level.
            </p>
            <button className='sliderbtn'> Book My Consultation</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 slider1'
            src={banner3}
            alt='Third slide'
          />

          <Carousel.Caption className='textarea'>
            <h1>
              <span className='headertext'>Let's go for private</span> <br />{' '}
              Training
            </h1>
            <p>
              At Fitness Lab, we take personal training and PT sessions to a
              whole new level.
            </p>
            <button className='sliderbtn'> Book My Consultation</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
