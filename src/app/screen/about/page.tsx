"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import bg_image from "../../../../public/images/banner.svg";
import {Navbar} from '@/components/navbar';
import logo from "../../../../public/images/download.png";
import awardsnfeaturesheadline from "../../../../public/images/awards nfeatures headline.svg"; 
import textfirdosh from "../../../../public/images/textfirdosh-01.svg";
import artistphoto from "../../../../public/images/FirdoshImages-03.png";
import hennaartwork from "../../../../public/images/FirdoshImages02.png";
import firdoshImage from "../../../../public/images/FirdoshImages01.png";
import FirdoshImagesOne from "../../../../public/images/FirdoshImages04.png";
import MYWEBSITEUi_1 from "../../../../public/images/MY WEBSITE UI-29.svg";
import MYWEBSITEUi_2 from "../../../../public/images/MY WEBSITE UI-30.svg";
import MYWEBSITEUi_3 from "../../../../public/images/MY WEBSITE UI-31.svg";
import MYWEBSITEUi_4 from "../../../../public/images/MY WEBSITE UI-32.svg";
import MYWEBSITEUi_5 from "../../../../public/images/MY WEBSITE UI-33.svg";
import workncollabheadline from "../../../../public/images/work ncollab headline.svg";
import MYWEBSITEUi_6 from "../../../../public/images/MY WEBSITE UI-25.svg";
import MYWEBSITEUi_7 from "../../../../public/images/MY WEBSITE UI-26.svg";
import MYWEBSITEUi_8 from "../../../../public/images/MY WEBSITE UI-27.svg";
import MYWEBSITEUi_9 from "../../../../public/images/MY WEBSITE UI-28.svg";
import {Footer} from "../../../components/footer/index";
import Untitled_1 from "../../../../public/images/Untitled-1-01.svg";
import Untitled_2 from "../../../../public/images/Untitled-1-02.svg";
import Untitled_3 from "../../../../public/images/Untitled-1-03.svg";
import {Youtube} from "../../../components/youtube/index";
import {Exhibitionandevents} from "../../../components/exhibitionandevents";
import { ArrowFatLineUp, ArrowUp, CaretLeft, CaretRight } from 'phosphor-react';

 
function page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  const images = [
    { src: firdoshImage, alt: 'Firdosh Image' },
    { src: hennaartwork, alt: 'Henna Artwork' },
    { src: artistphoto, alt: 'Artist Photo' },
    {src:FirdoshImagesOne, alt:'FirdoshImagesOne'},
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 


    return () => clearInterval(intervalId);
  }, []);
  


  return (
    <div className='bg-[#f3efdf]'> 
             <Navbar/>
            <div>
            
                <div
                    className="h-96 bg-cover bg-center flex justify-center items-center px-2"
                    style={{
                    backgroundImage: `url(${bg_image.src})`,
                    }}
                  >
                    
                    <Image
                    src={textfirdosh}
                    alt="textfirdosh"
                    className="animate-bounce-up-down-name cursor-pointer"
                    style={{height:"60px"}}
                    />
                </div>
                <div className='hidden md:flex justify-center items-center'>
                  <div className='w-80 h-80 rounded-full overflow-hidden cursor-pointer'>
                    <Image src={images[currentIndex].src} alt={images[currentIndex].alt} className="rounded-full"/>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center relative">
                      
                        <div className="w-80 h-80 md:hidden rounded-full overflow-hidden relative">
                          <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].alt}
                            className="rounded-full"
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>

                      
                        
                </div>

                

                 
                

                <div className="flex flex-col justify-center items-center text-center mt-28 mb-32 mx-4">
                    <div className="max-w-3xl  text-[#493616] flex flex-col gap-4">
                        <p>
                        Firdosh is a multidisciplinary visual artist based in India. She attended the Faculty of Fine Arts,
                         Jamia Millia Islamia, pursuing B.F.A and M.F.A in Art Education (2022), New Delhi, India. Firdosh 
                         focuses on traditional and digital paintings. Her strength as a creative individual is her unique art-style 
                         and versatility, spanning across visual development, 3D visual production, character creation, diversity-driven 
                         designs and NFTs. Throughout her artistic career, she has collaborated with notable clients and fellow artists,
                          bringing  compelling projects to life. These experiences have enriched Firdosh’s artistic perspective.
                        </p>

                    </div>
                    <div  className="max-w-3xl  text-[#493616] flex flex-col gap-2 mt-4">
                        <p>‘’I am always enthusiastic and looking forward for new collaborations and projects, I invite you to connect with me for commissions and collaborative opportunities at <a href="mailto:firdosh940@gmail.com" className="text-[#0000EE] underline">firdosh940@gmail.com</a>.  Let's 
                            create something extraordinary together.’’</p>
                    </div>
                </div>
                {/* awardsnfeaturesheadline */}
                <div className='flex flex-col justify-center items-center '>
                     <Image src={awardsnfeaturesheadline} alt='awardsnfeaturesheadline' style={{height:"80px" ,width:"370px"}}></Image>
                     <div className='flex flex-wrap justify-center items-center text-[#493616] text-[8px]'>
                          <div className='flex flex-col justify-center items-center'>
                              <Image src={Untitled_2} alt='MYWEBSITEUi_1'  style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                              <div className='flex flex-col justify-center items-center'>
                                   <p>Academic Excellence - 2022</p>
                                   <p>Gold Medalist, Master's in Art Education</p>
                              </div>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                             <Image src={MYWEBSITEUi_1} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                              <div className='flex flex-col justify-center items-center'>
                                   <p>Art Exhibitor, SHARED AFFINITIES</p>
                                   <p>Singapore, Southeast Asia</p>
                              </div>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                              <Image src={MYWEBSITEUi_2} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                               <div className='flex flex-col justify-center items-center'>
                                   <p>AR/VR art exhibitor,</p>
                                   <p>NEW YORK</p>
                              </div>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                          <Image src={MYWEBSITEUi_3} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                               <div className='flex flex-col justify-center items-center'>
                                   <p>Featured Artist 2022</p>
                                   
                              </div>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                          <Image src={MYWEBSITEUi_4} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                               <div className='flex flex-col justify-center items-center'>
                                   <p>AR/VR art exhibitor,</p>
                                   <p>NFT Marketplace</p>
                              </div>
                          </div>
                          <div className='flex flex-col justify-center items-center'>
                               <Image src={MYWEBSITEUi_5} alt='MYWEBSITEUi_1'  style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                               <div className='flex flex-col justify-center items-center'>
                                   <p>Multi-disciplinary Art exhibitor, </p>
                                   <p>'Fresh Cut' in collab with SOCIAL</p>
                              </div>
                          </div>
                          
                    
                     </div>
                </div>
                {/* workncollabheadline */}

                <div className='flex flex-col justify-center items-center mt-28 mx-4'>
                     <Image src={workncollabheadline} alt='workncollabheadline' style={{height:"80px" ,width:"370px"}}></Image>
                     <div className='flex flex-wrap justify-center items-center'>
                          <Image src={Untitled_1} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                          <Image src={MYWEBSITEUi_6} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                          <Image src={MYWEBSITEUi_7} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                          <Image src={MYWEBSITEUi_8} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                          <Image src={MYWEBSITEUi_9} alt='MYWEBSITEUi_1' style={{height:"80px",width:"170px"}} className='cursor-pointer'></Image>
                          
                     </div>
                </div>
                {/* exhibitionand */}
                 <Exhibitionandevents/>

                <div className='flex flex-col gap-10 justify-center items-center text-center my-28 mx-4'>
                     
                     <Image src={Untitled_3} alt='exhibitionand' style={{height:"80px" ,width:"500px"}}></Image>
                     <div className="max-w-3xl text-[#493616] flex flex-col gap-4">
                        <p>
                        In the labyrinth of my artistic evolution, I am Firdosh-a seeker, a storyteller, and a weaver of visions.
                        </p>
                        <p>
                        My journey through the fine arts began with disciplined education, culminating in both a BFA and MFA degree. Initially driven by technical and skill proficiency, my artistic evolution took a profound turn in my early twenties when self-awareness and experiences ignited a visionary path.
                        </p>
                        <p>
                        Through varied mediums-from paintbrushes to digital interfaces, my paintings serve as catalysts for self-reflection, offering sacred moments of inner exploration, and affirmation. As an artist and a person going through transformative phase of youth to early adulthood, I observed the constant pursuit of external validation around me, often overshadowing the people's journey of self-discovery. This dependence on others' approval breeding restlessness, chaos, and an air of inauthenticity made me feel compelled to address this through my art. My work focuses on themes of self-reflection, inner exploration, and connecting with the higher self, weaving affirmations and visionary elements to inspire a journey inward and ignite a sense of authenticity and tranquility. 
                        </p>
                        <p>
                        My work seeks to explore and celebrate the true essence of individual identity in all its truest forms-feminine, masculine, non-binary/gender-fluid, and their higher self. Growing up in India, I have been deeply inspired by the rich cultural heritage surrounding me. This influence is reflected in my paintings, where I portray individuals adorned in traditional, culturally significant elements that emphasize their unique surreal identity. standing apart from the materialistic and brand-centric identities that dominate today's world. Through my art, I strive to honor the unique beauty of diverse identities and emphasize authenticity over superficiality.
                        </p>
                    </div>
                </div>
                <Youtube/>
                <div className='flex justify-center items-center '>
                    <Image src={logo} alt="logo" style={{height:"150px", width:"300px"}}
                    className="animate-bounce-up-down cursor-pointer"></Image>
               </div>
              
            </div>
            <button 
            className="hidden md:flex fixed bottom-10 right-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               >
              <ArrowFatLineUp size={36}  color='#493616' className='shadow-lg hover:text-[#000] transition-all'/>
        </button>
            <Footer/>
        
    </div> 
  )
}

export default page
