"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

function MobileMenu() { 
    const [isOpen , setIsOpen] = useState(false);



  return (
    <div className=''>
        <div onClick={()=> setIsOpen(prev =>! prev)} className='flex flex-col curson-pointer gap-[4.5px]'>
            <div className={`w-10 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : "" } origin-left ease-in-out duration-500`  }></div>
            <div className={`w-10 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : "" }`  }></div>
            <div className={`w-10 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : "" } origin-left ease-in-out duration-500`  }></div>
        </div>
        {isOpen && (
            <div className='absolute left-0 w-full h-[calc(100vh-96px)] bg-transparent flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'> 
                <div><Link className='font-bold text-3xl' href='/whoareu'>whoU</Link></div>
            </div>
        )}
    </div>
  )
}

export default MobileMenu