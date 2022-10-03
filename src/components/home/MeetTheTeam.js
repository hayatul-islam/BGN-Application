import React from "react";

function MeetTheTeam() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 pt-[80px] lg:pt-[250px] pb-12 px-[20px] sm:px-[30px]md:px-[40px] lg:px-[50px] xl:px-0">
        <div>
          <div className="relative z-0">
            <img
              className="w-[90%] h-full rounded-[20px] md:rounded-[30px] xl:rounded-l-[1px] xl:rounded-r-[40px] grayscale"
              src="https://images.unsplash.com/photo-1546006508-5bd647796a4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              className="hidden sm:block w-[126px] h-[100px] lg:w-[200px] lg:h-[160px] xl:w-[250px] xl:h-[200px] absolute top-0 rounded-[20px] lg:rounded-[30px] xl:rounded-l-[1px] xl:rounded-r-[40px] grayscale"
              src="https://images.unsplash.com/photo-1543191219-92c8ed3d8cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              className="hidden sm:block w-[126px] h-[100px] lg:w-[200px] lg:h-[160px] xl:w-[250px] xl:h-[200px] absolute bottom-0 right-0 rounded-[20px] lg:rounded-[30px] xl:rounded-[40px] grayscale"
              src="https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="hidden md:block h-[120px] border-l-2 border-[#ffae00] ml-[70px] mt-[-30px] z-50 opacity-[99%] "></div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-[30px] sm:text-[47px] md:text-[36px] lg:text-[47px] xl:text-[70px] font-medium leading-none uppercase">
              Subway tile <br /> snackwave ugh,
              <span className="block text-[#ffae00] ">FAVORITE DJS</span>
            </h1>
            <h4 className="text-[14px] lg:text-[18px] xl:text-[28px]  italic ">
              SERVING DC, MARYLAND, AND VIRGINIA
            </h4>
            <p className="text-[14px] xl:text-[24px] max-w-[660px] ">
              Franzen knausgaard before they sold out fam neutra pop-up subway
              tile health goth wolf glossier authentic edison bulb man braid
              prism sriracha cray.
            </p>
          </div>
          <div>
            <button className="uppercase border border-[#ffb937] text-[24px] lg:text-[26px] py-2 xl:py-4 px-5 lg:px-12 w-full sm:w-auto rounded-lg">
              Meet The Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTheTeam;
