import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
import Container from "../Components/Container";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Carousel />
      <Container>
        <div className="pb-3 sm:pb-6">
          <h1 className="sm:text-xl text-center text-black font-semibold p-4">
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
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
