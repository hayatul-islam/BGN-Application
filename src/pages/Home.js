import React, { useState } from "react";
import BestWedding from "../components/home/BestWedding";
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
      <BestWedding />
      {showVideo && <VideoAnimation />}
      {/* <MeetTheTeam />
      <div className="px-6">
        <Events />
      </div>
      <div className="pl-6">
        <Gallery />
      </div>
      <Testimonials />
      <div className="px-[70px] py-[250px]">
        <TakeEvents />
      </div> */}
    </>
  );
}

export default Home;
