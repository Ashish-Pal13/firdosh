import React from 'react'
import Image from 'next/image';
import comping_soon from "../../../../public/galleries/imagecomingsoon-01.svg";
import {Navbar} from '@/components/navbar';

function page() {
  return (
    <div className='bg-[#f3efdf] '>
        <Navbar/>
        <div className='h-[100vh] flex justify-center items-center p-4'>
              <Image src={comping_soon} alt="comping_soon"></Image>
        </div>
    </div>
  )
}

export default page

