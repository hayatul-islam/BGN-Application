import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { ScrollRotate } from "react-scroll-rotate";
import logoBg from "../../../assets/img/logBg.png";
import logo from "../../../assets/img/logo.png";

function Header() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleMemu = () => {
    setMenu(!menu);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="border-b fixed w-full z-50 backdrop-blur-md ">
        <div className="flex justify-between items-center px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px] py-2  ">
          <div
            onClick={handleHome}
            className="w-[44px] h-[44px] sm:w-[51px] sm:h-[51px] md:w-[65px] md:h-[65px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] relative cursor-pointer "
          >
            <ScrollRotate animationDuration={0.3}>
              <img src={logoBg} alt="" />
            </ScrollRotate>
            <img
              className="w-[34px] h-[34px] xl:w-[70px] xl:h-[70px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] "
              src={logo}
              alt=""
            />
          </div>

          {!menu && (
            <div className="cursor-pointer w-[24px] md:w-[32px] lg:w-[40px] ">
              <RiMenu4Fill
                onClick={() => setMenu(!menu)}
                size="full"
                color="white"
              />
            </div>
          )}
        </div>
      </div>
      {menu && (
        <div className="fixed grid h-screen pl-[40px] sm:pl-[60px] md:pl-[80px] lg:pl-[90px] z-50 w-screen  backdrop-blur">
          <div className="flex justify-end px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px] py-[20px] sm:py-[25px] md:py-[30px] lg:py-[40px] items-start">
            <div className="cursor-pointer w-[24px] md:w-[32px] lg:w-[40px] ">
              <MdClose
                onClick={() => setMenu(!menu)}
                size="full"
                color="white"
              />
            </div>
          </div>
          <div className="text-[32px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[116px] font-medium uppercase  items-end">
            <nav className="space-y-3">
              <NavLink
                onClick={handleMemu}
                className="block leading-none"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={handleMemu}
                className="block leading-none"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                onClick={handleMemu}
                className="block leading-none"
                to="/uplighting"
              >
                UPLIGHTING
              </NavLink>
              <NavLink
                onClick={handleMemu}
                className="block leading-none"
                to="/contract"
              >
                Contract
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
