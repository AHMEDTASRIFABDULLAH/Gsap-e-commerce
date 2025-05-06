import React from "react";
import st1 from "../assets/cart/st1.jpg";
import st2 from "../assets/cart/st2.jpg";
import st3 from "../assets/cart/st6.jpg";
import st4 from "../assets/cart/st4.jpg";
import st5 from "../assets/cart/st7.jpg";
import st6 from "../assets/cart/st6.jpg";
import st7 from "../assets/cart/st3.jpg";
import st8 from "../assets/cart/st8.jpg";
const Explore = () => {
  return (
    <div className="pb-6">
      <div className="flex mt-4 sm:mt-6 justify-center flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-center">
        <h1 className="text-2xl sm:text-4xl  text-black font-semibold ">
          Explore Collections
        </h1>
        <h1
          className="sm:text-xl font-semibold cursor-pointer pb-1 border-b-2 border-black 
               text-black relative inline-block overflow-hidden group"
        >
          <span className="relative  group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-700 ease-in-out">
            View All Collection
          </span>
        </h1>
      </div>
      {/* image container */}
      <div className="w-full mt-8 overflow-x-scroll scroll-smooth  no-scrollbar ">
        <div className="flex gap-3  min-w-full">
          {[st1, st2, st3, st4, st5, st6, st7, st8].map((src, i) => (
            <div key={i} className=" mt-6 rounded-2xl">
              <img
                src={src}
                alt={`slide-${i}`}
                // draggable={false}
                className="object-cover  min-w-[300px] rounded-2xl h-[400px] w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
