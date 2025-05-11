import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FiHome, FiBox, FiPlusCircle } from "react-icons/fi";

const Dashboard = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Orders", path: "/dashboard/orders", icon: <FiBox /> },
    {
      name: "Add Products",
      path: "/dashboard/add-product",
      icon: <FiPlusCircle />,
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar for large screens */}
      <div className="w-64 hidden md:block bg-gray-100 text-gray-800 p-6 border-r border-gray-300 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-700">
          Dashboard
        </h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-200 ${
                location.pathname === item.path
                  ? "border-l-4 border-black bg-white text-black font-semibold"
                  : "hover:border-l-4 hover:border-black hover:bg-gray-200"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Drawer header for small screens */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="flex items-center justify-between p-4 ">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Drawer with slide-in transition */}
      <div
        className={`fixed top-0 left-0 h-full w-full z-50 transition-all duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gray-50 bg-opacity-40"
          onClick={() => setDrawerOpen(false)}
        ></div>

        {/* Drawer Panel */}
        <div
          className="relative w-64 bg-gray-100 h-full p-6 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close icon inside drawer */}
          <div className="flex justify-end mb-6">
            <IoClose
              className="text-2xl cursor-pointer text-gray-800"
              onClick={() => setDrawerOpen(false)}
            />
          </div>

          <h2 className="text-xl font-bold mb-6">Dashboard</h2>

          {/* Drawer nav links */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-r-full transition-all duration-200 ${
                  location.pathname === item.path
                    ? "border-l-4 border-black bg-white text-black font-semibold"
                    : "hover:border-l-4 hover:border-black hover:bg-gray-200"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 pt-16 md:pt-0 p-6 bg-white overflow-y-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
