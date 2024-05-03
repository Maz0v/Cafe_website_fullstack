import React from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className='py-10'>
        <About />
      </div>
      <div className='py-10'>
        <Footer />
      </div>
    </>
  )
}

export default Aboutus
