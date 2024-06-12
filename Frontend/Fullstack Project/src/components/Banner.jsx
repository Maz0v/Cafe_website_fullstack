import React from 'react'
import cafe from "../../public/cafe.png"
import cafe2 from "../../public/cafe 2.jpg"
function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">Hello, Welcome to <span className='text-yellow-500 '>Ov's Cafe</span>. Choice of every Generation...</h1>
                        <p className="text-xl font-medium">
                            At Ov's Cafe, we're dedicated to providing you with a memorable dining experience that combines exceptional food, friendly service, and a cozy atmosphere. Whether you're stopping by for a quick coffee break or settling in for a delicious meal, we want you to feel right at home.
                        </p>
                        <h2 className="text-4xl font-bold">Our <span className='text-yellow-500 '>Story</span>...</h2>
                        <p className="text-xl font-medium">
                        <span className='text-yellow-700 '>Ov's Cafe</span> was founded with a passion for bringing people together over great food and drinks. Since opening our doors in 20<span className='text-yellow-600 '>24</span>, we've been committed to using high-quality, locally sourced ingredients to create dishes that are both fresh and flavorful. Our talented team of chefs crafts each meal with care, ensuring every bite is a delight.
                        </p>
                        {/* <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                      */}
                    </div>
                    {/*<button className="btn mt-6 btn-warning">Submit</button>*/}
                </div>
                <div className="order-1 w-full  md:w-1/2"><img src={cafe} className='w-55 h-55 px-0 md:px-5 ml:0 md:ml-3 mt-12 md:mt-5' alt="" /></div>
            </div>
        </>

    )
}

export default Banner
