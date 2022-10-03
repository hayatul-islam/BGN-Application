import React from "react";

function Testimonial({ data }) {
  const { img, body, name } = data || {};
  return (
    <>
      <div className="px-3 xl:px-8 py-12 space-y-3 border rounded-lg mt-3 shadow-xl opacity-80 ">
        <div className="space-y-3">
          <img className="w-[60px] h-[60px] rounded-full " src={img} alt="" />
          <p className="text-[16px] ">{body}</p>
        </div>
        <div className="text-end  ">
          <h4 className="text-[24px] text-[#c8c8c8] ">{name}</h4>
          <h4 className="text-[18px]">WASHINGTON DC</h4>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
