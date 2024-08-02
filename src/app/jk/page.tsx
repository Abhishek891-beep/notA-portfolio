"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Page() {
  const [read ,setRead] = useState(false);
  const [read2 ,setReadd] = useState(false);


  const handler = ()=> {
    setRead(!read);
  }

  const handler2 = () => {
    setReadd(!read2)
  }

  return (
    <>
    
    <div  style={{ backgroundImage: `url("/k2.jpg")`}} className='w-screen h-screen md:bg-contain  bg-center p-20  flex flex-col items-center   '>
        <div className='bg-transparent flex rounded-xl p-1 justify-between  w-full '>

        <button className='bg-transparent text-2xl font-bold rounded-md p-1'>Sssup with this guy!</button>
        </div>
        <div className='w-full '>
        <h3 className='text-white font-bold w-full text-lg '>know more by touching tip of his <span className='text-orange-500'>nose!</span>  Yessh  </h3>
        </div>
          { read2 &&   <div className=' w-64 h-full  grid-cols-1  py-10  md:w-full md:h-96 bg-transparent grid md:grid-cols-3 '>
            <div className='bg-transparent'> </div>
            <div className='bg-transparen'></div>
            <div className='  md:bg-transparent rounded-xl text-black font-bold overflow-scroll p-1 no-scrollbar'><div className='py-2'>MR.JidduKRishnamurthy </div>  𝚒 𝚔𝚗𝚘𝚠 𝚝𝚑𝚒𝚜 𝚐𝚞𝚢 , 𝚒 𝚕𝚘𝚟𝚎 𝚝𝚑𝚒𝚜 𝚐𝚞𝚢 , 𝚒 𝚠𝚒𝚕𝚕 𝚠𝚛𝚒𝚝𝚎 𝚖𝚘𝚛𝚎 𝚊𝚋𝚘𝚞𝚝 𝚝𝚑𝚒𝚜 𝚐𝚞𝚢 𝚊𝚜 𝚜𝚘𝚘𝚗 𝚊𝚜 𝚒  𝚌𝚛𝚘𝚜𝚜 𝟽𝟻 % 𝚊𝚝𝚝𝚎𝚗𝚍𝚊𝚗𝚌𝚎 .  <span><button className='bg-transparent text-black block p-2 rounded-xl' onClick={handler2}>Close!</button></span>  <span className=' bg- text-black p-2 rounded-xl block font-bold'><Link href="/">Home!</Link></span></div>
          </div> }
        <div className='bg-transparent flex flex-col items-center justify-center w-full h-full '>
          <div className='bg-transparent w-full px-40'>
          <div className='flex justify-end bg-transparent h-14  w-24'><button className="bg-transparent w-24 h-14"   onClick={handler2}>.</button> </div>
          </div>
        </div>
        <div className='bg-transparent relative h-full w-36 '>
            <button className='w-full h-full bg-transparent' onClick={handler2}><span className='bg-white p-2 rounded-lg'>hi there</span></button>
        </div>
    </div>
    </>
  )
}

export default Page