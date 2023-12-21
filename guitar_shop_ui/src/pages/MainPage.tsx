import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
