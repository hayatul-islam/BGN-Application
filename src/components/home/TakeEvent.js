import React from "react";

function TakeEvent({ data }) {
  const { img, title, body, view, status } = data || {};
  return (
    <>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-3">
          <div>
            <p className="text-[12px] sm:text-[18px] md:text-[12px] lg:text-[18px] xl:text-[20px] text-[#ffae00] uppercase leading-none ">
              {status}
            </p>
            <h1 className="text-[30px] md:text-[30px] sm:text-[47px] lg:text-[47px] xl:text-[65px] font-medium uppercase ">
              {title}
            </h1>
          </div>
          <p className="text-[14px] lg:text-[18px] xl:text-[24px]">{body}</p>
          <button className="flex items-center space-x-4 lg:space-x-6 text-[18px] md:text-[14px] lg:text-[24px] py-3 ">
            <span className="hover:text-[#ffae00]">{view}</span>
            <img
              className="w-[14px] h-[14px] md:w-[10px] md:h-[10px] lg:w-[24px] lg:h-[24px]"
              src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61bbc768e81417407138b619_arrow2.svg"
              alt=""
            />
          </button>
        </div>
        <div>
          <img className="w-full rounded-[40px] grayscale" src={img} alt="" />
        </div>
      </div>
      <div className="py-6 md:py-8 lg:py-12">
        <hr />
      </div>
    </>
  );
}

export default TakeEvent;
