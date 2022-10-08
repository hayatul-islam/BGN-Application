import { motion } from "framer-motion";
import React, { useState } from "react";
import { lineHeightDown } from "../../utils/varients";

function Highlights() {
  const [color, setColor] = useState("ff4015a1");
  const [change, setchange] = useState(false);
  const handleColor = (color) => {
    setchange(true);
    setTimeout(() => {
      setColor(color);
      setchange(false);
    }, 100);
  };
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
          className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[130px] h-[460px] sm:h-[530px] md:h-[600px] xl:h-[530px] flex justify-center items-center font-bold text-center rounded-[20px] sm:rounded-[30px] md:rounded-[50px] lg:rounded-[80px] xl:rounded-[100px] leading-none relative overflow-hidden"
          style={{
            background: `url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`,
            backgroundSize: "cover",
          }}
        >
          <motion.div
            initial={{
              width: "10px",
              opacity: 0,
            }}
            animate={{
              width: change ? "1%" : ["1%", "100%"],
              opacity: 1,
            }}
            transition={{
              duration: 1.3,
              type: "spring",
            }}
            className={`absolute top-0 right-0 w-[10px] z-30 h-full`}
            style={{
              background: `linear-gradient(#${color} 100%, rgba(0, 0, 0, 0.5) 100%)`,
            }}
          ></motion.div>
          <div className="z-50">
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
              onClick={() => handleColor("ff4015a1")}
              className={`w-[30px] h-[30px] rounded-full bg-[#ffae00]`}
            ></button>
            <button
              onClick={() => handleColor("00ff1173")}
              className={`w-[30px] h-[30px] rounded-full bg-[#0f1]`}
            ></button>
            <button
              onClick={() => handleColor("00ccfe7a")}
              className={`w-[30px] h-[30px] rounded-full bg-[#0cf]`}
            ></button>
            <button
              onClick={() => handleColor("2318ff61")}
              className={`w-[30px] h-[30px] rounded-full bg-[#2318ff]`}
            ></button>
            <button
              onClick={() => handleColor("9500ff66")}
              className={`w-[30px] h-[30px] rounded-full bg-[#9500ff]`}
            ></button>
            <button
              onClick={() => handleColor("ff00c366")}
              className={`w-[30px] h-[30px] rounded-full bg-[#ff00c3]`}
            ></button>
            <button
              onClick={() => handleColor("ff000070")}
              className={`w-[30px] h-[30px] rounded-full bg-[red]`}
            ></button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Highlights;
