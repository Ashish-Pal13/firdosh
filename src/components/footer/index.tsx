"use client";
import { BehanceLogo, FacebookLogo, InstagramLogo ,LinkedinLogo,TwitterLogo, YoutubeLogo} from '@phosphor-icons/react';
import Image from 'next/image';
import behance_logo from "../../../public/galleries/behance-1-01.svg";



export function Footer() {
  return (
    <div className=' flex flex-col justify-center items-center py-10 gap-4 bg-[#f3efdf]'>
        
          <div className='flex gap-6'>
              <a href="https://www.instagram.com/firdosh.__/" target="_blank" rel="noopener noreferrer">
                      <InstagramLogo size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300' />
              </a>
               <a href="https://x.com/Firdosh___" target="_blank" rel="noopener noreferrer">
                            <TwitterLogo size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300'/>
                </a>
                <a href="https://www.linkedin.com/in/firdosh-art/" target="_blank" rel="noopener noreferrer">
                     <LinkedinLogo size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300'/>
                  </a>
                <a href="https://www.behance.net/firdosh" target="_blank" rel="noopener noreferrer">
                       <BehanceLogo  size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300'/> 
                       {/* <Image src={behance_logo} alt="behance_logo" style={{height:"32"}}></Image> */}
                  </a>
                              </div>
         <p className='flex justify-center items-center text-sm sm:text-base'>COPYRIGHT © FIRDOSH 2024. ALL RIGHTS RESERVED.</p>
    </div>
  )
}


