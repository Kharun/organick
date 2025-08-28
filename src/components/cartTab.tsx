import { useAppDispatch, useAppSelector } from "../shared/hooks/redux";
import { toggleStatusTab } from "../stores/cart";
import { CartItem } from "./cartItem";

export const CartTab = () => {
  const carts = useAppSelector((state) => state.cart.items);
  const statusTab = useAppSelector((store) => store.cart.statusTab);
  const dispatch = useAppDispatch();
  const handleCloseTab = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`fixed w-96 right-0 top-0 h-full bg-[#274C5B] overflow-y-auto custom_scrollbar transform transition-transform duration-500 ${
        statusTab === false ? "translate-x-full" : ""
      }`}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5 flex flex-col gap-[10px]">
        {carts.map((item, key) => (
          <CartItem data={item} key={key} />
        ))}
      </div>
      <div className="grid grid-cols-2 w-full absolute bottom-0">
        <button className="bg-black text-white cursor-pointer p-2" onClick={handleCloseTab}>
          CLOSE
        </button>
        <button className="bg-[#EFD372] text-white cursor-pointer p-2">CHECKOUT</button>
      </div>
    </div>
  );
};
