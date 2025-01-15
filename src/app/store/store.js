import { atom } from 'jotai';
import Image from 'next/image';
import quotebutton1  from "../../../public/galleries/quotebutton2.png";
import quotebutton2  from "../../../public/galleries/quotebutton3.png";
import quotebutton3  from "../../../public/galleries/quotebutton4.png";
import quotebutton4  from "../../../public/galleries/quotebutton5.png";
import quotebutton5  from "../../../public/galleries/quotebutton6.png";
import quotebutton6  from "../../../public/galleries/quotebutton7.png";
import quotebutton7  from "../../../public/galleries/quotebutton8.png";
import quotebutton8  from "../../../public/galleries/quotebutton9.png";
import quotebutton9  from "../../../public/galleries/quotebutton10.png";
import quotebutton10  from "../../../public/galleries/quotebutton11.png";
import quotebutton11  from "../../../public/galleries/quotebutton12.png";
import quotebutton12  from "../../../public/galleries/quotebutton13.png";
import quotebutton13  from "../../../public/galleries/quotebutton14.png";
import quotebutton14  from "../../../public/galleries/quotebutton15.png";




const contentDataAtom = atom({
    images: [
        {
          id:1, 
          src: quotebutton1,
          alt: "Image 2",
          title: "The Womanhood",
          link: "https://www.behance.net/gallery/214670213/MR-Furniture-Designs-Brief",
          price:"25000"
        },
        {
          id:2,
          src: quotebutton2,
          alt: "Image 3",
          title: "Phases of Self",
          link: "https://www.behance.net/gallery/176530145/Editorial-Illustrations",
          price:"25000"
        },
        {
          id:3,
          src: quotebutton3,
          alt: "Image 4",
          title: "The Beauty beyond norms",
          link: "https://www.behance.net/gallery/196790075/Matte-Art-Concept-Environment-Showreel",
          price:"25000"
        },
        {
          id:4,
          src: quotebutton4,
          alt: "Image 5",
          title: "Henna",
          link: "https://www.behance.net/gallery/188345741/Aurora-Visual-Development",
          price:"25000"
        },
        {
          id:5,
          src: quotebutton5,
          alt: "Image 6",
          title: "Loud",
          link: "https://www.behance.net/gallery/186581009/Short-film-Sacred-Momentum",
          price:"25000"
        },
        {
          id:6,
          src: quotebutton6,
          alt: "Image 7",
          title: "She Walks",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"25000"
        },
        {
          id:7,
          src: quotebutton7,
          alt: "Image 7",
          title: "Yakshini 2.0",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"25000"
        },
        {
          id:8,
          src: quotebutton8,
          alt: "Image 7",
          title: "Courtesene Queen",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"25000"
        },
        {
          id:9,
          src: quotebutton9,
          alt: "Image 7",
          title: "Transcendence",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"10000"
        },
        {id:10,
          src: quotebutton10,
          alt: "Image 7",
          title: "Seraphic Illumination",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"10000"
        },
        {
          id:11,
          src: quotebutton11,
          alt: "Image 7",
          title: "Sacred Momentum",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"not foe sale"
        },
        {
          id:12,
          src: quotebutton12,
          alt: "Image 7",
          title: "Genesis of all forms",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"not foe sale"
        },
        {
          id:13,
          src: quotebutton13,
          alt: "Image 7",
          title: "Multi-regional Similarities",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"not foe sale"
        },
        {
          id:14,
          src: quotebutton14,
          alt: "Image 7",
          title: "Brushing away the divides",
          link: "https://www.behance.net/gallery/171423081/Music-Album-Design",
          price:"not foe sale"
        },
  
      ],
});

export default contentDataAtom;


