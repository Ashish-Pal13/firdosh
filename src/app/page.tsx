"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import logo from "../../public/images/download.png";
import backgroundmain from "../../public/images/backgroundmain.svg";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/screen/about');
    }, 1000); 

    
    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundmain.src})`,
        }}
      >
        <Image
          src={logo}
          alt="logo"
          style={{ height: "250px", width: "450px" }}
          className="animate-bounce-up-down"
        />
      </div>
    </>
  );
}