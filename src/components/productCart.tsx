import { Link } from "react-router-dom";
import { addToCart } from "../stores/cart";
import { useAppDispatch } from "../shared/hooks/redux";

export const ProductCart = (props: any) => {
  const { id, name, image, price, slug } = props.data;
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <div className="px-[30px] py-[20px] h-full flex flex-col border-[2px] border-[#F9F8F8] rounded-[30px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <Link to={slug}>
        <img src={image} alt="" />
      </Link>
      <div className="mt-auto">
        <h2 className="pb-[10px] border-b-[1px] border-b-[#DEDDDD] font-semibold text-[20px] text-[#274C5B]">{name}</h2>
        <div className="pt-[10px] flex items-center justify-between">
          <p className=" font-bold text-[18px] text-[#274C5B]">${price}</p>
          <div
            className="cursor-pointer text-[#274C5B] font-bold text-[18px] transition duration-300 hover:text-[#EFD372]"
            onClick={handleAddToCart}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};
