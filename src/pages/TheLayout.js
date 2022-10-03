import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/shared/header/Header";
import Test from "../components/shared/Test";
import Home from "./Home";

function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        {/* <ContractUs /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
