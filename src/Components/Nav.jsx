import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   setIsSticky(window.scrollY > 300);
      setIsSticky(window.scrollX < 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`bg-white z-10 w-full transition-all duration-300 ${
          isSticky ? "fixed top-0 shadow-md" : "relative"
        }`}
      >
        <div className=" shadow py-2 sm:py-6 px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center   gap-4">
            <AiOutlineMenu className="text-[22px] block sm:hidden  " />

            <h1 className="text-[22px] cursor-pointer font-bold"> Trendora</h1>
          </div>
          <div className=" hidden  sm:flex justify-between items-center gap-6">
            <h1 className="font-bold text-[14px] cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300">
              Home
            </h1>
            <h1 className="font-bold text-[14px] cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300">
              Products
            </h1>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* <input className="bg-white border-0 w-full" type="text" /> */}
            <IoSearchSharp className="text-[22px] cursor-pointer" />
            <FaShoppingCart className="text-[22px] cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
