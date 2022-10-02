import React from 'react'
import me from '../../../images/mypic.JPG'
import './About.css'

const About = () => {
  return (
    <div>
      <div className='aboutPage'>
        <div className='pictures'>
          <img src={me} alt='' />
        </div>
        <div className='textArea'>
          <h1>
            <span className='text-danger'>About</span> Me
          </h1>
          <p>
            My name is MD.Ilias Ahomed. My nickname is rony.I am a person who is
            positive about every aspect of life. There are many things I like to
            do, to see, and to experience. I like to read, I like to write; I
            like to think, I like to dream; I like to talk, I like to listen. I
            like to see the sunrise in the morning, I like to see the moonlight
            at night; I like to feel the music flowing on my face, I like to
            smell the wind coming from the ocean. <br />
            <br /> I like to look at the clouds in the sky with a blank mind.I
            have completed my S.S.c in 2014 and also completed my H.S.C in 2016.
            Now i am studying B.S.c in cse at Daffodil International University.
            I want to be a web developer.I know some language like c, c++, java,
            JavaScript and know html, css , bootstrap, tailwind. I love to learn
            new things.{' '}
          </p>
          <button className='aboutbtn'>See more</button>
        </div>
      </div>
    </div>
  )
}

export default About
