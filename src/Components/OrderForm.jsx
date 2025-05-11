import React, { useContext, useState } from "react";
import Container from "./Container";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../Hooks/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const OrderForm = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { details } = useContext(AuthContext);
  const [oder, setoder] = useState({
    name: "",
    email: "",
    phone: "",
    color: details?.color,
    quantity: details?.quantity,
    total: details?.total,
    size: details?.size,
    date: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setoder({
      ...oder,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosPublic.post("/add-orders", oder);
      alert("Order submitted successfully");
      navigate("/");
    } catch (error) {
      alert("Error submitting order:", error);
    }
  };

  return (
    <Container>
      <div className="relative top-12 sm:top-16 md:top-12 min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Place Your Order
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={oder.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={oder.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex items-center gap-2 mt-4">
              <FaCheckCircle className="text-green-500 text-lg" />
              <span className="text-base font-medium text-gray-700">
                Cash on Delivery
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold text-base hover:bg-gray-900 cursor-pointer transition-transform transform hover:scale-103 active:scale-95"
            >
              Order
            </button>

            {/* Summary Info */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Color:{" "}
                <span className="font-medium text-gray-800">
                  {details?.color}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Size:{" "}
                <span className="font-medium text-gray-800">
                  {details?.size}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Quantity:{" "}
                <span className="font-medium text-gray-800">
                  {details?.quantity}
                </span>
              </p>
              <p className="text-lg font-bold text-gray-800 mt-2">
                Total: ৳{details?.total}
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default OrderForm;
