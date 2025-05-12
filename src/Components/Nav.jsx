import { FaShoppingCart } from "react-icons/fa";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const location = useLocation();
  const { isAdmin, searchTerm, setSearchTerm } = useContext(AuthContext);

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
        className={`bg-white fixed top-0 left-0 pt-10 w-[280px] min-h-screen z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={28} className="text-black" />
        </div>
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

      {/* Navbar */}
      <header className="bg-white w-full fixed top-0 z-40 shadow-md">
        <div className="py-2 sm:py-3 px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <AiOutlineMenu
              onClick={() => setIsOpen(true)}
              className="text-[22px] block sm:hidden cursor-pointer"
            />
            <h1 className="text-[22px] cursor-pointer font-bold">Trendora</h1>
          </div>

          <div className="hidden sm:flex justify-between items-center gap-6">
            <Link to="/">
              <h1
                className={`font-bold text-[14px] cursor-pointer ${
                  location.pathname === "/" ? "text-orange-700" : ""
                }`}
              >
                Home
              </h1>
            </Link>
            <Link to="/products">
              <h1
                className={`font-bold text-[14px] cursor-pointer ${
                  location.pathname === "/products" ? "text-orange-700" : ""
                }`}
              >
                Products
              </h1>
            </Link>
            <Link to="/about">
              <h1
                className={`font-bold text-[14px] cursor-pointer ${
                  location.pathname === "/about" ? "text-orange-700" : ""
                }`}
              >
                About
              </h1>
            </Link>
            {isAdmin && (
              <Link to="/dashboard/orders">
                <h1
                  className={`font-bold text-[14px] cursor-pointer ${
                    location.pathname === "/dashboard/orders"
                      ? "text-orange-700"
                      : ""
                  }`}
                >
                  Dashboard
                </h1>
              </Link>
            )}
          </div>

          {/* Search & Cart */}
          <div className="flex items-center gap-4 relative">
            <IoSearchSharp
              className="text-[22px] cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setShowSearchModal(!showSearchModal)}
            />
            {/* <FaShoppingCart className="text-[22px] cursor-pointer" /> */}
          </div>
        </div>
      </header>

      {/* Search Modal Under Navbar */}
      <div
        className={`fixed left-0 w-full bg-white px-4 py-2 shadow-md z-40 flex justify-center transition-all duration-300 ${
          showSearchModal
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ top: "48px" }}
      >
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-xl border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </>
  );
};

export default Nav;
