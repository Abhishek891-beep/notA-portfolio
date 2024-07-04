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
            <div className='  md:bg-black rounded-xl text-white overflow-scroll p-1 no-scrollbar'><div className='py-2'>MR.JidduKRishnamurthy </div>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, tenetur dolorem. Qui corrupti consequatur placeat tenetur unde optio, reiciendis molestiae perspiciatis? Distinctio, blanditiis a odit itaque asperiores reprehenderit quam aliquam. Officiis maxime, dolore quod consequuntur architecto impedit voluptas voluptatum eligendi tempora nisi unde veritatis dicta at repellendus deserunt ullam nulla explicabo, temporibus eaque a blanditiis ratione cum odit sint. Natus deleniti vitae saepe dolor modi possimus placeat, ratione optio earum in iste blanditiis quibusdam magnam itaque quo! Animi, accusantium quo similique vero voluptatum, ratione iusto, ullam ipsa eveniet debitis maxime eum ex? Blanditiis perspiciatis rerum laudantium suscipit illum dolor impedit in accusantium labore nihil consequatur ducimus officiis, harum a pariatur et cupiditate, itaque nam dicta dolore. Laudantium quia sequi repellendus beatae esse, aspernatur dolores asperiores officiis ratione obcaecati accusamus tempore, dignissimos nesciunt quos? Inventore eius animi sequi ut. Placeat, qui earum cum veniam architecto maxime ad error at expedita ut nisi, nam deleniti soluta laudantium, velit vel fuga neque ratione provident. Itaque ut earum explicabo repudiandae cupiditate, eligendi nostrum commodi fugiat dolore ipsum dolorem eius soluta consectetur tenetur doloribus reprehenderit! Nobis tempora quisquam, ducimus, vel praesentium quas magnam quasi, aliquid adipisci nesciunt facere distinctio odio voluptatibus itaque harum a fuga!  <span><button className='bg-white text-black font-bold p-1 rounded-xl' onClick={handler2}>Close!</button></span>  <span className=' bg-white text-black p-2 rounded-xl font-bold'><Link href="/">Home!</Link></span></div>
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