import React from "react";
import Card from "../Components/Card";
import Container from "../Components/Container";
import banner from "../assets/cart/b2.jpg";
const Products = () => {
  return (
    <>
      <div className=" mt-5">
        {/* Banner Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          {/* Top gradient to separate navbar */}
          <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-[#1e293b]/80 via-transparent to-transparent z-20"></div>

          {/* Dark semi-overlay over image for contrast */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={banner}
            alt="Banner"
          />

          {/* Text Content */}
          <div className="relative z-30 h-full flex flex-col justify-center px-4 sm:px-6 max-w-2xl text-white">
            <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-bold  leading-tight mb-3 sm:mb-4 animate-fadeInUp">
              Discover <span className="text-red-500">Trendy</span> Styles
              <br />
              at Unbeatable Prices
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white mb-6 animate-fadeInUp delay-100">
              Explore our latest collections and enjoy fast delivery, secure
              checkout, and unbeatable deals on top-quality products.
            </p>
            <button className="bg-whie hover:border-0 text-white border text-xs px-4 py-1.5 rounded-sm hover:bg-neutral-200 transition hover:text-black font-semibold duration-200 w-[50%] cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card Overlapping Banner */}
        <h1 className="text-xl sm:text-3xl text-center text-black font-semibold py-4 sm:py-6">
          Our Products
        </h1>

        <Container>
          <div className="  grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Container>
        <div className="flex justify-center items-center px-4 py-6">
          <button className="bg-black  text-white px-8 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-medium  transition-all duration-300 ease-in-out hover:bg-gray-900 hover:scale-105 active:scale-95 rounded-md cursor-pointer">
            Load more
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
