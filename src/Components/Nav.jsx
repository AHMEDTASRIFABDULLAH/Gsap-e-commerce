import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
const Nav = () => {
  return (
    <div>
      <header>
        <div className="bg-white shadow py-6 px-2 flex justify-between items-center">
          <div>
            <h1 className="text-[22px] cursor-pointer font-bold"> Trendora</h1>
          </div>
          <div className="flex justify-between items-center gap-6">
            <h1 className="font-bold cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300">
              Home
            </h1>
            <h1 className="font-bold cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300">
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
    </div>
  );
};

export default Nav;
