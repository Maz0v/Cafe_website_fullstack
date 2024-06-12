import React, { useEffect, useState } from 'react'
import list from "../../public/list.json"
import axios from 'axios'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { get } from 'react-hook-form'
function Cuisine() {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const getMenu = async () => {
            try {
                const res = await axios.get("http://localhost:4001/menu")
                //console.log(res.data)
                setMenu(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMenu()
    }, [])



    const staterData = menu.filter((data) => data.category === "Appetizer")
    const maincourse = menu.filter((data) => data.category === "Main C")
    const bread = menu.filter((data) => data.category === "Rice & Bread")
    const desert = menu.filter((data) => data.category === "Dessert")

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='py-32 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>Satisfy Your Cravings with Our <span className='text-yellow-500 '>Delicious</span> and Diverse <span className='text-yellow-500 '>Menu!</span> </h1>
                    <p className='mt-12 text-xl'>
                        Welcome to <span className='text-yellow-600 '>Ov's Cafe</span>, where every dish is a delightful journey through a world of flavors! Our carefully curated menu offers a diverse range of options, from classic Bengali favorites to popular international snacks and beverages. Whether you're craving savory appetizers, hearty main courses, or delectable desserts, we have something for every taste. Indulge in our freshly prepared dishes, made with quality ingredients and served with a warm smile. Enjoy your meal and the welcoming atmosphere that makes our café a beloved local destination!
                    </p>
                    <Link to='/'>
                        <button className=' mt-12 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 duration-300 '>Back</button>
                    </Link>
                </div>
                <h2 className="text-xl md:text-2xl text-center">Appetizer Section</h2>
                <div className=' grid grid-cols-1 md:grid-cols-4'>
                    {
                        staterData.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))

                    }
                </div>
                <h2 className="text-xl md:text-2xl text-center">Main Course</h2>
                <div className=' grid grid-cols-1 md:grid-cols-4'>

                    {
                        maincourse.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }

                </div>
                <h2 className="text-xl md:text-2xl text-center">Rice & Bread</h2>
                <div className=' grid grid-cols-1 md:grid-cols-4'>

                    {
                        bread.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }

                </div>
                <h2 className="text-xl md:text-2xl text-center">Desserts</h2>
                <div className=' grid grid-cols-1 md:grid-cols-4'>

                    {
                        desert.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }

                </div>
                <div className='py-3 items-center justify-center text-center'>
                    <Link to='/' >
                        <button className=' mt-12 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 duration-300 '>Back</button>
                    </Link>
                </div>
                <p className='mt-12 mb-10 text-xl'>
                    We value your experience at <span className='text-yellow-600 '>Ov's Cafe</span> and strive to continuously improve our offerings. Your feedback is important to us! Please let us know what you enjoyed and how we can enhance your visit. Whether you have suggestions for new dishes, comments on our service, or just want to share your thoughts, we welcome your input. Feel free to speak with our staff or leave a review online. Thank you for dining with us, and we look forward to serving you again soon!                    </p>
            </div>
        </>
    )
}

export default Cuisine
