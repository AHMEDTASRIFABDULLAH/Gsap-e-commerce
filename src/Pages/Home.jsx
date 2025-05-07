import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Explore from "../Components/Explore";
import Review from "../Components/Review";

const Home = () => {
  return (
    <>
      <Carousel />
      <Container>
        <div className="pb-3 sm:pb-6">
          <h1 className="text-xl sm:text-3xl text-center text-black font-semibold py-4 sm:py-6">
            Our Collections
          </h1>
          <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Explore />
        <Review />
      </Container>
    </>
  );
};

export default Home;
