import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <div className="fixed  w-full z-50 bg-transparent  ">
      <div className="container mx-auto my-4">
        <nav className="flex items-center  justify-between">
          <div className=" flex w-full  justify-around  gap-8 sm:px-16 py-8 font-bold ">
            <Link href="/amhere"  className='text-6xl '>iamhere</Link>
            <div className='  flex flex-col items-center justify-center '>
            <MobileMenu/>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;