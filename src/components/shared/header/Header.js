import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { ScrollRotate } from "react-scroll-rotate";
import logoBg from "../../../assets/img/logBg.png";
import logo from "../../../assets/img/logo.png";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="border-b fixed w-full z-50 backdrop-blur-md ">
        <div className="flex justify-between items-center px-[70px] py-4 ">
          <div className="">
            <div className="w-[90px] h-[90px] relative">
              <ScrollRotate animationDuration={0.3}>
                <img src={logoBg} alt="" />
              </ScrollRotate>
              <img
                className="w-[70px] h-[70px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] "
                src={logo}
                alt=""
              />
            </div>
          </div>

          {!menu && (
            <div className="cursor-pointer">
              <RiMenu4Fill
                onClick={() => setMenu(!menu)}
                size="40"
                color="white"
              />
            </div>
          )}
        </div>
      </div>
      {menu && (
        <div className="fixed grid items-between pl-[90px] z-50 w-screen h-screen backdrop-blur">
          <div className="flex justify-end pr-[86px] py-[40px] cursor-pointer">
            <MdClose onClick={() => setMenu(!menu)} size="40" color="white" />
          </div>
          <div className="text-[116px]  font-medium uppercase ">
            <nav className="space-y-3">
              <NavLink className="block leading-none" to="/">
                Home
              </NavLink>
              <NavLink className="block leading-none" to="/">
                About
              </NavLink>
              <NavLink className="block leading-none" to="/">
                UPLIGHTING
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
