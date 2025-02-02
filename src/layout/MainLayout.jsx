import { Outlet } from "react-router-dom";
import { Navbar } from "../components/header/navbar/navbar";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet/>
      </div>
    </div>
  );
};
