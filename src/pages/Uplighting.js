import React from "react";
import Explores from "../components/uplighting/Explores";
import Highlights from "../components/uplighting/Highlights";
import Possibilities from "../components/uplighting/Possibilities";
import UplightingGallery from "../components/uplighting/UplightingGallery";

function Uplighting() {
  return (
    <>
      <Highlights />
      <Possibilities />
      <UplightingGallery />
      <Explores />
    </>
  );
}

export default Uplighting;
