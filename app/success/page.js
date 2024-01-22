'use client'
import { useFormContext } from '@/context/FormContext';
import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
    const { state } = useFormContext();
    const {userInfo:{
        name, email
    }} = state

  return (
    <div className='min-h-screen flex flex-col justify-center items-center max-w-md mx-auto px-6 text-center'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-green-500 mb-16">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  
    </div>
      <h1 className='text-lg mb-4'>{`Hello, ${name}!`}</h1>
      <p>{`An email has been sent to ${email}. Thank you for using our service.`}</p>
      <Link href={'/'} className='mt-4 text-primary underline'>Back to home</Link>
    </div>
  );
};

export default SuccessPage;
