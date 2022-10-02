import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blogs from './Pages/Blogs/Blogs'
import About from './Pages/Home/About/About'
import Home from './Pages/Home/Home/Home'
import Login from './Pages/Login/Login'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import Signup from './Pages/Signup/Signup'

function App () {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
