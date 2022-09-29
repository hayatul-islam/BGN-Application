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
          src="https://player.vimeo.com/external/434492654.sd.mp4?s=db549464aeaefe0340c5b55e7822cba9044fb1a6&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default VideoAnimation;
