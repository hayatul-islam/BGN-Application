import React from "react";
import Possibilitie from "../uplighting/Possibilitie";
// fake data
const datas = [
  {
    id: 1,
    title: "Vape everyday",
    body: "carry raclette pinterest small batch meh asymmetrical chambray. ",
  },
  {
    id: 2,
    title: "Poutine irony",
    body: "DSA try-hard enamel pin cliche succulents retro gentrify.  ",
  },
  {
    id: 3,
    title: "Pork belly ",
    body: "Pork belly bottle  meditation tousled microdosing, tofu swag migas.",
  },
  {
    id: 4,
    title: "Waistcoat air",
    body: "Microdosing snackwave yuccie ennui vape thundercats.",
  },
];

function LovesAPhotoBooth() {
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

export default LovesAPhotoBooth;
