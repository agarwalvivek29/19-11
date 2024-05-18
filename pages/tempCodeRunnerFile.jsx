import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import CardOne from '../Components/CardOne';
import Cardfour from '../Components/Cardfour'
import Footer from '../Components/Footer';

const Landing = () => {
  return (
    <div className='relative z-40'>
      <Navbar />
      <div className='flex justify-around item-center py-10'>
        <img 
          src='https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-autumn-leaf-in-cartoon-illustration-png-image_11606572.png'
          alt='leaf img'
          className='w-60 h-60 rounded-md shadow-lg'
        />
        <span className="text-6xl font-semibold text-gray-800  leading-loose non-italic text-6xl gap-30">
          Discover Sustainable<br />carbon solution
        </span>
      </div>
      <div className='flex  justify-end  py-10 gap-20'>
        <Search />
        <img 
          src='https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-autumn-leaf-in-cartoon-illustration-png-image_11606572.png'
          alt='leaf img'
          className='w-60 h-60 rounded-md shadow-lg'
        />
      </div>
      <div className='border-t border-b text-lg font-semibold text-gray-800 px-10 leading-loose non-italic text-2xl justify-start '>
        How EcoTokenMarket works
      </div>
      <div className='flex justify-around py-8 '>
        <CardOne username="Step 1" Discription="Enter your search.Find carbon creditsor offsets from verified projects"/>
        <CardOne username="Step 2" Discription="Select a product to learn more.Take a step towards offsetting carbon footprint"/>
        <CardOne username="Step 3" Discription="Add to cart and proceed to chekout .your green purchase is on its way!"/>
      </div>
      <div className='border-t  text-lg font-semibold text-gray-800 px-10 leading-loose non-italic text-2xl justify-start '>
        Join us at EcoTokenMarket
      </div>
      <div className=''>
        <Cardfour topic="As a seller" Discription="List your eco projects for sale.Showcase sustainability with blockchain" button="Sell with us" />
        <Cardfour topic="As a buyer" Discription="Explore diverse carbon solution.Contribute to a green future." button="Buy tokens" />
        <Cardfour topic="As a partner" Discription="Collaborate for a sustainable marketplace .Drive green initatives together" button="Partner with us" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;

