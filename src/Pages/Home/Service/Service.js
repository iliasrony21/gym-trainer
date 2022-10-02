import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Service.css'

const Service = ({ service }) => {
  const { name, description, img, price } = service
  return (
    <div>
      <div className=''>
        <Card className='allcard ' style={{ width: '22rem' }}>
          <Card.Img className='cardimage' variant='top' src={img} />
          <Card.Body>
            <Card.Title className='text-danger text-bold fs-4'>
              {name}
            </Card.Title>
            <Card.Title className='text-danger text-bold fs-4'>
              ${price}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button className='card-buttons' variant='danger'>
              Checkout
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Service
