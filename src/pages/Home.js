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
      <BestWedding />
      {showVideo && <VideoAnimation />}
      <MeetTheTeam />
      <Events />
      {/* <div className="pl-6">
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
