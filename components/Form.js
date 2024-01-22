'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LocationAutocomplete from './TextInput';
import { calculateMovingCost, getRouteDistance } from '@/utils/distanceCalculator';
import { useRouter } from 'next/navigation';
import { useFormContext } from '@/context/FormContext';



const QuoteForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const { state, dispatch } = useFormContext();



  const handleSelectLocation = ({ coordinates, inputName }) => {
    const {lat, lng} = coordinates
    if (inputName === 'from') {
      // Handle moving from location
      setFromLocation({ lat, lng });
      setValue("from",{ lat, lng })
    } else if (inputName === 'to') {
      // Handle moving to location
      setToLocation({ lat, lng });
      setValue("to",{ lat, lng })

    }
  };

  const onSubmit = async (data) => {
    try {
      const {from, to, name, email, phone, date} = data

      const distance = await getRouteDistance(from, to)

      const cost = calculateMovingCost(distance)
      // console.log("Cost:$", cost)
      // console.log({from, to, distance,name, email, phone, date})
      dispatch({
        type: 'SAVE_USER_INFO', 
        payload:{from, to, distance,name, email, phone, date}
      })
      router.push('/success')
      
    //   const response = await fetch('/api/email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({cost, name, email, phone, date}),
    // });

    

    //   if (response.data.success) {
    //     // Form submission was successful, route user to the success page
    //     router.push('/success'); // Replace '/success' with your actual success page route
    //   } else {
    //     // Handle other scenarios, show error message, etc.
    //     console.error('Form submission failed:', response.data.error);
    //   }
    
      // Handle success, route user to the success page, etc.
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='py-8'>
        <div className='grid grid-cols-2 gap-4 mb-8 text-start placeholder-gray-900'>
       
        <div> 
          <label className='font-medium'>Full name</label> 
          <input type='text' className='p-1.5 w-full rounded' {...register('name', { required: 'Your full name from is required' })} /> 
        </div> 
        
        <div> 
          <label className='font-medium'>Email address</label> 
          <input type='text' className='p-1.5 w-full rounded' {...register('email', { required: 'Email address from is required' })} /> 
        </div>
        
        <div> 
          <label className='font-medium'>Phone number</label> 
          <input type='text' className='p-1.5 w-full rounded' {...register('phone', { required: 'Phone number is required' })} /> 
        </div> 

        <div> 
          <label className='font-medium'>Moving date</label> 
          <input type='date' className='p-1.5 w-full rounded text-black' {...register('date', { required: 'Date is required' })} /> 
        </div>
     
        <div>
        <label className='font-medium'>Moving from</label>
        <LocationAutocomplete onSelectLocation={handleSelectLocation} inputName="from"  />
      </div>

      <div>
        <label className='font-medium'>Moving to</label>
        <LocationAutocomplete onSelectLocation={handleSelectLocation}  inputName="to" />
      </div>
    </div>
        <button type='submit' className='w-full p-4 bg-sky-900 font-bold text-lg rounded'>
          Get a Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
