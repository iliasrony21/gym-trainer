import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='background'>
        <Container>
          <Navbar.Brand href='#home'>
            <span className='brandname'>
              FIT <span className='and'>&</span> FINE
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link to='#home'>
                <Link className='alllink' to='/home'>
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title='Training' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  Personal Training
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Online Personal Training
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Pre and post natal training
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Pilates Training
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Nutrition' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  Nutritional Advice
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Nutrition for general health
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Nutrition for loss fat
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Muscle Building diet and training
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Treatment' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>
                  Neck Pain
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Back Pain
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Knee Pain
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Sports Injuries
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#about'>
                <Link className='alllink' to='/about'>
                  About
                </Link>
                <Link className='alllink' to='/blogs'>
                  blogs
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#login'>
                <Link className='alllink' to='/login'>
                  Login
                </Link>
              </Nav.Link>

              <Nav.Link eventKey={2} href='#memes'>
                <Link className='alllink' to='/signup'>
                  <button className='buttonsign'>SignUp</button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
