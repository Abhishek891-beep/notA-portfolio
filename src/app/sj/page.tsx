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
    <div  style={{ backgroundImage: `url("/sj1.jpg")`}} className='w-screen h-screen md:bg-contain  bg-center p-20  flex flex-col items-center  '>
        <div className='bg-transparent flex rounded-xl p-1 justify-between  w-full '>
        <button onClick={handler} className='bg-transparent rounded-md p-1'>Read</button>
        <button onClick={handler2}  className='bg-transparent rounded-md p-1'>Read</button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        <button onClick={handler2} className='bg-transparent rounded-md p-1'>Read.... </button>
        </div>
          { read &&         <div className='w-48 h-36 bg-white   rounded-xl p-1  '>
                <div>
                <h3>look his chest</h3>
              <h3>look his chest</h3>
              <h3>look his chest</h3>
              <h3>look his chest</h3>
              <h3>look his chest</h3>
                </div>
          </div>}

          { read2 &&   <div className='w-full h-96 bg-transparent grid grid-cols-3 '>
            <div className='bg-transparent'> </div>
            <div className='bg-transparen'></div>
            <div className='bg-black rounded-xl text-white overflow-scroll p-4 no-scrollbar'><div className='py-2'>MR.JidduKRishnamurthy </div>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, tenetur dolorem. Qui corrupti consequatur placeat tenetur unde optio, reiciendis molestiae perspiciatis? Distinctio, blanditiis a odit itaque asperiores reprehenderit quam aliquam. Officiis maxime, dolore quod consequuntur architecto impedit voluptas voluptatum eligendi tempora nisi unde veritatis dicta at repellendus deserunt ullam nulla explicabo, temporibus eaque a blanditiis ratione cum odit sint. Natus deleniti vitae saepe dolor modi possimus placeat, ratione optio earum in iste blanditiis quibusdam magnam itaque quo! Animi, accusantium quo similique vero voluptatum, ratione iusto, ullam ipsa eveniet debitis maxime eum ex? Blanditiis perspiciatis rerum laudantium suscipit illum dolor impedit in accusantium labore nihil consequatur ducimus officiis, harum a pariatur et cupiditate, itaque nam dicta dolore. Laudantium quia sequi repellendus beatae esse, aspernatur dolores asperiores officiis ratione obcaecati accusamus tempore, dignissimos nesciunt quos? Inventore eius animi sequi ut. Placeat, qui earum cum veniam architecto maxime ad error at expedita ut nisi, nam deleniti soluta laudantium, velit vel fuga neque ratione provident. Itaque ut earum explicabo repudiandae cupiditate, eligendi nostrum commodi fugiat dolore ipsum dolorem eius soluta consectetur tenetur doloribus reprehenderit! Nobis tempora quisquam, ducimus, vel praesentium quas magnam quasi, aliquid adipisci nesciunt facere distinctio odio voluptatibus itaque harum a fuga!</div>
          </div>  }

    </div>

        {read && <div>
              hw1: Hercules
          </div>}

    </>
  )
}

export default Page