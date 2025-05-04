import React, { useState } from "react";

const OrderForm = () => {
  const [oder, setoder] = useState({
    name: "",
    email: "",
    price: "699",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending data to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzyoOssKuc3VgTx8slq62x4tAV8Eovf25Luii7VRf8qJEUYQ-yRE9eaWeIsCrpQC45M/exec",
        {
          method: "POST",
          mode: "no-cors", // Prevent CORS errors
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(oder), // Sending data from the form
        }
      );

      // If the request is successful, show success message
      alert("✅ Order submitted successfully!");

      // Reset form after successful submission
      setoder({
        name: "",
        email: "",
        price: "699",
        phone: "",
      });
    } catch (error) {
      console.error("❌ Error submitting order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="px-4">
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              disabled
              value={oder.price}
              className="w-full p-2 border rounded text-black"
            />
          </div>
          <div className="text-lg font-medium">Cash on Delivery</div>
          <button
            type="submit"
            className="bg-green-600 w-full py-2 cursor-pointer px-4 rounded-sm text-white font-semibold hover:bg-green-700"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
