"use client";
import Image from 'next/image';
import {Navbar} from '@/components/navbar';
import logo from "../../../../public/images/download.png";
import contactImage from "../../../../public/galleries/contactImage.png";
import logocontact from "../../../../public/galleries/logocontact.svg";
import { BehanceLogo, FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';

function page() {
  return (
    <div className='min-h-[100vh] bg-[#f3efdf] flex flex-col'>  
      <Navbar />
      <div className='flex flex-col justify-between items-center px-6 sm:px-12 lg:px-36 py-4 flex-grow'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-2 pt-20 lg:pt-40'>
          <Image
            src={contactImage}
            alt="contactImage"
            style={{ height: "370px", width: "300px" }}
            className="mx-auto lg:mx-0 cursor-pointer"
          />
          <div className='flex flex-col items-center lg:items-start'>
            <div style={{ height: "160px", width: "180px" }}>
              <Image
                src={logocontact}
                alt="logo"
                className="animate-bounce-up-down cursor-pointer mx-auto lg:mx-0"
              />
            </div>
            <div className='text-[14px] text-center lg:text-left mt-4 text-[#493616]'>
              <p className="pb-1 text-[16px]">Thank you for visiting.</p>
              <div className='italic mt-2 hidden md:block'>
                <p>‘’Always enthusiastic and looking forward to new collaborations</p>
                <p>and projects, we invite you to connect with us for commissions</p>
                <p>and collaborative opportunities at <a href="mailto:firdosh940@gmail.com" className="text-[#0000EE] underline">firdosh940@gmail.com</a>.</p>
                <p>Let's create something extraordinary together.’’</p>
              </div>
              <div className='italic mt-2 block md:hidden'>
                <p>‘’Always enthusiastic and looking forward to new collaborations
                and projects, we invite you to connect with us for commissions
                and collaborative opportunities at <a href="mailto:firdosh940@gmail.com" className="text-[#0000EE] underline">firdosh940@gmail.com</a>.
                Let's create something extraordinary together.’’</p>
              </div>
            </div>
            <div className='flex flex-col gap-4 mt-8 lg:mt-12 text-center lg:text-left text-[#493616]'>
              <p>GET IN TOUCH</p>
              <div className='flex justify-center lg:justify-start gap-4'>
                <a href="https://www.instagram.com/firdosh.__/" target="_blank" rel="noopener noreferrer">
                  <InstagramLogo size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300' />
                </a>
                <a href="https://x.com/Firdosh___" target="_blank" rel="noopener noreferrer">
                  <TwitterLogo size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300' />
                </a>
                <a href="https://www.linkedin.com/in/firdosh-art/" target="_blank" rel="noopener noreferrer">
                  <LinkedinLogo size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300' />
                </a>
                <a href="https://www.behance.net/firdosh" target="_blank" rel="noopener noreferrer">
                  <BehanceLogo size={32} color='#8c6a3a' className='cursor-pointer transform hover:scale-110 transition-transform duration-300' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className='text-center lg:text-right text-sm sm:text-base mt-8 lg:mt-0 text-[#8c6a3a]'>
          COPYRIGHT © FIRDOSH 2024. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div> 
  );
}

export default page;
