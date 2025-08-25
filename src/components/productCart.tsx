import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";
import type { RootState } from "../stores";

export const ProductCart = (props: any) => {
  const carts = useSelector((store: RootState) => store.cart.items);
  const { id, name, image, price, slug } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <div className="px-[30px] py-[20px] h-full flex flex-col border-[2px] border-[#F9F8F8] rounded-[30px]">
      <Link to={slug}>
        <img src={image} alt="" />
      </Link>
      <div className="mt-auto">
        <h2 className="pb-[10px] border-b-[1px] border-b-[#DEDDDD] font-semibold text-[20px] text-[#274C5B]">{name}</h2>
        <div className="pt-[10px] flex items-center justify-between">
          <p className=" font-bold text-[18px] text-[#274C5B]">${price}</p>
          <div className="cursor-pointer text-[#274C5B] font-bold text-[18px]" onClick={handleAddToCart}>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};
