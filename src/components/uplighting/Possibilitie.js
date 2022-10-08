import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function Possibilitie({ possibilitie }) {
  const { img, title, body } = possibilitie || {};
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <div ref={ref} className="md:space-y-2 md:py-1">
        <div className="flex items-center space-x-4">
          {img && (
            <div className="ring-1 ring-white w-[32px] h-[32px] md:w-[32px] md:h-[32px] sm:w-[50px] sm:h-[50px] lg:w-[50px] lg:h-[50px] xl:w-[76px] xl:h-[76px] rounded-full flex justify-center items-center">
              <motion.img
                animate={{
                  rotate: isInView ? "-360deg" : "0",
                }}
                transition={{
                  duration: 3,
                  type: "spring",
                }}
                className="p-1 xl:p-3"
                src={img}
                alt=""
              />
            </div>
          )}

          <h2 className="text-[24px] sm:text-[30px] md:text-[24px] lg:text-[30px] xl:text-[46px] font-medium uppercase ">
            {title}
          </h2>
        </div>
        <p className="text-[16px] xl:text-[24px]">{body}</p>
      </div>
    </>
  );
}

export default Possibilitie;
