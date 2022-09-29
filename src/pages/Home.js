import React, { useState } from "react";
import BestWedding from "../components/home/BestWedding";
import Events from "../components/home/Events";
import MeetTheTeam from "../components/home/MeetTheTeam";
import VideoAnimation from "../components/home/VideoAnimation";

function Home() {
  const [showVideo, setShowVidow] = useState(true);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setShowVidow(false);
    } else {
      setShowVidow(true);
    }
  }
  return (
    <>
      <div className="pt-[260px] px-[70px]">
        <BestWedding />
        {showVideo && (
          <div className="fixed w-[91%] h-[530px] top-[20%] z-0  ">
            <VideoAnimation />
          </div>
        )}
      </div>
      <MeetTheTeam />
      <div className="px-6">
        <Events />
      </div>
    </>
  );
}

export default Home;
