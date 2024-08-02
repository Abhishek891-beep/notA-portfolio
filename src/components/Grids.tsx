"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import { Germania_One } from "next/font/google";
import Jkrishnamurthy from "./Jkrishnamurthy";
import SteveJobs from "./SteveJobs"
import Geohot from "./Geohot"
import Fred from "./Fred";

// const repeat =   {
//     href: "/topic1" ,
//     src : "/k.jpg"
//   }

// const repeat2 = {
//     href : "/topic1",
//     src : "/dino.jpg"
// }
// const repeat3 = {
//     href : "/topic1",
//     src : "/sp.jpg"
// }
// const repeat4 = {
//     href : "/topic1",
//     src : "/gud.png"
// }


  
//   const data = [ {
//     href : "topic1" ,
//     src : "/k.jpg"
//   } ];
  
//   let  me = 0 ;
  
//   for( me ; me < 25; me++)
//   {
//     data.push(repeat);
//     data.push(repeat2)
//     data.push(repeat3)
//     data.push(repeat4)
//   }
  
//   console.log(data)
  
  
  

  
  const Grid = () => {
    const containerRef = useRef(null);

  
    useEffect(() => {
      if (containerRef.current) {
        // Scroll to the center of the grid initially
        const container = containerRef.current;
        //@ts-ignore 
        container.scrollTo({
          // @ts-ignore
          top: container.scrollHeight / 2 - container.clientHeight / 2,
          // @ts-ignore
          left: container.scrollWidth / 2- container.clientWidth / 2,
          behavior: 'smooth',
        });
      }

    }, []);

    const getRandomValue = () => {
        return Math.floor(Math.random() * 3);
    };
  
    return (
      <div>
        <Head>
          <title>10x10 Scrollable Grid</title>
        </Head>
        <div  >
                <div  style={{ backgroundImage: `url("/bgc.jpg")`}} className="flex items-center justify-center min-h-screen bg-gray-100">
                <div ref={containerRef} className="relative w-screen h-screen overflow-auto no-scrollbar">
                    <div className="grid grid-cols-10 grid-rows-10  transform rotate-6 w-[6000px] h-[3000px] overflow-hidden no-scrollbar">

                        {Array.from( {length: 100} , (_ , i)=> (
                            <div className={`   `} key={i}>
                              {i % 2 == 0 ? <SteveJobs/> : ""}
                               {i % 2 != 0 ?  <Jkrishnamurthy/> : "" }
                               {i}
                            </div>
                        ) )}

                        
                    </div>
                </div>
                </div>

        </div>
      </div>
    );
  };

export default Grid;

// 6 12 18 24 30 --> geo 
// jk = 50 - 16  = 34 = 2 4  8 10 12 
// geo = 16 
// sj = 1 3 5 7 
