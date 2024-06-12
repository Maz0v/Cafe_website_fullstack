import React from 'react'
import Homepage from './home/Homepage'
import { Navigate, Route, Routes } from 'react-router-dom'
import Menus from './menu/Menus'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Contactus from './contact/Contactus'
import Aboutus from './about/Aboutus'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Login from './components/Login'

const App = () => {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={authUser?<Menus />:<Navigate to="/signup"/> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contactus />} />
       // <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    <Toaster />
    </>
  )
}

export default App
