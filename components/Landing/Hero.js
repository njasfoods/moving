
import Image from 'next/image'
import QuoteForm from '../Form'
import dynamic from 'next/dynamic'

// const DynamicMap = dynamic(() => import('@/components/Map'),
//     { 
//       loading: () => <p>A map is loading</p>,
//       ssr: false,
//     }
//   )
const Hero = () => {
  


  return (
    <section className='min-h-screen flex flex-col md:flex-row pt-16 '>
    <div className='md:w-2/3 relative h-full w-full'>
   <div className='relative w-full h-[32vh] md:h-screen '>
        <Image src={'/move.jpg'} alt='' fill className='object-cover bg-center' />
      </div>
    </div>
    <div className='md:w-1/3 bg-primary  text-center p-8  text-white'>
        <h2
          className='text-4xl mb-4 font-bold'>Get a FREE Moving Quote</h2>
        <p className='font-thin'>Or call our customer service representative at 902-200-5050</p>

        <QuoteForm/>

    </div>
  </section>
  )
}

export default Hero