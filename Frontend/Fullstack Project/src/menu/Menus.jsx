import React from 'react'
import Navbar from '../components/Navbar'
import Cuisine from '../components/Cuisine'
import Footer from '../components/Footer'
import list from '../../public/list.json'
function Menus() {
  return (
   <>
   <Navbar />
   <div className='min-h-screen'>
   <Cuisine />
   </div>
   
   <Footer />
   </>
  )
}

export default Menus
