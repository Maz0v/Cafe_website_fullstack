import React from 'react'
import { useForm } from "react-hook-form"
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>

            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-28 flex items-center justify-center ">
                
                <form onSubmit={handleSubmit(onSubmit)} >
                <span className='text-3xl font-bold'> Contact Us</span>
                    <div className='space-y-2 mt-4'>
                        <h2>Name</h2>
                        <input type="text" placeholder="Enter your name" className="input  input-sm w-full max-w-xs "
                            {...register("name", { required: true })}

                        />
                    </div>
                    <br />
                    <div className='space-y-2'>
                        <h2>Email</h2>
                        <input type="text" placeholder="Enter your email" className="input  input-sm w-full max-w-xs"
                            {...register("email", { required: true })}

                        />
                    </div>
                    <br />
                    <div className='space-y-2'>
                        <h2>Message</h2>
                        <textarea className="textarea" placeholder="Type your Message"
                            {...register("message", { required: true })}

                        ></textarea>
                    </div>
                    <br />
                    <button className='bg-yellow-500 rounded-md px-3 py-1 hover:bg-yellow-600 duration-200 '>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Contact
