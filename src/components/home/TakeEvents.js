import React from "react";
import TakeEvent from "./TakeEvent";

// fake data
const datas = [
  {
    id: 1,
    status: "UPLIGHTING",
    title: "LIGHT UP THE NIGHT",
    body: "Use our wireless uplighting to customize the look and feel of your venue by creating a one of a kind atmosphere that matches your style and vision.",
    view: "VIEW UPLIGHTING",
    img: "https://images.unsplash.com/photo-1657299143471-231353519c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    link: "",
  },
  {
    id: 2,
    status: "UPLIGHTING",
    title: "LIGHT UP THE NIGHT",
    body: "Use our wireless uplighting to customize the look and feel of your venue by creating a one of a kind atmosphere that matches your style and vision.",
    view: "VIEW UPLIGHTING",
    img: "https://images.unsplash.com/photo-1657299143471-231353519c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    link: "",
  },
  {
    id: 3,
    status: "UPLIGHTING",
    title: "LIGHT UP THE NIGHT",
    body: "Use our wireless uplighting to customize the look and feel of your venue by creating a one of a kind atmosphere that matches your style and vision.",
    view: "VIEW UPLIGHTING",
    img: "https://images.unsplash.com/photo-1657299143471-231353519c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    link: "",
  },
];

function TakeEvents() {
  return (
    <>
      <div>
        <div>
          <h2 className="text-[82px] text-end leading-tight font-medium ">
            TAKE YOUR EVENT <br /> TO THE NEXT <br /> LEVEL
          </h2>
        </div>
        <div className="py-12">
          {datas?.map((data) => (
            <TakeEvent key={data?.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TakeEvents;
