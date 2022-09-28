import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logoBg from "../../../assets/img/logBg.png";
import logo from "../../../assets/img/logo.png";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="border-b ">
        <div className="flex justify-between items-center px-[70px] py-4 ">
          <div className="">
            <div className="w-[90px] h-[90px] relative">
              <img src={logoBg} alt="" />
              <img
                className="w-[70px] h-[70px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] "
                src={logo}
                alt=""
              />
            </div>
          </div>
          <div>
            <RiMenu4Fill
              onClick={() => setMenu(!menu)}
              size="40"
              color="white"
            />
          </div>
        </div>
      </div>
      {menu && (
        <div className="text-[106px] absolute w-screen h-screen">
          <div>
            <nav>
              <NavLink className="block leading-none" to="/">
                Home
              </NavLink>
              <NavLink className="block leading-none" to="/">
                Home
              </NavLink>
              <NavLink className="block leading-none" to="/">
                Home
              </NavLink>
              <NavLink className="block leading-none" to="/">
                Home
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
