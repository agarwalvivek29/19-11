import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const Form = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [trees, setTrees] = useState('');
  const [avgTreeAge, setAvgTreeAge] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedtwo, setIsCheckedtwo] = useState(false);

  return (
    <div>
      <Navbar />
      <div className='flex justify-around items-start py-10'>
        <div>
          <img
            src='https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
            className="w-80 h-80 rounded-md shadow-lg"
            alt="Campaign Image"
          />
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
          <form>
            <div className='mb-4'>
              <label className='block text-lg font-semibold text-gray-800 mb-2'>
                Token Name:
              </label>
              <input
                type='text'
                placeholder='Tree Name'
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                onChange={(e) => setName(e.target.value)}
              />
              <p className='mt-2 text-gray-600'>{name}</p>
            </div>

            <div className='mb-4'>
              <label className='block text-lg font-semibold text-gray-800 mb-2'>
                Token Symbol:
              </label>
              <input
                type='text'
                placeholder='Tree Symbol'
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                onChange={(e) => setSymbol(e.target.value)}
              />
              <p className='mt-2 text-gray-600'>{symbol}</p>
            </div>

            <div className='mb-4'>
              <label className='block text-lg font-semibold text-gray-800 mb-2'>
                Trees:
              </label>
              <input
                type='text'
                placeholder='Trees'
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                onChange={(e) => setTrees(e.target.value)}
              />
              <p className='mt-2 text-gray-600'>{trees}</p>
            </div>

            <div className='mb-4'>
              <label className='block text-lg font-semibold text-gray-800 mb-2'>
                Avg Tree Age:
              </label>
              <input
                type='text'
                placeholder='Average Tree Age'
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                onChange={(e) => setAvgTreeAge(e.target.value)}
              />
              <p className='mt-2 text-gray-600'>{avgTreeAge}</p>
            </div>

            <div className='mb-4'>
              <label className='block text-lg font-semibold text-gray-800 mb-2'>
                Coordinates:
              </label>
              <input
                type='number'
                placeholder='Coordinates'
                className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                onChange={(e) => setCoordinates(e.target.value)}
              />
              <p className='mt-2 text-gray-600'>{coordinates}</p>
            </div>

<div className='flex justify-around'>
            <div className='mb-4'>
              <input
                type='checkbox'
                className='mr-2 leading-tight'
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className='text-gray-600'>{isChecked ? 'Active' : 'Inactive'}</span>
            </div>

            <div className='mb-4'>
              <input
                type='checkbox'
                className='mr-2 leading-tight'
                checked={isCheckedtwo}
                onChange={(e) => setIsCheckedtwo(e.target.checked)}
              />
              <span className='text-gray-600'>{isCheckedtwo ? 'Active' : 'Inactive'}</span>
            </div>
            </div>

            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black p"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
