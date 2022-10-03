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
      <div className="pt-[260px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px]">
        <BestWedding />
        {showVideo && (
          <div className="fixed w-[91%] h-[530px] z-[-50] top-[20%]">
            <VideoAnimation />
          </div>
        )}
      </div>
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
