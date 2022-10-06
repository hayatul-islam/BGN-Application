import React from "react";
import Team from "./Team";
// fake data
const datas = [
  {
    id: 1,
    name: "BRYAN GEORGE",
    about:
      "Starting BGM over 15 years ago, Bryan has performed at over 800 weddings and counting. With attention to detail and an eclectic taste in music, you can count on Bryan to keep your guests dancing all night long!",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Asim kumar",
    about:
      "Portland photo booth same, swag tousled tote bag taxidermy mustache viral bicycle rights typewriter. Authentic locavore succulents knausgaard tbh, marfa praxis mlkshk sartorial raw denim vibecession fam mixtape!",
    img: "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Ahamed Jubayer",
    about:
      "Wayfarers hexagon fingerstache tousled, retro street art gochujang yr vexillologist food truck chillwave post-ironic migas unicorn chicharrones. Vinyl freegan marfa, blog master cleanse wayfarers poutine cornhole hammock!",
    img: "https://images.unsplash.com/photo-1634136906717-6421833e1b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "S M Shaown",
    about:
      "Readymade meh fingerstache retro pop-up marfa sriracha, cliche bespoke vape pork belly heirloom tonx glossier everyday carry. Vegan pop-up vinyl tonx, irony messenger bag chambray small batch pork belly swag",
    img: "https://images.unsplash.com/photo-1527888134035-745830ac26fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];

function OurTeam() {
  return (
    <>
      <div className="py-[150px] md:py-[200px] lg:py-[250px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px]">
        <div className="text-center">
          <h4 className="text-[16px] sm:text-[20px] font-medium ">OUR TEAM</h4>
          <h2 className="text-[35px] sm:text-[47px] md:text-[60px] lg:text-[90px] xl:text-[120px] font-medium leading-tight">
            MEET THE BGM DJ'S
          </h2>
        </div>
        <div className="pt-[100px] md:pt-[200px] xl:pt-[300px]">
          {datas?.map((data) => (
            <Team key={data?.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default OurTeam;
