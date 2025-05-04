import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {[1, 2, 3, 4].map((num) => (
        <SwiperSlide key={num}>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <img
              src={`/src/assets/${num}.jpg`}
              alt={`Slide ${num}`}
              className="w-full h-full object-fill sm:object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl text-white font-bold mb-2 md:mb-4">
                Welcome to CarZone
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white mb-4 md:mb-6">
                Find your dream car with us today.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded hover:bg-red-700 transition">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
