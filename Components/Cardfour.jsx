import React from 'react'

export function Cardfour({topic,Discription,button}) {
  return (
    <div className="flex w-full  flex-col items-center rounded-md border-t border-b md:flex-row">
      <div className="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="px-40 py-20 justify-center">
        <div >
          <h1 className="inline-flex items-center text-lg font-semibold">
            {topic}
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {Discription}
          </p>
          <div className="mt-4">
          <button
            type="button"
            className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
              {button}
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cardfour;