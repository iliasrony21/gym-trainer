import React from 'react'
import './Exercise.css'
import document from '../../../images/document.png'
import docu1 from '../../../images/docu1.png'
import docu2 from '../../../images/docu2.png'
import docu3 from '../../../images/docu3.png'

const Exercise = () => {
  return (
    <div>
      <div className='ExerciseFull'>
        <div className='picPart'>
          <img src={document} alt='' />
        </div>
        <div className='exerciseText'>
          <h6>GET INTO SHAPE NOW!</h6>
          <h1 className='mb-5'>
            <span className='headertext'>EXERCISE REGULARLY</span>{' '}
            <span className='text-danger'> STAY HEALTHY</span>{' '}
          </h1>

          <h3>
            {' '}
            <span>
              <img className='docu1' src={docu1} alt='' />
            </span>
            Increase Energy Levels
          </h3>
          <p className='docutext'>
            Semper nisi. Aenean vulputate eleifend tellus consequat
            vitae,eleifend ac, enim.Aliquam increase your energy levels.lets do
            it for the first time you should be take care of everyone.Energy
            level is very important for your daily life. Increase your energy
            level with us.
          </p>

          <h3>
            {' '}
            <span className='docu1'>
              <img src={docu2} alt='' />
            </span>{' '}
            Reduce Risk of Chronic Diseases
          </h3>
          <p className='docutext'>
            Semper nisi. Aenean vulputate eleifend tellus consequat
            vitae,eleifend ac, enim.Aliquam increase your energy levels.lets do
            it for the first time you should be take care of everyone.Energy
            level is very important for your daily life. Increase your energy
            level with us.
          </p>

          <h3>
            {' '}
            <span className='docu1'>
              <img src={docu3} alt='' />
            </span>{' '}
            Delay Signs of Ageing
          </h3>
          <p className='docutext'>
            Semper nisi. Aenean vulputate eleifend tellus consequat
            vitae,eleifend ac, enim.Aliquam increase your energy levels.lets do
            it for the first time you should be take care of everyone.Energy
            level is very important for your daily life. Increase your energy
            level with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Exercise
