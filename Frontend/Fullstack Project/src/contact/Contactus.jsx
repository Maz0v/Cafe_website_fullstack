import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function Contactus() {
  return (
    <>
    <Navbar />
    <div className='py-10'>
    <Contact />
    </div>
    <div className='py-10'>
    <Footer />
    </div>
    
</>
  )
}

export default Contactus
