import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'

const signup = () => {
  return (
    <div>
      <Form className=' w-50 mt-5 mb-5 formdetails '>
        <h1 className='text-center mt-5'>Sign Up!!!!!!!</h1>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='text-white texts'>Your Name</Form.Label>
          <Form.Control
            className='formfield '
            type='text'
            placeholder='Your name'
          />
        </Form.Group>
        <Form.Group className='mb-3 ' controlId='formBasicEmail'>
          <Form.Label className='text-white'>Email address</Form.Label>
          <Form.Control
            // ref={emailRef}
            className='formfield'
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='text-white texts'>Password</Form.Label>
          <Form.Control
            // ref={passwordRef}
            className='formfield '
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <button className='formbtns'>Sign Up</button>
      </Form>
    </div>
  )
}

export default signup
