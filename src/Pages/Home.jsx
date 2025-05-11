import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Explore from "../Components/Explore";
import Review from "../Components/Review";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loder from "../Components/Loder";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const { data: homeProducts, isLoading } = useQuery({
    queryKey: ["homeProducts"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/home-products`);
      return data;
    },
  });
  if (isLoading) return <Loder />;
  return (
    <>
      <Carousel />
      <Container>
        <div className="pb-3 sm:pb-6">
          <h1 className="text-xl sm:text-3xl text-center text-black font-semibold py-4 sm:py-6">
            Our Collections
          </h1>
          <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
            {homeProducts?.map((data) => (
              <Card key={data._id} data={data} />
            ))}
          </div>
        </div>
        <Explore />
        <Review />
      </Container>
    </>
  );
};

export default Home;
