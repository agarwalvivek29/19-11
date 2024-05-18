import React from 'react';
import Navbar from '../Components/Navbar';

const Product = () => {
  const props = {
    title: "Sustainable Solution",
    image: "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    logo: "https://images.pexels.com/photos/23221538/pexels-photo-23221538/free-photo-of-a-white-flower-with-green-leaves-in-the-dark.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    description: "Showcasing the harmony between nature and technology, this token represents our commitment to a sustainable future. Own a piece of eco-conscious innovation today",
    lancer: "EcoTech",
    requirements: [
      {
        current_bid: "4.1",
        auction_closed_in: "2d 11h 36m 42s",
      }
    ]
  };

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />
      <div className='container mx-auto p-10'>
        <div className='flex flex-col md:flex-row items-center gap-10 py-10'>
          <div className='flex-shrink-0'>
            <img
              src={props.image}
              className='w-80 h-80 rounded-md shadow-lg object-cover'
              alt='Product'
            />
          </div>
          <div className='flex-1 space-y-6'>
            <div className='flex items-center space-x-6'>
              <img
                className='inline-block h-12 w-12 rounded-full shadow-md'
                src={props.logo}
                alt='Logo'
              />
              <div className='text-2xl font-semibold text-gray-900'>
                {props.lancer}
              </div>
            </div>
            <div className='text-lg text-gray-700'>
              {props.description}
            </div>
            <div className='text-lg text-gray-700'>
              <div><strong>Current Bid:</strong> {props.requirements[0].current_bid}</div>
              <div><strong>Auction Closes In:</strong> {props.requirements[0].auction_closed_in}</div>
            </div>
            <div className='flex space-x-4'>
              <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>
                Place Bid
              </button>
              <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
