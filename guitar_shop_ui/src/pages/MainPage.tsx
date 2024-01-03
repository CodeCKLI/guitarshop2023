import { useState, createContext } from "react";

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const CartItemContext: any = createContext(0);
export const NavLogInContext: any = createContext(false);

export const MainPage = () => {
  const [cartItemNumber, setCartItemNumber] = useState(0);
  const [isNavLoggedIn, setIsNavLoggedIn] = useState(false);

  const updateCartNumber = () => {
    const sumCartItems = sessionStorage.getItem("cartItems");

    if (sumCartItems != null) {
      const numOfCarItems = JSON.parse(sumCartItems);
      setCartItemNumber(numOfCarItems.length);
      return;
    }
    setCartItemNumber(0);
  };

  return (
    <div>
      <CartItemContext.Provider
        value={{ cartItemNumber, setCartItemNumber, updateCartNumber }}
      >
        <NavLogInContext.Provider value={{ isNavLoggedIn, setIsNavLoggedIn }}>
          <Navbar></Navbar>
          <Outlet />
          <Footer></Footer>
        </NavLogInContext.Provider>
      </CartItemContext.Provider>
    </div>
  );
};
