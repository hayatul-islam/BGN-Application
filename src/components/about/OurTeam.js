import React from "react";
import Team from "./Team";
// fake data
const datas = [
  {
    id: 1,
    name: "BRYAN GEORGE",
    about:
      "Starting BGM over 15 years ago, Bryan has performed at over 800 weddings and counting. With attention to detail and an eclectic taste in music, you can count on Bryan to keep your guests dancing all night long!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "BRYAN GEORGE",
    about:
      "Starting BGM over 15 years ago, Bryan has performed at over 800 weddings and counting. With attention to detail and an eclectic taste in music, you can count on Bryan to keep your guests dancing all night long!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "BRYAN GEORGE",
    about:
      "Starting BGM over 15 years ago, Bryan has performed at over 800 weddings and counting. With attention to detail and an eclectic taste in music, you can count on Bryan to keep your guests dancing all night long!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "BRYAN GEORGE",
    about:
      "Starting BGM over 15 years ago, Bryan has performed at over 800 weddings and counting. With attention to detail and an eclectic taste in music, you can count on Bryan to keep your guests dancing all night long!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
