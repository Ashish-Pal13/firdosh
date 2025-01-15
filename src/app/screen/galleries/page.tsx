"use client";
import React, { useState } from "react";
import {Navbar} from "@/components/navbar";
import Image from "next/image";
import Image1 from "../../../../public/galleries/galleriesone.png";
import Image2 from "../../../../public/galleries/galleriestwo.png";
import {Galleriesone} from "../../../components/galleriesone";
import {Galleriestwo} from "../../../components/galleriestwo";
import {Footer} from "@/components/footer";

function App() {
  const [currentComponent, setCurrentComponent] = useState<
    "Component1" | "Component2" | null
  >(null);

  return (
    <div className="h-[100vh] bg-[#f3efdf]">
      <Navbar />

      {currentComponent === null ? (
        <div className="flex flex-wrap gap-2 justify-center items-center h-full px-4">
          {/* Image 1 */}
          <div
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => setCurrentComponent("Component1")}
          >
            <Image
              src={Image1}
              alt="Image 1"
              style={{ height: "250px", width: "250px" }}
            />
          </div>

          {/* Image 2 */}
          <div
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 mt-28"
            onClick={() => setCurrentComponent("Component2")}
          >
            <Image
              src={Image2}
              alt="Image 2"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          
        </div>
        
      ) : (
        <div className="relative">
          {/* Back Button */}
          <button
            className="absolute top-5 left-5 px-4 py-2 bg-[#493616] text-white rounded cursor-pointer hover:bg-[#34260d] transition-all duration-300 z-10 sm:flex hidden"
            onClick={() => setCurrentComponent(null)} 
          >
            Back
          </button>

          
          {currentComponent === "Component1" && <Galleriesone />}
          {currentComponent === "Component2" && <Galleriestwo />}
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default App;
