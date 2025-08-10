import { Link } from "react-router-dom";
import { Logo } from "./ui/icons/logo";
import { Cart } from "./ui/icons/cart";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Link to="/" className="flex items-center gap-[8px] font-bold text-[38px] text-[#274C5B]">
        <Logo />
        Organick
      </Link>
      <div className="flex items-center p-[5px] gap-[12px] border-[1px] border-[#E0E0E0] rounded-[33px] pr-[23px] cursor-pointer">
        <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#274C5B] rounded-[100px]">
          <Cart />
        </div>
        <div className="font-semibold text-[18px] text-[#274C5B]">Cart (0)</div>
      </div>
    </header>
  );
};
