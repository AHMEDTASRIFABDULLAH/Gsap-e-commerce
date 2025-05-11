import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <Link to={`/details/${data?._id}`}>
      <div className="hover:shadow-2xl cursor-pointer max-w-[420px]">
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
            <button className="text-white font-semibold cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
