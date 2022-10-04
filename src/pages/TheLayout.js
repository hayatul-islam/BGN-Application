import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContractUs from "../components/shared/contracts/ContractUs";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import About from "./About";
import Home from "./Home";

function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ContractUs />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
