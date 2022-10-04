import React from "react";

function Team({ data }) {
  const { name, img, about } = data || {};
  return (
    <>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-3">
          <div>
            <h1 className="text-[30px] md:text-[30px] sm:text-[47px] lg:text-[47px] xl:text-[65px] font-medium uppercase ">
              {name}
            </h1>
          </div>
          <p className="text-[14px] lg:text-[18px] xl:text-[24px]">{about}</p>
        </div>
        <div className="w-[490px] h-[500px] ml-auto">
          <img
            className="w-full h-full rounded-[40px] grayscale"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="py-6 md:py-8 lg:py-12">
        <hr />
      </div>
    </>
  );
}

export default Team;
