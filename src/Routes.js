import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Constructor } from "./components/Constructor/Constructor.js";
import { HomePage } from "./components/HomePage/HomePage.js";
import { Gallery } from "./components/Gallery/Gallery";
import { About } from "./components/About/About.js";
import { Catalog } from "./components/Catalog/Catalog.js";
import Header from "./components/Header/Header.js";
const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
