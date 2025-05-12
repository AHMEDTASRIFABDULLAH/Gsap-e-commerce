import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Hooks/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
const Card = ({ data, refetch }) => {
  const { isAdmin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/delete-products/${id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <div className="hover:shadow-2xl cursor-pointer max-w-[420px]">
        <Link to={`/details/${data?._id}`}>
          {" "}
          <img className="object-cover" src={data?.image} alt="" />
          <h1 className="text-black font-semibold pt-1 text-center text-[12px] sm:text-[16px]">
            {/* Mens Premium Designer Edition T Shirt */}
            {data?.title}
          </h1>
          <div className="flex items-center gap-2 sm:gap-4 py-1 justify-center">
            <h1 className="line-through font-semibold  text-red-400 text-[13px] sm:text-[16px]">
              ৳{data?.discountPrice}
            </h1>
            <h1 className="text-black font-semibold   text-[13px] sm:text-[16px]">
              ৳{data?.price}
            </h1>
          </div>
          <div className="bg-black flex justify-center cursor-pointer">
            <div className="flex justify-between gap-3 items-center py-1">
              <FaCartShopping className="text-white cursor-pointer" />{" "}
              <h1 className="text-white font-semibold cursor-pointer">
                Buy Now
              </h1>
            </div>
          </div>
        </Link>

        {isAdmin && (
          <button
            onClick={() => handelDelete(data?._id)}
            className="bg-red-600 mt-2 flex justify-center w-full cursor-pointer"
          >
            <div className="flex justify-between gap-3 items-center py-1">
              <FaCartShopping className="text-white cursor-pointer" />{" "}
              <h1 className="text-white font-semibold cursor-pointer">
                Delete
              </h1>
            </div>
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
