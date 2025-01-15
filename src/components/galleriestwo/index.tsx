"use client";
import Image from "next/image";
import galleriestwo1 from "../../../public/galleries/galleriestwo1.png";
import galleriestwo2 from "../../../public/galleries/galleriestwo2.png";
import galleriestwo3 from "../../../public/galleries/Garmentthumbnail-02.png";
import galleriestwo4 from "../../../public/galleries/galleriestwo4.png";
import galleriestwo5 from "../../../public/galleries/galleriestwo5.png";
import galleriestwo6 from "../../../public/galleries/galleriestwo6.png";
import galleriestwo7 from "../../../public/galleries/galleriestwo7.png";
import behance_icon from "../../../public/images/newImageBehance.svg";


const contentData = {
  images: [
    {
      src: galleriestwo1,
      alt: "Image 1",
      title: "Marko Bardelli- 3D Visual Production",
      link: "https://www.behance.net/gallery/215018905/Marko-Bardelli-3D-Visual-Production",
    },
    {
      src: galleriestwo2,
      alt: "Image 2",
      title: "MR Furniture- Designs Brief",
      link: "https://www.behance.net/gallery/214670213/MR-Furniture-Designs-Brief",
    },
    {
      src: galleriestwo3,
      alt: "Image 3",
      title: "3D Garments, (Moonbase fashion): 3D Virtual Production",
      link: "https://www.behance.net/gallery/216754623/3D-Garments-%28Moonbase-fashion%29-3D-Virtual-Production",
    },
    {
      src: galleriestwo4,
      alt: "Image 4",
      title: "Matte Art-Concept Environment Showreel",
      link: "https://www.behance.net/gallery/196790075/Matte-Art-Concept-Environment-Showreel",
    },
    {
      src: galleriestwo5,
      alt: "Image 5",
      title: "Aurora | Visual Development",
      link: "https://www.behance.net/gallery/188345741/Aurora-Visual-Development",
    },
    {
      src: galleriestwo6,
      alt: "Image 6",
      title: "Short film | Sacred Momentum",
      link: "https://www.behance.net/gallery/186581009/Short-film-Sacred-Momentum",
    },
    {
      src: galleriestwo7,
      alt: "Image 7",
      title: "Music Album Design",
      link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
    },
    {
      src: behance_icon,
      alt: "Image 7",
      title: "FOR MORE PROJECTS",
      link: "https://www.behance.net/firdosh",
    },
  ],
};

export function Galleriestwo() {
  return (
    <div className="bg-[#f3efdf]  flex justify-center items-center  py-28 flex-col">
      {/* <Navbar/> */}
      <div className="flex flex-wrap  w-[70%] gap-5 ">
        {contentData.images.map((image, index) => (
          <div
            key={index}
            className="w-[300px] h-[300px]   transform hover:scale-105 transition-transform duration-300 group relative cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="shadow-lg  rounded-md"
              width={300}
              height={300}
              objectFit="cover"
              
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <p className="text-center text-sm text-white">{image.title}</p>
              {image.link && (
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm mt-1"
                >
                  Visit Link
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


