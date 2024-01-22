'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { FacebookRounded, Instagram } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className="bg-primary">
    <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
 <Logo/>

        <p className="text-sm text-secondary">© Copyright 2024. All Rights Reserved.</p>

        <div className="flex -mx-2">
        <Link href="https://www.facebook.com/SmallMovesHFX/" className="mx-2 text-secondary transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
           <FacebookRounded/>
        
        </Link>
    
    
        <Link href="https://www.instagram.com/smallmoveshfx/" className="mx-2 text-secondary transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
            <Instagram/>
        </Link>
    </div>
    
    </div>
</footer>
  )
}

export default Footer