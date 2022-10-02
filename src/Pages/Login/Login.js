import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import './Login.css'

const Login = () => {
  return (
    <div>
      <Form className=' w-50 mt-5 mb-5 formdetails '>
        <h1 className='text-center mt-5'>Log In!!!!!!!</h1>
        <Form.Group className='mb-3 ' controlId='formBasicEmail'>
          <Form.Label className='text-white'>Email address</Form.Label>
          <Form.Control
            className='formfield'
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='text-white texts'>Password</Form.Label>
          <Form.Control
            className='formfield '
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <button className='formbtns'>Log In</button>
      </Form>
      <p>
        Are you new in this site?{' '}
        <Link className='text-decoration-none mt-2' to={'/signup'}>
          Please SignUp
        </Link>{' '}
      </p>
    </div>
  )
}

export default Login
