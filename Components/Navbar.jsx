import React, { useState } from 'react'

const Navbar = ({userName}) => {
    const[isLogin, setIsLogin]= useState(false);

    const handleLogin = () =>{
        setIsLogin(true);
    }
  return (
    <header className="bg-white shadow-md py-4 px-6  flex justify-between items-center">
      <div className="logo text-xl font-bold text-gray-800">
        Your Logo
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Services</a></li>
          <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
          <li><a href="#" >
          {!isLogin ? (
            <button  onClick={handleLogin} className='flex item-center text-black rounded-md'>
                Log-In
            </button>
          ) : (
            <img
              src='https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=800'
              alt='Avatar'
              className='w-8 h-8 rounded-full'
            />
          )}
            </a></li>
          {userName && <li className="text-gray-800 font-semibold">{userName}</li>}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar