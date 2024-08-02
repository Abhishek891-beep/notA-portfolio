import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Geohot() {
  return (
        <div  >
          <Link href="/jk" > <Image src='/hotz.jpg' className="w-full h-full object-cover border shadow-lg"  width={480} height={300}   alt=""></Image> </Link>
        </div>
  )
}

export default Geohot