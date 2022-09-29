import React from "react";

function Event({ event }) {
  const { img, title, body } = event || {};
  return (
    <>
      <div className="space-y-2 py-1">
        <div className="flex  items-center space-x-4">
          <div className="ring ring-white w-[76px] h-[76px] rounded-full flex justify-center items-center">
            <img src={img} alt="" />
          </div>
          <h2 className="text-[46px] font-medium ">{title}</h2>
        </div>
        <p className="text-[24px]">{body}</p>
      </div>
    </>
  );
}

export default Event;
