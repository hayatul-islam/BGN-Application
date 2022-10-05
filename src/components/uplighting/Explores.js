import React from "react";
import ParallaxText from "../../utils/ParallaxText";
import Explore from "./Explore";
// fake data
const datas = [
  {
    id: 1,
    title: "Uplighting",
    body: "Glow up your venue with our wireless uplighting",
    img: "https://images.unsplash.com/photo-1549737580-90a88172cb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuaWdodCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "",
  },
  {
    id: 2,
    title: "Uplighting",
    body: "Glow up your venue with our wireless uplighting",
    img: "https://images.unsplash.com/photo-1549737580-90a88172cb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuaWdodCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "",
  },
  {
    id: 3,
    title: "Uplighting",
    body: "Glow up your venue with our wireless uplighting",
    img: "https://images.unsplash.com/photo-1549737580-90a88172cb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxuaWdodCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "",
  },
];

function Explores() {
  return (
    <>
      <div className="px-6 py-[100px] lg:pb-[200px]">
        <div className=" space-y-2 pb-12 overflow-hidden">
          <ParallaxText baseVelocity={2}>
            <div className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[90px] xl:text-[100px]">
              <h1 className="flex space-x-6 flex-nowrap leading-none">
                <span className="text-[#ffae00]">EXPLORE </span>
                <span>OTHER</span>
                <span>SERVICES</span>
                <span className="text-[#ffae00]">EXPLORE </span>
              </h1>
            </div>
          </ParallaxText>
          <ParallaxText baseVelocity={-2}>
            <div className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[90px] xl:text-[100px]">
              <h1 className="flex space-x-6 flex-nowrap leading-none">
                <span className="text-[#ffae00]">EXPLORE </span>
                <span>OTHER</span>
                <span>SERVICES</span>
                <span className="text-[#ffae00]">EXPLORE </span>
              </h1>
            </div>
          </ParallaxText>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {datas?.slice(0, 2)?.map((data) => (
            <Explore key={data?.id} explore={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Explores;
