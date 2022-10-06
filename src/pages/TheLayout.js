import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContractUs from "../components/shared/contracts/ContractUs";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import About from "./About";
import Contract from "./Contract";
import Home from "./Home";
import Uplighting from "./Uplighting";

function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<About />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/uplighting" element={<Uplighting />} />
        </Routes>
        <ContractUs />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
