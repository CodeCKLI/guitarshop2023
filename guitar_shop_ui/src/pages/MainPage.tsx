import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const MainPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};
