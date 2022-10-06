import { motion } from "framer-motion";
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
    window.scrollTo(0, 0);
  };
  const handleMemu = () => {
    setMenu(!menu);
    window.scrollTo(0, 0);
  };

  const varients = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    transition: {
      delay: 0.7,
      type: "spring",
      duration: 2,
    },
  };

  return (
    <>
      <div className="border-b fixed w-full z-40 backdrop-blur-md ">
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
      <motion.div
        animate={{
          x: menu ? [-1500, 0] : -1500,
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        className="fixed z-50"
      >
        {menu && (
          <motion.div
          // initial={{
          //   x: -1600,
          // }}
          // animate={{
          //   x: [-1500, 0],
          // }}
          // transition={{
          //   duration: 1,
          //   type: "spring",
          // }}
          // className="fixed z-50"
          >
            <div className="fixed grid h-screen pl-[40px] sm:pl-[60px] md:pl-[80px] lg:pl-[90px] z-50 w-screen backdrop-blur-md">
              <div className="flex justify-end px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px] py-[20px] sm:py-[25px] md:py-[30px] lg:py-[40px] items-start">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                  }}
                  className="cursor-pointer w-[24px] md:w-[32px] lg:w-[40px] "
                >
                  <MdClose
                    onClick={() => setMenu(!menu)}
                    size="full"
                    color="white"
                  />
                </motion.div>
              </div>
              <div className="text-[32px] sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[116px] font-medium uppercase  items-end">
                <nav className="leading-none space-y-3">
                  <motion.div
                    initial={varients?.initial}
                    animate={varients?.animate}
                    transition={varients?.transition}
                  >
                    <NavLink
                      onClick={handleMemu}
                      className=" hover:text-[#ffae00]"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </motion.div>
                  <motion.div
                    initial={varients?.initial}
                    animate={varients?.animate}
                    transition={varients?.transition}
                  >
                    <NavLink
                      onClick={handleMemu}
                      className=" hover:text-[#ffae00]"
                      to="/team"
                    >
                      About
                    </NavLink>
                  </motion.div>
                  <motion.div
                    initial={varients?.initial}
                    animate={varients?.animate}
                    transition={varients?.transition}
                  >
                    <NavLink
                      onClick={handleMemu}
                      className=" hover:text-[#ffae00]"
                      to="/uplighting"
                    >
                      UPLIGHTING
                    </NavLink>
                  </motion.div>
                  <motion.div
                    initial={varients?.initial}
                    animate={varients?.animate}
                    transition={varients?.transition}
                  >
                    <NavLink
                      onClick={handleMemu}
                      className=" hover:text-[#ffae00]"
                      to="/contract"
                    >
                      Contract
                    </NavLink>
                  </motion.div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

export default Header;
