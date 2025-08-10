import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { CartTab } from "./cartTab";

export const Layout = () => {
  return (
    <div className="">
      <main className="w-[1200px] max-w-full m-auto p-5">
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};
