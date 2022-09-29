import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
