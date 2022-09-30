import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContractUs from "../components/shared/contracts/ContractUs";
import Header from "../components/shared/header/Header";
import Home from "./Home";

function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ContractUs />
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
