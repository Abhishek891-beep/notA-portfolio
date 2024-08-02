"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Page() {
  const [read2 ,setReadd] = useState(false);

  const handler2 = () => {
    setReadd(!read2)
  }

  return (
    <>
    <div  style={{ backgroundImage: `url("/sj1.jpg")`}} className='w-screen h-screen md:bg-contain  bg-center p-20  flex flex-col items-center  '>
        <div className='bg-transparent flex rounded-xl p-1 justify-between  w-full '>
        <button onClick={handler2} className='bg-transparent text-white rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent border text-white rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent border text-white rounded-md p-1'>Read.... </button>
        </div>

          { read2 &&   <div className='w-full h-96 bg-transparent grid grid-cols-3 '>
            <div className='bg-transparent'> </div>
            <div className='bg-transparen'></div>
            <div className='bg-black rounded-xl text-white overflow-scroll p-4 no-scrollbar'><div className='py-2'>𝚂𝚝𝚎𝚟𝚎 𝙹𝚘𝚋𝚜</div> 𝚒 𝚔𝚗𝚘𝚠 𝚝𝚑𝚒𝚜 𝚐𝚞𝚢 , 𝚒 𝚕𝚘𝚟𝚎 𝚝𝚑𝚒𝚜 𝚐𝚞𝚢 , 𝚒 𝚠𝚒𝚕𝚕 𝚠𝚛𝚒𝚝𝚎 𝚖𝚘𝚛𝚎 𝚊𝚋𝚘𝚞𝚝 𝚝𝚑𝚒𝚜 𝚐𝚞𝚢 𝚊𝚜 𝚜𝚘𝚘𝚗 𝚊𝚜 𝚒  𝚌𝚛𝚘𝚜𝚜 my 𝟽𝟻 % 𝚊𝚝𝚝𝚎𝚗𝚍𝚊𝚗𝚌𝚎 . <span><button className='bg-transparent text-white block font-bold p-2 rounded-xl' onClick={handler2}>Close!</button></span>  <span className=' bg-transparent text-whtie p-2 rounded-xl font-bold'><Link href="/">Home!</Link></span></div>
          </div>  }
    </div>
    </>
  )
}

export default Page