import React from 'react'
import Homepage from './home/Homepage'
import { Route, Routes } from 'react-router-dom'
import Menus from './menu/Menus'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Contactus from './contact/Contactus'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/menu' element={<Menus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contactus />} />

      </Routes>

    </>
  )
}

export default App
