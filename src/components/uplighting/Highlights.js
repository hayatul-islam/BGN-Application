import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
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
          className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[130px] h-[460px] sm:h-[530px] md:h-[600px] xl:h-[530px] flex justify-center items-center font-bold text-center rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[80px] xl:rounded-[100px] leading-none"
          style={{
            background:
              "linear-gradient(#ff4015a1 100%, rgba(0, 0, 0, 0.5) 100%),url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
            backgroundSize: "cover",
          }}
        >
          <div>
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
            >
              UPLIGHTING
            </motion.h1>
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
              className="pl-[30px] sm:pl-[70px] md:pl-[100px] lg:pl-[130px] xl:pl-[150px]"
            >
              UPLIGHTING
            </motion.h1>
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
            >
              UPLIGHTING
            </motion.h1>
            <motion.h1
              initial={lineHeightDown?.initial}
              animate={lineHeightDown?.animate}
              transition={lineHeightDown?.transition}
              className="pl-[30px] sm:pl-[70px] md:pl-[100px] lg:pl-[130px] xl:pl-[150px]"
            >
              UPLIGHTING
            </motion.h1>
          </div>
        </motion.div>
        <div className="py-4 sm:flex items-center sm:justify-between">
          <h4 className="text-[30px] text-center lg:pl-20 ">
            TRY OUT SOME COLOR
          </h4>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: "tween",
            }}
            className="space-x-3 flex justify-center sm:justify-between"
          >
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#ffae00]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#0f1]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#0cf]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#2318ff]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#9500ff]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[#ff00c3]`}
            ></button>
            <button
              className={`w-[30px] h-[30px] rounded-full bg-[red]`}
            ></button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Highlights;
