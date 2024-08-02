import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {



  return (
    <div  style={{ backgroundImage: `url("/mybg2.jpg")`}} className='w-screen flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat'>
      <div className='flex flex-col items-center justify-center '>
        <div className='w-96 h-96 p-4 gap-2 bg-transparent border-separate  ' >
                <span className='block font-extrabold'>𝚑𝚒𝚒</span>
                <span className='block font-extrabold '>𝚑𝚒 𝚝𝚑𝚎𝚛</span> 
                <span className='block font-extrabold'>𝚒 𝚊𝚖 𝚑𝚎𝚛𝚎</span>
                
                <span className='block font-extrabold'> 𝚒 𝚌𝚊𝚗 𝚋𝚎 𝚑𝚎𝚛𝚎 <a href="https://x.com/abinotagi" target="_blank" rel="noopener noreferrer" className="font-bold underline text-black p-4 rounded-lg"> 
            𝕏.𝕔𝕠𝕞
            </a></span>

            <span className='block font-extrabold'>  𝚒 𝚠𝚒𝚕𝚕 𝚋𝚎 𝚑𝚎𝚛𝚎 <a href="https://github.com/ab-kg" target= "_blank" className='font-bold  p-4  text-black underline '  > 𝔾𝕚𝕥ℍ𝕦𝕓.𝕔𝕠𝕞 </a>  </span>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default page