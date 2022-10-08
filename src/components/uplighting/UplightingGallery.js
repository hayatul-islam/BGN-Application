import React from "react";
import Gallery from "../shared/gallery/Gallery";
// fake data
const photos = {
  img1: "https://images.unsplash.com/photo-1523470738548-e0edd36992e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxuaWdodCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img2: "https://images.unsplash.com/958bi4L1N9s.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fG5pZ2h0JTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  img3: "https://images.unsplash.com/photo-1624409235032-6885f51ce6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxiZWF1dGlmdWwlMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  img4: "https://images.unsplash.com/photo-1570206986634-afd7cccb68d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJlYXV0aWZ1bCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img5: "https://images.unsplash.com/photo-1510665724063-f77a01074aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxuaWdodCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img6: "https://images.unsplash.com/photo-1519906448142-1176f5530f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmlnaHQlMjBob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
};

function UplightingGallery() {
  return (
    <>
      <Gallery photos={photos} />
    </>
  );
}

export default UplightingGallery;
