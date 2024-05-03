import React from 'react'
import cafe from "../../public/cafe.png"
import cafe2 from "../../public/cafe2.png"
function About() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className="flex justify-center items-center">
                <div className=" "><img src={cafe2} className='w-85 h-85 px-0 md:px-5 ml:0 md:ml-0  mt-12 md:mt-5' alt="" /></div>
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">About <span className='text-yellow-500 '>Us...</span></h1>
                        <p className='text-xl font-medium'>
                        <span className='text-yellow-600 '>Ov's Cafe</span> is a haven for coffee lovers and community connectors, established in Memari, West Bengal on February 18th, 2024. Our story began with a passion for delicious coffee and a desire to create a warm and inviting space for people to gather, connect, and create lasting memories.
<br/>
<br/>
At  <span className='text-yellow-600 '>Ov's Cafe</span>, we believe that coffee is more than just a beverage; it's an experience. We source our beans from around the world, ensuring the highest quality and freshest flavors. Our skilled baristas are passionate about their craft and dedicated to creating the perfect cup every time.
<br/>
Beyond coffee,  <span className='text-yellow-600 '>Ov's Cafe</span> offers a variety of delectable treats, from pastries and sandwiches to salads and light bites. Also we provide Authentic Bengali Cuisines. Please check our menu. We use only the freshest ingredients to create a menu that caters to every taste bud.
<br/>
<br/>
We are more than just a cafe; we are a community hub. Whether you're catching up with friends, working remotely, or simply enjoying a quiet moment with a good book, <span className='text-yellow-600 '>Ov's Cafe</span> is your home away from home. We host regular events, bringing people together through shared interests and fostering a sense of belonging.
<br/>
<br/>
Thank you for choosing  <span className='text-yellow-600 '>Ov's Cafe</span>. We look forward to serving you and becoming a part of your daily routine.
                        </p>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}

export default About
