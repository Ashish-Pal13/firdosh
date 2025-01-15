"use client";
import Image from "next/image";
import exhibitionand from "../../../public/images/exhibitionand events.svg";
import exhibitions_1 from "../../../public/images/Untitled-1-02(1).svg";
import exhibitions_2 from "../../../public/images/exhibitions image-02.svg";
import exhibitions_3 from "../../../public/images/exhibitions image-09.svg";
import exhibitions_4 from "../../../public/images/exhibitions image-10.svg";
import exhibitions_5 from "../../../public/images/exhibitions image-04.svg";
import exhibitions_6 from "../../../public/images/Untitled-6.svg";
import exhibitions_7 from "../../../public/images/exhibitions image-03.svg";
import exhibitions_8 from "../../../public/images/exhibitions image-07.svg";
import exhibitions_9 from "../../../public/images/exhibitions image-06.svg";
import exhibitions_10 from "../../../public/images/exhibitions image-08.svg";
import velocity11 from "../../../public/images/velocity11.svg";
import velocity2 from "../../../public/images/newImagevelocitydisplay-05.svg";

const contentData = {
  titleImage: {
    src: exhibitionand,
    alt: "exhibitionand",
    style: { height: "90px", width: "500px" },
  },
  images: [
    { 
      src: exhibitions_1, 
      alt: "Image 1", 
      title: "SOCIAL X Nrtya FRESH CUT All day Art Fete, Delhi Exhibition, Pop Up shop", 
      // link: "https://example.com/exhibition-1" 
    },
    { 
      src: exhibitions_2, 
      alt: "Image 2", 
      title: "SOCIAL X Nrtya FRESH CUT All day Art Fete, Delhi Exhibition, Pop Up shop", 
      // link: "https://example.com/exhibition-2" 
    },
    { 
      src: exhibitions_3, 
      alt: "Image 3", 
      title: "AR Art Exhibitor for NFT.NYC 2023, New York", 
      link: "https://www.nft.nyc/nftnyc2023" 
    },
    { 
      src: exhibitions_4, 
      alt: "Image 4", 
      title: "SOCIAL X Nrtya 'FRESH CUT' All day Art Fete, Delhi - Exhibitor & Pop Up shop", 
      // link: "https://example.com/exhibition-4" 
    },
    { 
      src: exhibitions_5, 
      alt: "Image 5", 
      title: "AR Art Exhibitor for Velocity Art Space By Innovation Hub St. Lawrence College, Kingston", 
      link: "https://www.facebook.com/100063884325071/videos/714422350735408?__so__=permalink" 
    },
    { 
      src: exhibitions_6, 
      alt: "Image 6", 
      title: "Art Exhibitor for 'SHARED AFFINITIES' curated by TheUpsideSpace Gallery, Singapore, Southeast Asia", 
      link: "https://theupsidespace.com/exhibition/6579a161a035b59cd2ce6234" 
    },
    { 
      src: velocity2, 
      alt: "Image 7", 
      title: "AR Art Exhibitor for Velocity Art Space By Innovation Hub St. Lawrence College, Kingston", 
      link: "https://www.facebook.com/100063884325071/videos/714422350735408?__so__=permalink" 
    },
    { 
      src: exhibitions_9, 
      alt: "Image 8", 
      title: "AR Art Exhibitor for NFT.NYC 2023, New York", 
      link: "https://www.nft.nyc/nftnyc2023" 
    },
    { 
      src: velocity11, 
      alt: "Image 9", 
      title: "AR Art Exhibitor for Velocity Art Space By Innovation Hub St. Lawrence College, Kingston", 
      link: "https://www.facebook.com/100063884325071/videos/714422350735408?__so__=permalink" 
    },
    { 
      src: exhibitions_10, 
      alt: "Image 10", 
      title: "AR Art Exhibitor for NFT.NYC 2024, New York", 
      link: "https://www.nft.nyc/art" 
    }
  ]
  
};

export function Exhibitionandevents() {
  return (
    <div className="flex flex-col  justify-center items-center mt-28 ">
      <Image
        src={contentData.titleImage.src}
        alt={contentData.titleImage.alt}
        style={contentData.titleImage.style}
      />


      

     


      <div className="w-screen p-16 ">

        <div className="w-full gap-2 flex overflow-hidden" >
          <div className="flex gap-2 scroll-content">
              {[...contentData.images,...contentData.images].map((image, index) => (
                <div
                  key={index}
                  className="image-container relative group cursor-pointer"
                  style={{ minWidth: "240px", maxHeight: "240px" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                 <div className="title-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white flex flex-col items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p>{image.title}</p>
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 mt-2 underline"
                    >
                      Visit Link
                    </a>
                </div>

                </div>
              ))}
            </div>

        
         
          

        </div>

      </div>



    </div>
  );
}


