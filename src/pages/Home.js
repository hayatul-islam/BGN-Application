import React from "react";
import BestWedding from "../components/home/BestWedding";
import VideoAnimation from "../components/home/VideoAnimation";

function Home() {
  return (
    <>
      <div className="pt-[260px] px-[70px]">
        <div className="">
          <BestWedding />
          <div className="fixed w-[91%] h-[530px] top-[20%] z-0  ">
            <VideoAnimation />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
