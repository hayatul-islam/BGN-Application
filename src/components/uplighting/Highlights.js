import React from "react";

function Highlights() {
  return (
    <>
      <div className="py-32 px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px]">
        <div
          className="text-[130px] font-bold text-center rounded-[100px] leading-none"
          style={{
            background:
              "linear-gradient(#ff4015a1 100%, rgba(0, 0, 0, 0.5) 100%),url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
          }}
        >
          <h1>UPLIGHTING</h1>
          <h1 className="pl-[150px]">UPLIGHTING</h1>
          <h1>UPLIGHTING</h1>
          <h1 className="pl-[150px]">UPLIGHTING</h1>
        </div>
        <div className="py-4">
          <h4 className="text-[30px]">TRY OUT SOME COLOR</h4>
        </div>
      </div>
    </>
  );
}

export default Highlights;
