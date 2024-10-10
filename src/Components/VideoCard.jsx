import React, { useState, useRef } from 'react';
import { videoInfo } from "../constants/index.jsx";

const VideoCard = () => {
  const [showVideoIndex, setShowVideoIndex] = useState(null);
  const scrollContainerRef = useRef(null); 

  const toggleVideo = (index) => {
    setShowVideoIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <>
        <div className=" p-8 lg:p-12 pt-24 sm:pt-28 lg:pt-28 lg:w-3/4 mx-auto">
            <div className=" inline-block font-semibold text-xs text-blue-600 bg-white cursor-pointer border  px-2 py-2 rounded-lg shadow-sm">
                USE CASES
            </div>

            <div className="sm:flex space-y-4 sm:space-y-0 justify-between items-end pt-8">
                <p className="sm:w-3/4 text-4xl md:text-5xl font-semibold">Used by 50,000+ teams who create videos at scale</p>
                <div className="space-x-4">
                    <div className="inline-block px-3 py-2 rounded-full bg-gray-200 hover:bg-blue-gray-100 transition-all duration-100 ease-in-out" onClick={() => handleScroll('left')} ><i className="fa-solid fa-arrow-left"></i></div>
                    <div className="inline-block px-3 py-2 rounded-full bg-gray-200 hover:bg-blue-gray-100 transition-all duration-100 ease-in-out" onClick={() => handleScroll('right')}><i className="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
        </div>

    <div className="flex space-x-4 pb-12 overflow-hidden">
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex pl-3 space-x-8 overflow-x-hidden"
      >
        {videoInfo.map((video, index) => (
          <div
            key={index}
            className="group/container flex-none w-1/4 p-4 md:w-1/3 md:p-8 flex-col justify-center items-center bg-indigo-100 border bg-opacity-20 border-indigo-100 border-opacity-50 rounded-xl"
          >
            <div
              className="group/frame overflow-hidden rounded-lg md:h-56"
              onClick={() => toggleVideo(index)}
              onBlur={() => toggleVideo(index)}
              tabIndex="0"
            >
              {showVideoIndex === index ? (
                <iframe
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                  src={video.video}
                  title={`YouTube video player for ${video.head1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative">
                  <button className="absolute top-20 left-44 sm:bg-white group-hover/frame:-translate-x-12 sm:border rounded-full p-5 opacity-50 shadow-md group-hover/frame:opacity-100 transition-all ease-in-out duration-500">
                    <i className="fa-solid fa-play px-2 group-hover/frame:hidden"></i>
                    <p className="pl-12 hidden group-hover/frame:flex transition-all ease-in-out duration-800">
                      See example
                    </p>
                  </button>
                  <button className="absolute top-20 left-44 m-2 bg-white group-hover/frame:-translate-x-12 border rounded-full p-3 shadow-md transition-all ease-in-out duration-500">
                    <i className="fa-solid fa-play px-2"></i>
                  </button>
                  <img
                    className="rounded-lg"
                    src={video.image}
                    alt={`Thumbnail for ${video.head1}`}
                  />
                </div>
              )}
            </div>

            <div className="mx-auto pt-8 space-y-2">
              <h2 className="text-3xl font-semibold">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-900 text-transparent bg-clip-text">
                  {video.head1}
                </span>{' '}
                {video.head2}
              </h2>
              <p>{video.description}</p>
              <button className="pt-6 text-blue-700 text-sm group-hover:underline group-hover:text-black">
                Learn more
                <i className="group-hover/container:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
    </div>
    
    </>
  );
};

export default VideoCard;
