import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Explore from "../Components/Explore";
import Review from "../Components/Review";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loder from "../Components/Loder";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Hooks/AuthProvider";
import { useLocation } from "react-router-dom";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const { searchTerm, setSearchTerm } = useContext(AuthContext);
  const location = useLocation();
  const {
    data: homeProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["homeProducts"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/home-products`);
      return data;
    },
  });
  useEffect(() => {
    setSearchTerm("");
  }, [location.pathname]);
  if (isLoading) return <Loder />;

  const filteredProducts = homeProducts?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  window.scrollTo(0, 0);
  return (
    <>
      <Carousel />
      <Container>
        <div className="pb-3 sm:pb-6">
          <h1 className="text-xl sm:text-3xl text-center text-black font-semibold py-4 sm:py-6">
            Our Collections
          </h1>
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
        </div>
        <Explore />
        <Review />
      </Container>
    </>
  );
};

export default Home;
