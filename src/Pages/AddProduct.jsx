import { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddProduct = () => {
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
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
      // Step 1: Upload Image to Cloudinary
      const imageData = new FormData();
      imageData.append("file", formData.image);
      imageData.append("upload_preset", "unsigned_preset");
      imageData.append("cloud_name", "dg2gixvgw");

      const cloudinaryRes = await fetch(
        "https://api.cloudinary.com/v1_1/dg2gixvgw/image/upload",
        {
          method: "POST",
          body: imageData,
        }
      );

      const cloudinaryData = await cloudinaryRes.json();
      const imageUrl = cloudinaryData.secure_url;

      if (!imageUrl) {
        alert("Image upload failed!");
        return;
      }

      // Step 2: Prepare Product Data
      const productData = {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        discountPrice: formData.discountPrice,
        size: formData.size,
        color: formData.color,
        image: imageUrl, // Cloudinary image URL
      };

      // Step 3: Send to your backend
      await axiosPublic.post("/add-produtcs", productData);
      // Optional: Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        discountPrice: "",
        size: "",
        color: "",
        image: null,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added  successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
      alert("Error adding product.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-6 p-6 bg-white rounded-2xl shadow-sm">
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
              placeholder=" Max length 25 letters"
              maxLength={25}
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
            <div className="relative">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                id="imageUpload"
                className="hidden"
                required
              />
              <label
                htmlFor="imageUpload"
                className="inline-block cursor-pointer px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
              >
                Upload Image
              </label>
              {formData.image && (
                <p className="text-sm text-gray-600 mt-1">
                  Selected:{" "}
                  <span className="font-medium">{formData.image.name}</span>
                </p>
              )}
            </div>
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
          className="w-full cursor-pointer bg-black text-white py-3 hover:bg-gray-900 rounded-lg font-semibold transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
