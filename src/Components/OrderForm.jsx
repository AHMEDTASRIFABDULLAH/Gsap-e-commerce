import { useEffect, useState } from "react";
import Container from "./Container";
import { FaCheckCircle } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("checkoutData");
    if (savedData) {
      setDetails(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== "/checkout") {
      localStorage.removeItem("checkoutData");
    }
  }, [location.pathname]);

  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    color: "",
    quantity: "",
    total: "",
    size: "",
    date: new Date().toISOString(),
  });

  // update order once details are loaded
  useEffect(() => {
    if (details) {
      setOrder((prev) => ({
        ...prev,
        color: details.color,
        quantity: details.quantity,
        total: details.total,
        size: details.size,
      }));
    }
  }, [details]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phonePattern = /^01\d{9}$/;
    if (!phonePattern.test(order.phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Phone number must start with 01 and be exactly 11 digits.",
      });
      return;
    }
    try {
      await axiosPublic.post("/add-orders", order);
      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Order submitted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={order.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                name="email"
                value={order.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="number"
                name="phone"
                value={order.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="border rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="address"
                value={order.address}
                onChange={handleChange}
                required
                placeholder="Address"
                className="border rounded-lg px-4 py-2"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <FaCheckCircle className="text-green-500 text-lg" />
              <span className="text-base font-medium text-gray-700">
                Cash on Delivery
              </span>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900"
            >
              Order
            </button>
            {details && (
              <div className="text-center pt-4 border-t border-gray-200">
                <p>
                  Color: <strong>{details.color}</strong>
                </p>
                <p>
                  Size: <strong>{details.size}</strong>
                </p>
                <p>
                  Quantity: <strong>{details.quantity}</strong>
                </p>
                <p>
                  Total: <strong>৳{details.total}</strong>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default OrderForm;
