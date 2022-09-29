import React from "react";
import Event from "./Event";
// fake data
const datas = [
  {
    id: 1,
    title: "Kombucha irony vape",
    body: "Blog tbh hella portland. Kombucha irony vape, fixie tumblr fit prism kinfolk craft beer poutine cold-pressed la croix schlitz shabby chic gluten-free.",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8369902801e_rockon.svg",
  },
  {
    id: 2,
    title: "SNarwhal hella retro",
    body: "Narwhal hella retro vegan, banjo messenger bag biodiesel sustainable. Squid mustache dreamcatcher bicycle rights, occupy irony street art palo santo bruh. ",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61bf76bec9edd66c6a5118ab_seamless2x.svg",
  },
  {
    id: 3,
    title: "Normcore bespoke",
    body: "Normcore bespoke prism, photo booth chillwave heirloom irony. DSA vape direct trade, sustainable lomo fit venmo lyft microdosing fixie poutine pickled.",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8c16e02802b_BGM%20Washington%20DC%20DJ16.svg",
  },
  {
    id: 4,
    title: "Literally kinfolk",
    body: "Literally kinfolk shabby chic la croix squid cloud bread. Put a bird on it tonx chicharrones, gastropub tacos shoreditch master cleanse seitan occupy offal meggings.",
    img: "https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8121802802a_BGM%20Washington%20DC%20DJ17.svg",
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
