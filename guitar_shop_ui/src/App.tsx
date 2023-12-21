import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DetailPage } from "./pages/DetailsPage";
import { NotFound } from "./pages/NotFound";

// MUI
import { CssBaseline } from "@mui/material";
import { LandingPage } from "./pages/LandingPage";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import { CheckOutPage } from "./pages/CheckOutPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/details" element={<DetailPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user" element={<UserInfoPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
