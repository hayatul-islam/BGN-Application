import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { fadeIn } from "../../utils/varients";

function TakeEvent({ data }) {
  const { img, title, body, view, status } = data || {};
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div ref={ref}>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-3">
            <div>
              <motion.p
                initial={fadeIn?.initial}
                animate={isInView && fadeIn?.animate}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  type: "tween",
                }}
                className="text-[12px] sm:text-[18px] md:text-[12px] lg:text-[18px] xl:text-[20px] text-[#ffae00] uppercase leading-none "
              >
                {status}
              </motion.p>
              <motion.h1
                initial={fadeIn?.initial}
                animate={isInView && fadeIn?.animate}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "tween",
                }}
                className="text-[30px] md:text-[30px] sm:text-[47px] lg:text-[47px] xl:text-[65px] font-medium uppercase "
              >
                {title}
              </motion.h1>
            </div>
            <p className="text-[14px] lg:text-[18px] xl:text-[24px]">{body}</p>
            <button className="flex items-center space-x-4 lg:space-x-6 text-[18px] md:text-[14px] lg:text-[24px] py-3 ">
              <span className="hover:text-[#ffae00]">{view}</span>
              <img
                className="w-[14px] h-[14px] md:w-[10px] md:h-[10px] lg:w-[24px] lg:h-[24px]"
                src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61bbc768e81417407138b619_arrow2.svg"
                alt=""
              />
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 400 }}
            animate={
              isInView && {
                opacity: [0, 0.1, 0.1, 0.3, 0.3, 0.5, 1],
                y: 0,
              }
            }
            transition={{
              delay: 0.8,
              duration: 1,
              type: "spring",
            }}
          >
            <img
              className="w-full h-full rounded-[40px] grayscale"
              src={img}
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -5000 }}
          animate={isInView && { x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "tween",
          }}
          className="py-6 md:py-8 lg:py-12"
        >
          <hr />
        </motion.div>
      </div>
    </>
  );
}

export default TakeEvent;
