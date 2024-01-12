import About from '@/components/Landing/About-us'
import FAQs from '@/components/Landing/FAQs'
import Hero from '@/components/Landing/Hero'
import Service from '@/components/Landing/Service'
import Testimonial from '@/components/Landing/testimonial'

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <Service/>
    <Testimonial/>
    <FAQs/>
  </main>
  )
}
