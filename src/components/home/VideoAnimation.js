import React from "react";

function VideoAnimation() {
  return (
    <>
      <div className="fixed w-[100%] h-screen sm:h-[500px]  md:h-[460px] lg:h-[530px] z-[-50] top-0 md:top-[15%]  lg:top-[20%] md:px-[40px] lg:px-[50px] xl:px-[70px]">
        <video
          className="w-full h-full md:rounded-[100px] object-cover opacity-30"
          autoPlay
          muted
          loop
        >
          <source
            src="https://player.vimeo.com/external/581530559.sd.mp4?s=ca2ce59280e99e9cc0f3ec570aaa4394660ac1c1&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default VideoAnimation;
