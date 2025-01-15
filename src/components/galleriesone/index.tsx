import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import bannerone from "../../../public/galleries/bannerbgImageslaptop-01.svg";
import bg_image from "../../../public/galleries/bgImagebanner.svg";
import bannertitle from "../../../public/galleries/bannertitle.png";
import { useAtom } from 'jotai';
import contentDataAtom from "../../app/store/store";
import {Addtocart , ImageType } from "../addtocart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Imagetype {
  src: StaticImageData;
  alt: string;
  title: string;
  link: string;
  price: string;
}

export function Galleriesone() {
  const [contentData] = useAtom(contentDataAtom);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<Imagetype[]>([]);
  const [filteredImages, setFilteredImages] = useState(contentData.images);
  const [pickPrice, setPickPrice] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number] | null>(null);

  const togglePriceDropdown = () => setPickPrice(prev => !prev);
  
  const closePriceDropdown = () => setPickPrice(false);

 
  useEffect(() => {
    const handleScroll = () => {
      closePriceDropdown();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleAddToPopup = (image: Imagetype) => {
    
    const isImageSelected = selectedImages.some(selected => selected.src === image.src);

    if (!isImageSelected) {
      setSelectedImages((prev) => [...prev, image]);
      openPopup();
    } else {
      toast.success("This image has already been selected.");
      
    }
  };

  const handleDeleteImage = (imageSrc: string) => {
    // setSelectedImages((prev) => prev.filter((image) => String(image.src) !== imageSrc));
    setSelectedImages((prev) => prev.filter((image) => (image.src as unknown as string) !== imageSrc));
    // toast.success("This image has been deleted.");
  };

  const handlePriceFilter = (range: [number, number]) => {
    setSelectedPriceRange(range);
    const filtered = contentData.images.filter(
      (image) => parseInt(image.price) >= range[0] && parseInt(image.price) <= range[1]
    );
    setFilteredImages(filtered);
    closePriceDropdown();
  };

  const handleShowAll = () => {
    setFilteredImages(contentData.images); 
    closePriceDropdown();
  };

  return (
    <div className='flex flex-col justify-center items-center py-28 gap-10 bg-[#f3efdf] overflow-hidden'>
      {/* <Navbar /> */}
      <div className='overflow-hidden w-[90%] relative'>
        <div className="scroll-contentImage h-60 bg-red-60 sm:flex hidden">
          <Image src={bannerone} alt="bannertitle" style={{ width: "100%" }} />
          <Image src={bannerone} alt="bannerone" style={{ width: "100%" }} />
          <Image src={bannerone} alt="bannerone" style={{ width: "100%" }} />
        </div>

        <div className="scroll-contentImage h-[60] bg-red-60 sm:hidden flex" >
          <Image src={bg_image} alt="bannertitle" style={{width:'100%' }} />
          <Image src={bg_image} alt="bannertitle" style={{width:'100%' }} />
          <Image src={bg_image} alt="bannertitle" style={{width:'100%' }} />
        </div>
            
        </div>

        
        
      <div className='w-[40%] absolute sm:top-[150px] top-[130px]'>
        <Image src={bannertitle} alt="bannertitle" style={{ width: "100%" }} />
      </div>

      <div className='h-fit flex flex-col gap-6 mx-28'>
      <div className='flex flex-col md:flex-row justify-between items-center p-4 border border-black rounded-[14px] gap-4'>
  <div className='text-[#493616] flex flex-col gap-3'>
    <p className='font-semibold text-center md:text-left'>Canvas Print Availability</p>
    <div className='flex gap-2 justify-center md:justify-start'>
      <p className='flex gap-2 items-center font-semi'>In stock</p>
      <p className='border border-black px-5 py-1 rounded-[8px]'>{filteredImages.length}</p>
    </div>
  </div>

  <div className='relative'>
    <button
      className='px-6 py-2 text-[white] bg-[#493616] rounded-[14px] w-full md:w-auto'
      onClick={togglePriceDropdown}
    >
      Pick Your Price (Rs)
    </button>
    {pickPrice && (
      <ul className='flex flex-col gap-2 text-[white] bg-[#493616] px-6 py-2 rounded-[12px] absolute left-0 right-0 md:left-auto md:right-auto top-12 cursor-pointer'>
        <li onClick={handleShowAll}>All</li>
        <li onClick={() => handlePriceFilter([2000, 10000])}>2000 to 10000</li>
        <li onClick={() => handlePriceFilter([2000, 25000])}>2000 to 25000</li>
      </ul>
    )}
  </div>
</div>


        <div className='flex flex-wrap justify-center items-center gap-5'>
          {filteredImages.map((item, id) => (
            <div
              key={id}
              style={{ minWidth: "290px", maxHeight: "390px" }}
              className='flex flex-col gap-3 mt-10'
            >
              <Image
                src={item.src}
                alt={item.alt}
                style={{ height: "330px", width: "280px" }}
                className='cursor-pointer  '
              />
              <div className='text-[#493616] font-semibold'>{item.title}</div>
              <button
                className='px-6 py-2 text-[white] bg-[#493616] rounded-[25px] transform hover:scale-105 transition-transform duration-300 '
                onClick={() => handleAddToPopup(item)}
                disabled={selectedImages.some(selected => selected.src === item.src)}
              >
                Get quote
              </button>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && <Addtocart images={selectedImages as unknown as ImageType[]} onClose={closePopup} onDeleteImage={handleDeleteImage} />}
      {/* <ToastContainer /> */}
    </div>
  );
}


