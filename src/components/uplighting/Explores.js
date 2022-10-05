import React from "react";
import ParallaxText from "../../utils/ParallaxText";

function Explores() {
  return (
    <>
      <div>
        <div className="hidden sm:block space-y-2 py-12">
          <ParallaxText baseVelocity={2}>SERVICES EXPLORE OTHER</ParallaxText>
          <ParallaxText baseVelocity={-2}>
            <img
              className="h-[50px]"
              src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8771302801f_what-the-people.png"
              alt=""
            />
          </ParallaxText>
        </div>
      </div>
    </>
  );
}

export default Explores;
