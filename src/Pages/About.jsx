import React from "react";
import aboutImg from "../assets/about_us_img_11.png";
import Container from "../Components/Container";
const About = () => {
  window.scrollTo(0, 0);
  return (
    <Container>
      <div className="relative top-18 min-h-screen bg-white text-gray-800 mb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-3xl text-center text-black font-semibold py-4 sm:pb-10">
            About Us
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src={aboutImg}
              alt="Our store"
              className="w-full rounded-2xl shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Welcome to Our Shop
              </h2>
              <p className="text-gray-600 mb-4">
                We're passionate about delivering the best online shopping
                experience. From fashion to electronics, we offer top-quality
                products at great prices.
              </p>
              <p className="text-gray-600">
                Our mission is to make online shopping easy, fast, and fun. We
                focus on customer satisfaction, quality service, and fast
                delivery.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Trusted Quality",
                  desc: "We source the best products and maintain strict quality standards.",
                },
                {
                  title: "Fast Delivery",
                  desc: "Speedy shipping so you get your orders right on time.",
                },
                {
                  title: "Customer Support",
                  desc: "Friendly, helpful support available 24/7.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-xl shadow hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
