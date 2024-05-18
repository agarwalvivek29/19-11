import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import CardOne from '../Components/CardOne';
import Cardfour from '../Components/Cardfour';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import  Aos from 'aos';
import 'aos/dist/aos.css'

const Landing = () => {
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <div className='relative z-40'>
      <Navbar />
      <div className='flex justify-evenly item-center py-10'>
        <motion.img
          src='https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-autumn-leaf-in-cartoon-illustration-png-image_11606572.png'
          alt='leaf img'
          className='w-60 h-60 rounded-md shadow-lg'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.span
          className='text-6xl font-semibold text-gray-800 leading-loose'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Discover Sustainable<br />carbon solution
        </motion.span>
      </div>
      <div className='flex justify-end justify-evenly items-center py-10 gap-20'>
        <Search />
        <motion.img
          src='https://png.pngtree.com/png-vector/20240204/ourlarge/pngtree-autumn-leaf-in-cartoon-illustration-png-image_11606572.png'
          alt='leaf img'
          className='w-60 h-60 rounded-md shadow-lg'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
      <div className='border-t border-b text-lg font-semibold text-gray-800 px-10 leading-loose text-2xl'>
        How EcoTokenMarket works
      </div>
      <div className='flex justify-around py-8 ' data-aos = "fade-left">
        <CardOne username="Step 1" Discription="Enter your search.Find carbon credits or offsets from verified projects" />
        <CardOne username="Step 2" Discription="Select a product to learn more.Take a step towards offsetting carbon footprint" />
        <CardOne username="Step 3" Discription="Add to cart and proceed to checkout. Your green purchase is on its way!" />
      </div>
      <div className='border-t text-lg font-semibold text-gray-800 px-10 leading-loose text-2xl'>
        Join us at EcoTokenMarket
      </div>
      <div className='space-y-8 py-8'>
        <Cardfour topic="As a seller" Discription="List your eco projects for sale. Showcase sustainability with blockchain" button="Sell with us" />
        <Cardfour topic="As a buyer" Discription="Explore diverse carbon solution. Contribute to a green future." button="Buy tokens" />
        <Cardfour topic="As a partner" Discription="Collaborate for a sustainable marketplace. Drive green initiatives together" button="Partner with us" />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
