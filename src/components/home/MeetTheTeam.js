import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { buttonUp, fadeIn, fadeUp } from "../../utils/varients";

function MeetTheTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  const handleTeam = () => {
    navigate("/team");
    window.scrollTo(0, 0);
  };
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
        <div ref={ref} className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-[30px] sm:text-[47px] md:text-[36px] lg:text-[47px] xl:text-[70px] font-medium leading-none uppercase">
              <motion.span
                initial={fadeIn?.initial}
                animate={isInView && fadeIn?.animate}
                transition={{
                  delay: 0.1,
                  duration: 2,
                  type: "spring",
                }}
                className="block"
              >
                Subway tile
              </motion.span>
              <motion.span
                initial={fadeIn?.initial}
                animate={isInView && fadeIn?.animate}
                transition={{
                  delay: 0.2,
                  duration: 2,
                  type: "spring",
                }}
                className="block"
              >
                snackwave ugh,
              </motion.span>

              <motion.span
                initial={fadeIn?.initial}
                animate={isInView && fadeIn?.animate}
                transition={{
                  delay: 0.3,
                  duration: 2,
                  type: "spring",
                }}
                className="block text-[#ffae00] "
              >
                FAVORITE DJS
              </motion.span>
            </h1>
            <motion.h4
              initial={fadeUp?.initial}
              animate={isInView && fadeUp?.animate}
              transition={{
                delay: 0.8,
                duration: 2,
                type: "spring",
              }}
              className="text-[14px] lg:text-[18px] xl:text-[28px]  italic "
            >
              SERVING DC, MARYLAND, AND VIRGINIA
            </motion.h4>
            <motion.p
              initial={fadeUp?.initial}
              animate={isInView && fadeUp?.animate}
              transition={{
                delay: 1,
                duration: 2,
                type: "spring",
              }}
              className="text-[14px] xl:text-[24px] max-w-[660px] "
            >
              Franzen knausgaard before they sold out fam neutra pop-up subway
              tile health goth wolf glossier authentic edison bulb man braid
              prism sriracha cray.
            </motion.p>
          </div>
          <motion.div
            initial={buttonUp?.initial}
            animate={buttonUp?.animate}
            transition={buttonUp?.transition}
          >
            <button
              onClick={handleTeam}
              className="uppercase border border-[#ffb937] hover:bg-[#ffb937] text-[24px] lg:text-[26px] py-2 xl:py-4 px-5 lg:px-12 w-full sm:w-auto rounded-lg"
            >
              Meet The Team
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default MeetTheTeam;
