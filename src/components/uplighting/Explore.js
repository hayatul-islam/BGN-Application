import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Explore({ explore }) {
  const { title, img, body, location } = explore || {};
  return (
    <>
      <div className="grid md:flex space-y-4 md:space-x-2 justify-between">
        <div className="grid items-end order-last md:order-first">
          <div>
            <h4 className="text-[30px] sm:text-[42px] md:text-[28px] lg:text-[26px]">
              {title}
            </h4>
            <p className="text-[14px]">{body}</p>
            <button className="flex items-center text-[16px]  md:text-[18px] group">
              <span className="hidden group-hover:block">
                <BsArrowRight size="24" />
              </span>
              <span className="text-[#ffae00]">View {location}</span>
              <span className="lg:hidden ml-4">
                <BsArrowRight size="24" />
              </span>
            </button>
          </div>
        </div>
        <div className=" md:w-[460px] md:h-[360px] lg:w-[300px] lg:h-[400px] xl:w-[460px] xl:h-[660px]">
          <img
            className="w-full h-full rounded-[30px] md:rounded-[40px] xl:rounded-[60px]"
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Explore;
