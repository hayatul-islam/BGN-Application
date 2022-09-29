import React from "react";

function MeetTheTeam() {
  return (
    <>
      <div className="grid grid-cols-2 gap-12 pt-[250px] pb-12">
        <div>
          <div className="relative">
            <img
              className="w-[90%] h-full rounded-r-[40px]"
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              className="w-[250px] h-[200px] absolute top-0 rounded-r-[40px] "
              src="https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              className="w-[250px] h-[200px] absolute bottom-0 right-0 rounded-[40px] "
              src="https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-[70px] font-medium leading-none">
              GET YOUR PARTY STARTED WITH DC’S{" "}
              <span className="block text-[#ffae00] ">FAVORITE DJS</span>
            </h1>
            <h4 className="text-[28px] italic ">
              SERVING DC, MARYLAND, AND VIRGINIA
            </h4>
            <p className="text-[24px] max-w-[660px] ">
              You deserve to have the most fun you've had in your entire life on
              your wedding day. Picking the best DJ service plays a huge role in
              that.
            </p>
          </div>
          <div>
            <button className="uppercase border border-[#ffb937] text-[26px] py-4 px-12 rounded-lg">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetTheTeam;
