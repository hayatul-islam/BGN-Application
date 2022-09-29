import React from "react";

function VideoAnimation() {
  return (
    <>
      <video
        className=" w-full h-full rounded-[100px] object-cover opacity-30"
        autoPlay
        muted
        loop
      >
        <source
          src="https://player.vimeo.com/external/581530559.sd.mp4?s=ca2ce59280e99e9cc0f3ec570aaa4394660ac1c1&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default VideoAnimation;
