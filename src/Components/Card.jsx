import React from "react";
import cartImage from "../assets/cart/1.jpg";
import { FaCartShopping } from "react-icons/fa6";
const Card = () => {
  return (
    <div>
      <img src={cartImage} alt="" />
      <h1 className="text-black font-semibold py-1 text-center text-[12px] sm:text-[16px]">
        Mens Premium Designer Edition T Shirt
      </h1>
      <div className="flex items-center gap-4 justify-center">
        <h1 className="line-through font-semibold py-1 text-red-400 text-[12px] sm:text-[16px]">
          ৳799
        </h1>
        <h1 className="text-black font-semibold py-1  text-[12px] sm:text-[16px]">
          ৳699
        </h1>
      </div>
      <div className="bg-black flex justify-center cursor-pointer">
        <div className="flex justify-between gap-3 items-center py-1">
          <FaCartShopping className="text-white cursor-pointer" />{" "}
          <button className="text-white font-semibold cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
