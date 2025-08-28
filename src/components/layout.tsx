import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { CartTab } from "./cartTab";
import { useAppSelector } from "../shared/hooks/redux";

export const Layout = () => {
  const statusTabCart = useAppSelector((store) => store.cart.statusTab);

  return (
    <div className="">
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 ${
          statusTabCart === false ? "" : "-translate-x-56"
        }`}
      >
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};
