import React from 'react'

export function CardTwo({title, description, price,image}) {

  

  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {description}
        </p>
        <div className='flex justify-around'>
            <div>
               <button
                   type="button"
                   className="mt-4 rounded-sm bg-white px-2.5 py-1 text-[10px] font-semibold text-black shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                   {price}
                </button>
            </div>
        <div>
            <button
                type="button"
                className="mt-4 rounded-sm bg-red-600 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Add
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default CardTwo