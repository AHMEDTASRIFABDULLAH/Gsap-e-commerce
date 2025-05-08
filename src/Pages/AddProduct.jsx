import { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AddProduct = () => {
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
    size: "",
    color: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosPublic.post(`/add-produtcs`, formData);

      alert("data added");
    } catch (error) {
      alert("erros");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Product title"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Original price"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Discount Price ($)
            </label>
            <input
              type="number"
              name="discountPrice"
              value={formData.discountPrice}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Discounted price"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Size</label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="" disabled>
                Select a size
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="e.g. Red, Blue"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write a brief description..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
