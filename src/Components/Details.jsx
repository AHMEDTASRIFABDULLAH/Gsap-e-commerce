import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import Loder from "./Loder";

const Details = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { details, setData } = useContext(AuthContext);

  const { data, isLoading } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/details/${id}`);
      return data;
    },
  });

  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (data?.color) {
      const selectedData = {
        size,
        quantity,
        color: data?.color,
        total: data?.price,
      };
      localStorage.setItem("checkoutData", JSON.stringify(selectedData));
    }
  }, [size, quantity, data?.color]);
  if (isLoading) return <Loder />;
  window.scrollTo(0, 0);
  return (
    <Container>
      <div className="relative top-18 mb-8 sm:px-10 sm:py-8 bg-white">
        <div className="flex flex-col md:flex-row gap-8 pb-20 sm:pb-0">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-full object-cover rounded-lg shadow-md"
              src={data?.image}
              alt={data?.title || "Product"}
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {data?.title}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-red-500 line-through font-semibold text-lg">
                ৳{data?.price}
              </span>
              <span className="text-green-600 font-bold text-xl">
                ৳{data?.discountPrice}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {data?.description}
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-medium text-gray-700">Color :</span>{" "}
              {data?.color}
            </p>

            {/* Size Selector */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Size
              </label>
              <select
                className="w-32 border rounded px-3 py-2 text-sm"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            {/* Quantity Counter */}
            <div>
              <label className="block  font-medium text-gray-700 mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 text-lg border rounded"
                >
                  -
                </button>
                <span className="min-w-[30px] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-1 text-lg border rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buy Now Button for sm and up */}
            <div className="pt-4 hidden sm:block">
              <Link
                to="/checkout"
                state={{ size, quantity }}
                className="bg-black w-[50%] text-center text-white px-6 py-2 rounded hover:bg-gray-900 hover:scale-105 active:scale-95 transition inline-block"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Fixed Buy Button */}
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 sm:hidden z-50">
          <Link
            to="/checkout"
            state={{ size, quantity }}
            className="block w-full bg-black text-white py-3 hover:bg-gray-900 hover:scale-105 active:scale-95 rounded text-lg font-semibold text-center transition"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Details;
