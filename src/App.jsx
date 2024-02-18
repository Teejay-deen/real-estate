import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import NavBar from './Components/NavBar'
import About from './pages/About'
import Blog from './pages/Blog'
import Faq from './pages/Faq'
import BecomeAgent from './pages/BecomeAgent'
import ContactUs from './pages/ContactUs'


const App = () => {
  return (
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/become-agent' element={<BecomeAgent />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App