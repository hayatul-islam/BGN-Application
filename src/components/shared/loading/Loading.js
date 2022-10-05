import { motion } from "framer-motion";
import React from "react";

function Loading() {
  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -900 }}
        transition={{
          delay: 0.8,
          type: "spring",
          duration: 1.8,
        }}
        className="bg-black w-screen h-screen"
      >
        <div className=" w-[300px] h-[300px] fixed top[50%] right-[50%] translate-x-[50%] translate-y-[70%] ">
          <motion.img
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 5,
              type: "spring",
              loop: Infinity,
            }}
            className="w-full h-full"
            src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61d878a6f2b26311d0f7156b_Asset%2012x.png"
            alt=""
          />
        </div>
      </motion.div>
    </>
  );
}

export default Loading;
