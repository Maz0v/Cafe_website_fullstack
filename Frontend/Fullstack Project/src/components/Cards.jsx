import React from 'react'

function Cards({ item }) {
   // console.log(item)
    return (
        <>
            <div className='mt-5 my-3 p-3 transform transition-transform duration-300 ease-in-out hover:scale-105'>
                <div className="card w-92 bg-base-100 shadow-xl dark:bg-slate-800 dark:text-white ">
                    <figure><img src={item.image}  alt="Shoes"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary ">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border[2px] hover:bg-yellow-500 hover:text-white duration-200">Order Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cards
