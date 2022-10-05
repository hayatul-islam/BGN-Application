import React from "react";
import Possibilitie from "./Possibilitie";
// fake data
const datas = [
  {
    id: 1,
    title: "Butcher cardigan",
    body: "Seitan you probably haven't heard of them tilde kombucha XOXO, JOMO tumblr cray vexillologist keytar meditation banjo butcher cardigan. ",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61be24dfc455c20ed62c5167_Amber%20Lights%4010x.png",
  },
  {
    id: 2,
    title: "Banh mi",
    body: "Adaptogen helvetica man bun, everyday carry la croix chartreuse before they sold out mustache mlkshk fashion axe glossier microdosing. ",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61be24c2927eda011cdc4e35_Tiffany%20Lights%4010x.png",
  },
  {
    id: 3,
    title: "Retro blue ",
    body: "Retro blue bottle stumptown, kitsch food truck poke vegan 90's. Banh mi small batch green juice man braid, chillwave biodiesel leggings synth williamsburg trust fund.",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61be2503e035e0a3fe1769d9_Red%20Lights%4010x-p-500.png",
  },
  {
    id: 4,
    title: "Waistcoat air",
    body: "Drinking vinegar waistcoat air plant Brooklyn jean shorts, put a bird on it locavore humblebrag live-edge adaptogen four loko portland heirloom narwhal celiac",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61be24f8f10b08edc23a7c01_purple%20lights%4010x.png",
  },
];

function Possibilities() {
  return (
    <>
      <div className="px-2 md:px-6">
        <div className="bg-[#131313ad] rounded-[20px] xl:rounded-[60px] mb-12">
          <div className="bg-[#333] py-6 xl:py-16 rounded-[20px] xl:rounded-[60px] px-3 ">
            <div className=" text-center text-[30px] sm:text-[47px] md:text-[36px] lg:text-[47px] xl:text-[70px]">
              <h2 className="leading-none font-medium ">WIRELESS UPLIGHTNG</h2>
              <h2 className="text-[#ffb937] font-medium leading-none ">
                UNLIMITED POSSIBILITIES
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 px-4 lg:px-8 xl:px-10 pt-12 md:pt-20 pb-6 md:pb-12">
            {datas?.map((data) => (
              <Possibilitie possibilitie={data} key={data?.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Possibilities;
