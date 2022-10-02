import React from "react";

function BestWedding() {
  return (
    <>
      <div className="pb-12 text-center space-y-8">
        <div>
          <h4 className="text-[20px] pb-3 uppercase">BEST WEDDING DJ IN DC</h4>
          <div>
            <p className="text-[114px] leading-none font-medium uppercase">
              A GREAT WEDDING STARTS WITH A PACKED
            </p>
            <p className="text-[114px] flex justify-end leading-none font-medium pr-12">
              <span className="uppercase">DANCE FLOOR</span>
              <span className="text-[14px] w-[190px] text-[#ffae00] leading-5 pt-8">
                We keep the party going on the best night of your life. Create
                moments, memories & dance moves your guests will talk about for
                years!
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <button className="uppercase border border-[#ffb937] hover:bg-[#ffb937] text-[26px] py-4 px-12 rounded-lg">
            Check Availability
          </button>
        </div>
      </div>
    </>
  );
}

export default BestWedding;
