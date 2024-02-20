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
import Privacy from './pages/Privacy'
import TermOfServices from './TermOfServices'
import ForgotPassword from './pages/ForgotPassword'


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
        <Route path='/privacy-policies' element={<Privacy />}/>
        <Route path='/term-of-services' element={<TermOfServices />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App