import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import { FormProvider } from '@/context/FormContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smallmoves HFx',
  description: 'Movers in Halifax who use a cargo van.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
     <FormProvider>
     <Navbar/>
     
      
      {children}
  
      
      
      <Footer/>
     </FormProvider>
      
      
     
      
      </body>
    </html>
  )
}
