import React from "react";
import Event from "./Event";
// fake data
const datas = [
  {
    id: 1,
    title: "PACKED DANCE FLOORS",
    body: "If there's one thing we're known for, it’s getting people moving with highly skilled DJs and top quality sound systems. This is a PARTY, so let's get your dance floor rocking!",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8c16e02802b_BGM%20Washington%20DC%20DJ16.svg",
  },
  {
    id: 2,
    title: "SEAMLESS TRANSITIONS",
    body: "If there's one thing we're known for, it’s getting people moving with highly skilled DJs and top quality sound systems. This is a PARTY, so let's get your dance floor rocking!",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8c16e02802b_BGM%20Washington%20DC%20DJ16.svg",
  },
  {
    id: 3,
    title: "SEAMLESS TRANSITIONS",
    body: "If there's one thing we're known for, it’s getting people moving with highly skilled DJs and top quality sound systems. This is a PARTY, so let's get your dance floor rocking!",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8c16e02802b_BGM%20Washington%20DC%20DJ16.svg",
  },
  {
    id: 4,
    title: "SEAMLESS TRANSITIONS",
    body: "If there's one thing we're known for, it’s getting people moving with highly skilled DJs and top quality sound systems. This is a PARTY, so let's get your dance floor rocking!",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8c16e02802b_BGM%20Washington%20DC%20DJ16.svg",
  },
];

function Events() {
  return (
    <>
      <div className="bg-[#131313ad] rounded-[60px] mb-12 mt-[200px]">
        <div className="bg-[#333] py-12 rounded-[60px] ">
          <div className="max-w-5xl mx-auto ">
            <h2 className="text-[70px] leading-none font-medium ">
              BETTER EVENTS NEED
            </h2>
            <div className="flex space-x-6">
              <h2 className="text-[70px] text-[#ffb937] font-medium leading-none ">
                THE BEST DJS
              </h2>
              <p className="max-w-[535px] text-[24px] ">
                We understand the importance of great music for your party. If
                you're looking for a DJ who has the experience to rock your
                event all night long, shoot us a message!
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 px-12 pt-20 pb-12">
          {datas?.map((data) => (
            <Event event={data} key={data?.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
