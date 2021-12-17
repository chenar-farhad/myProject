import React from "react";
import { Routes, Route } from "react-router-dom";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import BigNavbar from "./components/Navbar/BigNavbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Register from "./pages/Register";
import "./components/myStyle.css";
import "./App.css";
import "../node_modules/antd/dist/antd.css";
import { useMediaQuery } from "react-responsive";
import NotFound404 from "./pages/NotFound404";
import Carts from "./pages/Carts";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./features/ScrollToTop";
import Profile from "./pages/Profile";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1224px)" });

  return (
    <div className="App noselect" style={{ overflowX: "hidden" }}>
      {/* Navbar always shows no matter which route we're on */}
      {isTabletOrMobile && <MobileNavbar />}
      {isBigScreen && <BigNavbar />}
      {/* <BigNavbar /> */}
      {/* Setting up our routes */}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
