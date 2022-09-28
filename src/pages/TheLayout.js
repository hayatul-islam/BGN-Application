import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "../components/shared/header/Header";

function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
