import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
        <Image src={'/logo.png'} width={90} height={50} alt='logo' className=''/> 
    </Link>
  )
}

export default Logo