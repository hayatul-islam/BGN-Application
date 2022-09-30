import React from "react";

function ContractUs() {
  return (
    <>
      <div className="mx-[70px] mb-12 grid grid-cols-2 bg-[#000] rounded-[60px] ">
        <div className="p-12">
          <div>
            <h1 className="text-[46px] font-medium ">Contact Us</h1>
          </div>
          <form>
            <div className="mb-6">
              <label for="email" className="block mb-1 text-[16px] font-bold ">
                First Name
              </label>
              <input
                type="text"
                className="bg-[#2c2c2ccc] w-full p-2.5 rounded-xl focus:outline-none "
                required
              />
            </div>
            <div className="mb-6">
              <label for="email" className="block mb-1 text-[16px] font-bold ">
                Last Name
              </label>
              <input
                type="text"
                className="bg-[#2c2c2ccc] w-full p-2.5 rounded-xl focus:outline-none "
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 text-[16px] font-bold ">
                Email Address
              </label>

              <input
                type="email"
                className="bg-[#2c2c2ccc] w-full p-2.5 rounded-xl focus:outline-none "
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 text-[16px] font-bold ">Date</label>
              <input
                type="date"
                className="bg-[#2c2c2ccc] w-full p-2.5 rounded-xl focus:outline-none "
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-[16px] font-bold ">
                Interested In
              </label>
              <div className="grid grid-cols-2">
                <div className="flex items-center mb-6">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4  text-yellow-400 "
                    />
                  </div>
                  <label for="remember" className="ml-2 text-sm font-medium ">
                    DJ Services
                  </label>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4  text-yellow-400 "
                    />
                  </div>
                  <label for="remember" className="ml-2 text-sm font-medium ">
                    Uplighting
                  </label>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4  text-yellow-400 "
                    />
                  </div>
                  <label for="remember" className="ml-2 text-sm font-medium ">
                    Photobooth
                  </label>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4  text-yellow-400 "
                    />
                  </div>
                  <label for="remember" className="ml-2 text-sm font-medium ">
                    Ceremony Musicians
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-1 text-[16px] font-bold ">
                Message
              </label>

              <textarea
                type="text"
                rows="4"
                className="bg-[#2c2c2ccc] w-full p-2.5 rounded-xl focus:outline-none "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full border py-5 border-[#ffb937] text-[24px] hover:text-[#000] uppercase hover:bg-[#ffb937] rounded "
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" xl:max-h-[950px]">
          <img
            className="w-full h-full rounded-tr-[60px] grayscale"
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGNvbnRyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default ContractUs;
