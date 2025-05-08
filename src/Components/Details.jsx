import { Link } from "react-router-dom";
import image from "../assets/cart/1.jpg";
import Container from "./Container";
const Details = () => {
  return (
    <Container>
      <div className="relative top-18 mb-8 sm:px-10 sm:py-8 bg-white">
        <div className="flex flex-col md:flex-row gap-8 pb-20 sm:pb-0">
          {" "}
          {/* padding bottom added for mobile fixed button */}
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-full object-cover rounded-lg shadow-md"
              src={image}
              alt="Product"
            />
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Men's Premium T-Shirt - Tranquility
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-red-500 line-through font-semibold text-lg">
                ৳799
              </span>
              <span className="text-green-600 font-bold text-xl">৳699</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              Men's Premium Quality t-shirt offers a much smoother, silky feel
              and a more structured, mid-weight fit than regular t-shirts. Made
              with the finest quality Combed Compact Cotton (~175 GSM), it
              ensures a smooth and compact construction. Men's Premium Quality
              t-shirt offers a much smoother, silky feel and a more structured,
              mid-weight fit than regular t-shirts. Made with the finest quality
              Combed Compact Cotton (~175 GSM), it ensures a smooth and compact
              construction. ensures a smooth and compact construction. Men's
              Premium Quality t-shirt offers a much smoother, silky feel and a
              more structured, mid-weight fit than regular t-shirts. Made with
              the finest quality Combed Compact Cotton (~175 GSM), it ensures a
              smooth and compact construction.
            </p>

            {/* Size Selector */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Size
              </label>
              <select className="w-32 border rounded px-3 py-2 text-sm">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 border rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Buy Now Button for sm and up */}
            <div className="pt-4 hidden sm:block">
              <Link to="/checkout">
                <button className="bg-black w-[50%] cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-900 hover:scale-105 active:scale-95 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Fixed Buy Button */}
        <div className="fixed bottom-0 left-0 w-full bg-white cursor-pointer  p-4 sm:hidden z-50">
          <Link to="/checkout">
            <button className="w-full bg-black text-white py-3 hover:bg-gray-900 hover:scale-105 active:scale-95 rounded text-lg font-semibold transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Details;
