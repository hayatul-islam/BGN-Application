import { motion } from "framer-motion";
import React from "react";
import { lineHeightDown } from "../../utils/varients";

function Highlights() {
  return (
    <>
      <div className="py-28 sm:py-32 px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px]">
        <motion.div
          initial={{
            y: 900,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: [0, 0.01, 0.1, 0.1, 0.2, 1],
          }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[130px] h-[460px] sm:h-[530px] md:h-[600px]  flex justify-center items-center font-bold text-center rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[80px] xl:rounded-[100px] leading-none relative overflow-hidden"
          style={{
            background: `url(https://images.unsplash.com/photo-1521070207300-13a93726542b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJlc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
            backgroundSize: "cover",
          }}
        >
          <div className="z-50 text-[#ffae00]">
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
            >
              PHOTOBOOTH
            </motion.h1>
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
              className="pl-[30px] sm:pl-[70px] md:pl-[100px] lg:pl-[130px] xl:pl-[150px]"
            >
              PHOTOBOOTH
            </motion.h1>
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
            >
              PHOTOBOOTH
            </motion.h1>
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
              className="pl-[30px] sm:pl-[70px] md:pl-[100px] lg:pl-[130px] xl:pl-[150px]"
            >
              PHOTOBOOTH
            </motion.h1>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Highlights;
