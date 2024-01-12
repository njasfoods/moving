import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
    <Link href="/">
    SmallMoves HFx
</Link>

        <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

        <div className="flex -mx-2">
        <Link href="https://www.facebook.com/SmallMovesHFX/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
           
        
        </Link>
    
        <Link href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Instagram">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 2.472C6.09 2.472 1.56 7 1.56 12.908 1.56 18.818 6.09 23.346 12 23.346 17.91 23.346 22.44 18.818 22.44 12.908 22.44 7 17.91 2.472 12 2.472zm0 20.456c-4.09 0-7.372-3.282-7.372-7.372 0-1.937.756-3.79 2.125-5.16 1.37-1.37 3.223-2.124 5.16-2.124 1.936 0 3.79.756 5.16 2.124 1.37 1.37 2.124 3.223 2.124 5.16 0 4.09-3.282 7.372-7.372 7.372zm7.372-13.202c-.404 0-.727.324-.727.727s.324.727.727.727c.403 0 .726-.324.726-.727s-.323-.727-.726-.727z">
                </path>
                <path
                    d="M12 6.974c-2.448 0-4.426 1.978-4.426 4.426s1.978 4.425 4.426 4.425 4.425-1.977 4.425-4.425-1.977-4.426-4.425-4.426zm0 7.153c-1.503 0-2.726-1.222-2.726-2.726s1.222-2.726 2.726-2.726 2.726 1.222 2.726 2.726-1.222 2.726-2.726 2.726z">
                </path>
                <path
                    d="M19.682 4.048c-.96 0-1.74.78-1.74 1.739 0 .96.78 1.739 1.74 1.739.96 0 1.739-.78 1.739-1.74s-.78-1.74-1.74-1.74zm0 2.453c-.202 0-.365-.164-.365-.365s.163-.365.365-.365.365.164.365.365c0 .2-.163.365-.365.365z">
                </path>
            </svg>
        </Link>
    
        <Link href="https://www.instagram.com/smallmoveshfx/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3 3H21V21H3V3ZM10 19H6V10H10V19ZM8 14.375C8 15.25 7.25 16 6.375 16C5.5 16 4.75 15.25 4.75 14.375C4.75 13.5 5.5 12.75 6.375 12.75C7.25 12.75 8 13.5 8 14.375ZM20 19H16V13.438C16 12.425 15.105 11.5 14 11.5C12.85 11.5 12 12.425 12 13.438V19H8V10H12V11.5C12 11.5 14 11.5 14 10H20V19Z">
                </path>
            </svg>
        </Link>
    </div>
    
    </div>
</footer>
  )
}

export default Footer