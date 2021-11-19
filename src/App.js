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
import Hero from "./components/Hero";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1224px)" });

  return (
    <div className="App">
      {/* Navbar always shows no matter which route we're on */}
      {/* {isTabletOrMobile && <MobileNavbar />}
      {isBigScreen && <BigNavbar />} */}
      <Hero/>
      <BigNavbar/>
      {/* Setting up our routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        {/* if the URL is /login  , render the Login component */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
