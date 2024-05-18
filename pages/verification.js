import React, { useState } from 'react';
import Navbar from '../Components/Navbar';  // Adjust the import based on your Navbar location

const Verification = () => {
  const [orderId, setOrderId] = useState('1234567890');
  const [stage1Verified, setStage1Verified] = useState(false);
  const [stage2Verified, setStage2Verified] = useState(false);

  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-start py-10'>
        <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-4'>Verification Status</h2>
          <div className='mb-4'>
            <label className='block text-lg font-semibold text-gray-800 mb-2'>
              Order ID:
            </label>
            <p className='text-gray-600'>{orderId}</p>
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold text-gray-800 mb-2'>
              Stage 1:
            </label>
            <p className={`text-lg ${stage1Verified ? 'text-green-500' : 'text-red-500'}`}>
              {stage1Verified ? 'Verified' : 'Not Verified'}
            </p>
            <button
              className='mt-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
              onClick={() => setStage1Verified(!stage1Verified)}
            >
              {stage1Verified ? 'Unverify' : 'Verify'}
            </button>
          </div>
          <div className='mb-4'>
            <label className='block text-lg font-semibold text-gray-800 mb-2'>
              Stage 2:
            </label>
            <p className={`text-lg ${stage2Verified ? 'text-green-500' : 'text-red-500'}`}>
              {stage2Verified ? 'Verified' : 'Not Verified'}
            </p>
            <button
              className='mt-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
              onClick={() => setStage2Verified(!stage2Verified)}
            >
              {stage2Verified ? 'Unverify' : 'Verify'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
