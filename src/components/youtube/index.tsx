"use client";
import { useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, PlayCircle, X } from "phosphor-react";
import youtubeheadline from "../../../public/images/youtubeheadline-01.svg";

export function Youtube() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = ["8dQ0W1DzMMw", "ah8PrJ-OvwI", "GvhKZlJpDdM"];

  const handleThumbnailClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      Math.min(prevIndex + 1, videos.length - 1)
    );
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      Math.max(prevIndex - 1, 0)
    );
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center text-center my-28 px-4">
      <Image
        src={youtubeheadline}
        alt="exhibitionand"
        className="h-[50px] w-[340px]"
      />
      <div className="flex flex-col items-center gap-3">
        {/* Thumbnail */}
        <div
          className="w-[300px] sm:w-[500px] h-64 bg-cover bg-center relative cursor-pointer"
          style={{
            backgroundImage: `url('https://img.youtube.com/vi/${videos[currentVideoIndex]}/hqdefault.jpg')`,
          }}
          onClick={handleThumbnailClick}
        >
          <PlayCircle
            size={48}
            className="absolute inset-0 m-auto text-white transform scale-110 hover:scale-125 transition-transform duration-300"
          />
        </div>

        {/* Arrows */}
        <div className="flex  gap-4 items-center mt-4 md:mt-0 md:flex-row md:gap-10">
          <CaretLeft
            size={32}
            className="cursor-pointer transform hover:scale-110 transition-transform duration-300"
            onClick={handlePreviousVideo}
          />
          <CaretRight
            size={32}
            className="cursor-pointer transform hover:scale-110 transition-transform duration-300"
            onClick={handleNextVideo}
          />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
            <div className="relative w-full h-full max-w-full max-h-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[currentVideoIndex]}?autoplay=1`}
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
              <X
                size={32}
                className="absolute top-10 right-4 text-white cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


