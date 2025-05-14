import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import Container from "../Components/Container";
import banner from "../assets/cart/b2.jpg";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loder from "../Components/Loder";
import { AuthContext } from "../Hooks/AuthProvider";
import { useLocation } from "react-router-dom";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const [sortOption, setSortOption] = useState("newest");
  const { searchTerm, setSearchTerm } = useContext(AuthContext);
  const location = useLocation();
  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);
  const {
    data: homeProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", sortOption],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/products?sort=${sortOption}`);
      return data;
    },
  });

  if (isLoading) return <Loder />;

  const filteredProducts = homeProducts?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  window.scrollTo(0, 0);
  return (
    <>
      <div className="mt-5">
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
            <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-bold leading-tight mb-3 sm:mb-4 animate-fadeInUp">
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

        {/* Products Section with Sorting */}
        <div className="flex justify-between items-center px-4 sm:px-6">
          <h1 className="text-[18px] sm:text-3xl text-black font-semibold py-4 sm:py-6">
            Products
          </h1>

          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-black font-semibold">
              Sort by:
            </label>
            <select
              id="sort"
              className="border rounded px-2 py-1 text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-low-high">Low to High</option>
              <option value="price-high-low">High to Low</option>
            </select>
          </div>
        </div>

        <Container>
          <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
            {filteredProducts?.length > 0 ? (
              filteredProducts.map((data) => (
                <Card key={data._id} data={data} refetch={refetch} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 py-10 text-lg">
                No products found.
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;
