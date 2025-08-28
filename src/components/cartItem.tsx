import { useEffect, useState } from "react";
import { products } from "../products";
import { useAppDispatch } from "../shared/hooks/redux";
import { changeQuantity } from "../stores/cart";
import type { ProductT } from "../shared/types";

interface CartItemT {
  data: {
    productId: number;
    quantity: number;
  };
}

export const CartItem = (props: CartItemT) => {
  const { productId, quantity } = props?.data;
  const [detail, setDetail] = useState<ProductT>();
  const dispatch = useAppDispatch();

  const handleChangeQuantity = (action: "plus" | "minus") => {
    switch (action) {
      case "minus":
        dispatch(
          changeQuantity({
            productId: productId,
            quantity: quantity - 1,
          })
        );
        break;
      case "plus":
        dispatch(
          changeQuantity({
            productId: productId,
            quantity: quantity + 1,
          })
        );
        break;
    }
  };

  useEffect(() => {
    const findDetail = products.filter((product) => product.id === productId)[0];
    setDetail(findDetail);
  }, [productId]);

  return (
    <div className="text-white p-2 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={detail?.image} alt="" className="w-12 object-contain" />
          <h3>{detail?.name}</h3>
        </div>
        <div className="flex justify-between  gap-1">
          <button
            className="cursor-pointer bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={() => handleChangeQuantity("minus")}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
            onClick={() => handleChangeQuantity("plus")}
          >
            +
          </button>
        </div>
      </div>
      <p className="">{detail?.desription}</p>
    </div>
  );
};
