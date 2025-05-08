import React, { useState } from "react";
import Container from "./Container";
import { FaCheckCircle } from "react-icons/fa";
const OrderForm = () => {
  const [oder, setoder] = useState({
    name: "",
    email: "",
    price: "699",
    discountPrice: "599",
    phone: "",
  });

  console.log(oder); // For debugging purposes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setoder({
      ...oder,
      [name]: value,
    });
  };

  return (
    <Container>
      <div className="relative top-12 sm:top-16 md:top-17 min-h-screen">
        <div className="max-w-2xl mx-auto p-4 border border-gray-200 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
          <form className="space-y-4">
            {/* Grid Container for Paired Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={oder.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={oder.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Price</label>
                <input
                  type="number"
                  name="price"
                  disabled
                  value={oder.price}
                  className="w-full p-2 border rounded text-black"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Discount Price</label>
                <input
                  type="number"
                  name="discountPrice"
                  disabled
                  value={oder.discountPrice}
                  className="w-full p-2 border rounded text-black"
                />
              </div>
            </div>

            <div className=" flex justify-between items-center mt-4">
              <h1 className="text-lg font-medium flex items-center gap-2">
                {" "}
                <FaCheckCircle className="text-lime-600" />
                Cash on Delivery
              </h1>
              <h1 className="text-lg font-bold "> Total : 599</h1>
            </div>

            <button
              type="submit"
              className="bg-black w-full py-2 cursor-pointer px-4 rounded-sm text-white font-semibold hover:bg-gray-900 hover:scale-105 active:scale-95"
            >
              Submit Order
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default OrderForm;
