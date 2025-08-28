import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ProductT } from "../shared/types";
import { products } from "../products";
import { Arrow } from "../components/ui/icons/arrow";
import { useAppDispatch } from "../shared/hooks/redux";
import { addToCart } from "../stores/cart";

export const Detail = () => {
  const [detail, setDetail] = useState<ProductT>();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { slug } = useParams();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail?.id || 1,
        quantity: quantity,
      })
    );
  };

  useEffect(() => {
    const findDetail = products.filter((item) => item.slug === slug)[0];
    setDetail(findDetail);
  }, [slug]);

  return (
    <div className="flex items-center justify-between gap-[90px]">
      <img src={detail?.image} alt="" className="w-[50%] max-h-[560px] rounded-[10px]" />
      <div className="flex-1 flex flex-col gap-[10px]">
        <h2 className="font-semibold text-[40px] text-[#274C5B]">{detail?.name}</h2>
        <p className="font-bold text-[25px] text-[#274C5B]">${detail?.price}</p>
        <p className="font-regular text-[18px] text-[#525C60]">{detail?.desription}</p>
        <div className="pt-[25px] flex items-center gap-[20px]">
          <div className="flex items-center gap-[20px]">
            <p className="font-bold text-[20px] text-[#274C5B]">Quantity :</p>
            <input
              type="numeric"
              onChange={(e: any) => setQuantity(Number(e.target.value))}
              value={quantity}
              className="p-2.5 rounded-[16px] border-[2px] border-[#274C5B] max-w-[130px] max-h-[80px] text-[#274C5B] text-[20px] input_detail"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="text-white bg-[#274C5B] border-[#274C5B] border-[2px] py-[28px] px-[40px] flex items-center rounded-[16px] h-[50px] gap-2.5 transition duration-100 cursor-pointer hover:bg-[unset] hover:text-[#274C5B]"
          >
            Add To Cart <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};
