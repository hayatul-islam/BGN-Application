import React from "react";

function TakeEvent({ data }) {
  const { img, title, body, view, status } = data || {};
  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-3">
          <div>
            <p className="text-[20px] text-[#ffae00] uppercase leading-none ">
              {status}
            </p>
            <h1 className="text-[65px] font-medium uppercase ">{title}</h1>
          </div>
          <p className="text-[24px] ">{body}</p>
          <button className="flex items-center space-x-6 text-[24px] py-3 ">
            <span className="hover:text-[#ffae00]">{view}</span>
            <img
              className="w-[24px] h-[24px]"
              src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61bbc768e81417407138b619_arrow2.svg"
              alt=""
            />
          </button>
        </div>
        <div>
          <img className="w-full rounded-[40px] grayscale" src={img} alt="" />
        </div>
      </div>
      <div className="py-12">
        <hr />
      </div>
    </>
  );
}

export default TakeEvent;
