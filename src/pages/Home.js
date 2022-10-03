import React, { useState } from "react";
import BestWedding from "../components/home/BestWedding";
import Events from "../components/home/Events";
import Gallery from "../components/home/Gallery";
import MeetTheTeam from "../components/home/MeetTheTeam";
import Testimonials from "../components/home/Testimonials";
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
      <Gallery />
      <Testimonials />
      {/* <div className="px-[70px] py-[250px]">
        <TakeEvents />
      </div> */}
    </>
  );
}

export default Home;
