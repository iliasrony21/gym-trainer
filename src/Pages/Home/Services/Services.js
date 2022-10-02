import React from 'react'
import Service from '../Service/Service'
import { useState } from 'react'
import { useEffect } from 'react'
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='allpart'>
      <h1 className='mt-5 mb-5 text-danger text-center'>Our Services</h1>
      <div className='alldetailsservice'>
        {services.map(service => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  )
}

export default Services
