import { FaShoppingCart } from "react-icons/fa";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const { isAdmin } = useContext(AuthContext);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    isAdmin === true && { name: "Dashboard", path: "/dashboard/orders" },
  ];

  return (
    <>
      {/* Sidebar Panel */}
      <div
        className={`bg-white backdrop-blur-lg fixed top-0 left-0 pt-10 w-[280px] min-h-screen z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Cross Icon */}
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={28} className="text-black" />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-4 pl-4 pt-10">
          {menuItems.filter(Boolean).map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                to={item.path}
                key={item.path}
                onClick={() => setIsOpen(false)}
              >
                <h1
                  className={`font-semibold text-[15px] pl-3 py-2 border-l-4 ${
                    isActive ? "border-blue-600 bg-gray-100" : "border-black"
                  } text-gray-800 hover:bg-gray-100 hover:scale-[1.01] transition duration-200 cursor-pointer rounded`}
                >
                  {item.name}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
      <header
        className="bg-white  w-full
          fixed top-0 z-40 shadow-md"
      >
        <div className=" shadow py-2 sm:py-3 px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center   gap-4">
            <AiOutlineMenu
              onClick={() => setIsOpen(true)}
              className="text-[22px] block sm:hidden cursor-pointer "
            />

            <h1 className="text-[22px] cursor-pointer font-bold"> Trendora</h1>
          </div>
          <div className="hidden sm:flex justify-between items-center gap-6">
            <Link to="/">
              <h1
                className={`font-bold text-[14px] cursor-pointer relative pb-1 ${
                  location.pathname === "/" ? "text-orange-700" : ""
                } `}
              >
                Home
              </h1>
            </Link>

            <Link to="/products">
              <h1
                className={`font-bold text-[14px] cursor-pointer relative pb-1 ${
                  location.pathname === "/products" ? "text-orange-700" : ""
                } `}
              >
                Products
              </h1>
            </Link>

            <Link to="/about">
              <h1
                className={`font-bold text-[14px] cursor-pointer relative pb-1 ${
                  location.pathname === "/about" ? "text-orange-700" : ""
                }`}
              >
                About
              </h1>
            </Link>
            {isAdmin === true && (
              <Link to="/dashboard/orders">
                <h1
                  className={`font-bold text-[14px] cursor-pointer relative pb-1 ${
                    location.pathname === "/about" ? "text-orange-700" : ""
                  }`}
                >
                  Dashboard
                </h1>
              </Link>
            )}
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
