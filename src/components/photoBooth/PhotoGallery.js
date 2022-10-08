import React from "react";
import Gallery from "../shared/gallery/Gallery";
// fake data
const photos = {
  img1: "https://images.unsplash.com/photo-1523470738548-e0edd36992e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxuaWdodCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img2: "https://images.unsplash.com/photo-1513292711443-f4f9e2702566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEzfHxiZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img3: "https://plus.unsplash.com/premium_photo-1661292079234-a1572bd9a92a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img4: "https://images.unsplash.com/photo-1554080353-321e452ccf19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img5: "https://images.unsplash.com/photo-1661347333292-b783583d4210?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  img6: "https://images.unsplash.com/photo-1516635572575-84ee3373085c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
};

function PhotoGallery() {
  return (
    <>
      <Gallery photos={photos} />
    </>
  );
}

export default PhotoGallery;
