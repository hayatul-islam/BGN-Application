import { motion } from "framer-motion";
import React from "react";

function Test() {
  return (
    <div className="py-[400px]">
      <div className="">
        <motion.button
          animate={{
            rotate: "360deg",
          }}
          transition={{
            duration: 2,
          }}
          className="uppercase border border-[#ffb937] hover:bg-[#ffb937] text-[26px] py-4 px-12 rounded-lg"
        >
          Check Availability
        </motion.button>
      </div>
    </div>
  );
}

export default Test;
