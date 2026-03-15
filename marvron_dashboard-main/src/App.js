import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductServices from "./pages/ProductServices";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product-services" element={<ProductServices />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
