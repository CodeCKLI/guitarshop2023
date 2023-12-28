import { useState, createContext } from "react";

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const CartItemContext: any = createContext(0);

export const MainPage = () => {
  const [cartItemNumber, setCartItemNumber] = useState(0);

  const updateCartNumber = () => {
    const sumCartItems = sessionStorage.getItem("cartItems");

    if (sumCartItems != null) {
      const numOfCarItems = JSON.parse(sumCartItems);
      setCartItemNumber(numOfCarItems.length);
    }
  };

  return (
    <div>
      <CartItemContext.Provider
        value={{ cartItemNumber, setCartItemNumber, updateCartNumber }}
      >
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
      </CartItemContext.Provider>
    </div>
  );
};
