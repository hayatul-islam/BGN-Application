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
      <div className="px-2 md:px-6">
        <div className="bg-[#131313ad] rounded-[20px] xl:rounded-[60px] mb-12 mt-[80px] sm:mt-[100px] xl:mt-[200px]">
          <div className="bg-[#333] py-6 xl:py-12 rounded-[20px] xl:rounded-[60px] px-3 ">
            <div className="md:max-w-[600px] lg:max-w-[700px] xl:max-w-[1050px] mx-auto text-[30px] sm:text-[47px] md:text-[36px] lg:text-[47px] xl:text-[70px]">
              <h2 className="leading-none font-medium ">BETTER EVENTS NEED</h2>
              <div className="md:flex md:space-x-6">
                <h2 className="text-[#ffb937] font-medium leading-none ">
                  THE BEST DJS
                </h2>
                <p className="md:w-[320px] xl:w-[535px] text-[14px] sm:text-[18px] md:text-[14px] xl:text-[24px] pt-1 ">
                  We understand the importance of great music for your party. If
                  you're looking for a DJ who has the experience to rock your
                  event all night long, shoot us a message!
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 px-4 lg:px-8 xl:px-10 pt-12 md:pt-20 pb-6 md:pb-12">
            {datas?.map((data) => (
              <Event event={data} key={data?.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
