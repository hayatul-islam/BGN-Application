import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function Event({ event }) {
  const { img, title, body } = event || {};
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <div ref={ref} className="space-y-2 py-1">
        <div className="flex  items-center space-x-4">
          <div className="ring ring-white w-[76px] h-[76px] rounded-full flex justify-center items-center">
            <motion.img
              animate={{
                rotate: isInView ? "-360deg" : "0",
              }}
              transition={{
                duration: 3,
                type: "spring",
              }}
              className="p-3"
              src={img}
              alt=""
            />
          </div>
          <h2 className="text-[46px] font-medium ">{title}</h2>
        </div>
        <p className="text-[24px]">{body}</p>
      </div>
    </>
  );
}

export default Event;
