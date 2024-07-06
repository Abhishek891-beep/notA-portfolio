"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import prisma from "@/lib/client";
import { ThankYou } from '@/components/Thanku';

function Page() {
    const [open , setOpen] = useState(false);
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [opinion , setOpinion] = useState("");

    const handler =async ()=> {
        const apiEndpoint = process.env.NEXT_AUTH_URL;
        

        try{
            const res = await fetch(`/api/whoareu` , {
                cache: "no-store",
                method: "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({name : name , email:email, opinion:opinion})
            })
            const data = await res.json();
            setOpen(!open);

        }catch(e)
        {
            console.log(e);
        }

    }


  return (
    <>
    <div  style={{ backgroundImage: `url("/you2.jpg")`}} className='w-screen h-screen md:bg-contain  bg-center p-20  flex flex-col items-center  '>
    
    { open === false ?             <div className='container flex flex-col gap-2 items-center justify-center w-128 h-80 bg-transparent border-l-gray-950 rounded-3xl shadow-2xl'>
                <div className='font-semibold'>who are u?</div>
                <span className='font-bold'>and</span>
                <div className='font-extrabold text-2xl'> what do you think !</div>
                    <input className='rounded-lg p-1' type="text" name="name" onChange={(e)=> setName(e.target.value)} placeholder='name'  />
                    <input className='rounded-lg p-1' type="text" name="email" onChange={(e)=> setEmail(e.target.value)}  placeholder='email'  />
                    <input className='rounded-lg h-12  p-1' type="text" onChange={(e)=> setOpinion(e.target.value)} placeholder='what do you think ??'  />
                    <button  onClick={handler} className='bg-black text-white rounded-xl p-2'>donee</button>
            </div> :   <ThankYou/>  }

    </div>
    </>
  )
}

export default Page




