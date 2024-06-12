import React, { useEffect, useState } from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import Slider from "react-slick";
import Cards from './Cards';

function Menu() {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const getMenu = async () => {
            try {
                const res = await axios.get("http://localhost:4001/menu")
               // console.log(res.data)
                setMenu(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMenu()
    }, [])

    const filteredData = menu.filter((data) => data.category === "Cafe")
   // console.log(filteredData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className="font-bold text-3xl pb-2">Our Cafeteria <span className='text-yellow-600'>Foods</span></h1>
                    <p>Discover a world of flavors and comfort at <span className='text-yellow-700 '>Ov's</span> cafe where every dish tells a story of tradition and taste!</p>
                </div>
                
                <div>
                    <Slider {...settings}>
                      {filteredData.map((item)=>(
                        <Cards item={item} key={item.id}/>
                      ))}
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default Menu
