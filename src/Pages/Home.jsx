import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
  <>
  <Nav/>
  <Carousel/>
  <div className="bg-red-400">
    <h1 className="text-4xl text-center p-4">Our main section </h1>
  </div>
  </>
  );
};

export default Home;
