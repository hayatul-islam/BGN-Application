import React from "react";

function Highlights() {
  return (
    <>
      <div className="py-28 sm:py-32 px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px]">
        <div
          className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[130px] h-[460px] sm:h-[530px] md:h-[600px] flex justify-center items-center font-bold text-center rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[80px] xl:rounded-[100px] leading-none"
          style={{
            background:
              "linear-gradient(#ff4015a1 100%, rgba(0, 0, 0, 0.5) 100%),url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h1>UPLIGHTING</h1>
            <h1 className="pl-[30px] sm:pl-[70px] md:pl-[100px] lg:pl-[130px] xl:pl-[150px]">
              UPLIGHTING
            </h1>
            <h1>UPLIGHTING</h1>
            <h1 className="pl-[30px] sm:pl-[70px] md:pl-[100px] lg:pl-[130px] xl:pl-[150px]">
              UPLIGHTING
            </h1>
          </div>
        </div>
        <div className="py-4 sm:flex items-center sm:justify-between">
          <h4 className="text-[30px] text-center lg:pl-20 ">
            TRY OUT SOME COLOR
          </h4>
          <div className="space-x-3 flex justify-center sm:justify-between">
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#ffae00]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#0f1]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#0cf]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#2318ff]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#9500ff]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#ff00c3]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[red]`}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Highlights;
