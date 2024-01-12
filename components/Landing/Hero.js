import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <section className='min-h-screen flex flex-col md:flex-row pt-14 md:pt-12  '>
    <div className='md:w-2/3'>
      <div className='relative w-full h-[32vh] md:h-screen'>
        <Image src={'/moving.jpg'} alt='' fill className='object-cover bg-center' />
      </div>
    </div>
    <div className='md:w-1/3 bg-sky-500  text-center p-8 text-white'>
        <h2 className='text-4xl mb-4 font-bold'>Get a FREE Moving Quote</h2>
        <p className='font-thin'>Or call our customer service representative at 902-200-5050</p>

        <form className='mt-8'>
          <div className='grid grid-cols-2 gap-8 mb-8 text-start'>
            <div>
              <label className='font-medium'>Full name</label>
              <input type='text' className='p-1.5 w-full rounded'/>
            </div>
            <div>
              <label className='font-medium'>Email address</label>
              <input type='text' className='p-1.5 w-full rounded'/>
            </div>
            <div>
              <label className='font-medium'>Phone number</label>
              <input type='text' className='p-1.5 w-full rounded'/>
            </div>
            <div>
              <label className='font-medium'>Moving date</label>
              <input type='text' className='p-1.5 w-full rounded'/>
            </div>
            <div>
              <label className='font-medium'>Moving from</label>
              <input type='text' className='p-1.5 w-full rounded'/>
            </div>
            <div>
              <label className='font-medium'>Moving to</label>
              <input type='text' className='p-1.5 w-full rounded'/>
            </div>
          </div>
          <button className='w-full p-4 bg-sky-800 font-bold text-lg rounded'>Get a Quote</button>
        </form>
    </div>
  </section>
  )
}

export default Hero