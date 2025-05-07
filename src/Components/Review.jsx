import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { AiOutlineCheckCircle } from "react-icons/ai";
import aftar1 from "../assets/cart/st4.jpg";
import aftar2 from "../assets/cart/st6.jpg";
const Review = () => {
  return (
    <div>
      <h1 className="text-xl sm:text-3xl mt-4 sm:mt-6 text-center  text-black font-semibold ">
        Customer Say!
      </h1>
      <h1 className=" text-[15px] mt-2 sm:mt-4 text-center  text-gray-500  ">
        Our customers adore our products, and we constantly aim to delight them.
      </h1>
      {/* review cart */}
      <div className=" md:flex gap-4 justify-center">
        <div className="p-4 mt-4 sm:mt-6 rounded-sm border border-gray-300">
          <div className="flex">
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
          </div>
          <h1 className="text-[15px] mt-3 sm:mt-4  text-gray-600">
            "Fantastic shop! Great selection, fair prices, and friendly staff.
            Highly recommended. The quality of the products is exceptional, and
            the prices are very reasonable!"
          </h1>
          <div className="flex gap-3 mt-3 items-center pb-3 border-b border-gray-200">
            <p className="font-semibold text-[18px]  sm:text-xl">Sadik</p>
            <AiOutlineCheckCircle className="font-semibold text-green-600 text-[18px] sm:text-xl" />
          </div>
          <div className="flex items-center gap-6">
            <div className="h-12 mt-3 w-12 flex justify-center items-center rounded-full">
              <img
                className="object-cover h-12 w-12 rounded-full"
                src={aftar1}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-semibold">Mans T-shirt</h1>
              <p className="font-semibold text-gray-700">৳899</p>
            </div>
          </div>
        </div>
        {/* cart one end  */}
        <div className="p-4 mt-4 sm:mt-6 rounded-sm border border-gray-300">
          <div className="flex">
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
            <IoStarSharp className=" gap-1 font-semibold text-[18px] text-[#F0A750]" />
          </div>
          <h1 className="text-[15px] mt-3 sm:mt-4  text-gray-600">
            "I absolutely love this shop! The products are high-quality and the
            customer service is excellent. I always leave with exactly what I
            need and a smile on my face."
          </h1>
          <div className="flex gap-3 mt-3 items-center pb-3 border-b border-gray-200">
            <p className="font-semibold text-[18px]  sm:text-xl">Nafiz</p>
            <AiOutlineCheckCircle className="font-semibold text-green-600 text-[18px] sm:text-xl" />
          </div>
          <div className="flex items-center gap-6">
            <div className="h-12 mt-3 w-12 flex justify-center items-center rounded-full">
              <img
                className="object-cover h-12 w-12 rounded-full"
                src={aftar2}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-semibold">Mans T-shirt</h1>
              <p className="font-semibold text-gray-700">৳899</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
