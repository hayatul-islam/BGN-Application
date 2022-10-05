import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Explore({ explore }) {
  const { title, img, body } = explore || {};
  return (
    <>
      <div className="flex justify-between">
        <div className="grid items-end">
          <div>
            <h4 className="text-[26px]">{title}</h4>
            <p className="text-[14px]">{body}</p>
            <button className="flex items-center space-x-2 text-[16px] group">
              <span className="hidden group-hover:block">
                <BsArrowRight size="24" />
              </span>
              <span className="text-[#ffae00]">View up light</span>
            </button>
          </div>
        </div>
        <div className="w-[460px] h-[660px] ">
          <img className="w-full h-full rounded-[60px]" src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Explore;
