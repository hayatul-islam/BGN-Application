import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { fadeIn, fadeInHr } from "../../utils/varients";

function Team({ data }) {
  const { name, img, about } = data || {};
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div ref={ref}>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-3 order-last md:order-first">
            <div>
              <motion.h1
                initial={fadeIn?.initial}
                animate={isInView && fadeIn?.animate}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  type: "tween",
                }}
                className="text-[30px] md:text-[30px] sm:text-[47px] lg:text-[47px] xl:text-[65px] font-medium uppercase "
              >
                {name}
              </motion.h1>
            </div>
            <p className="text-[14px] lg:text-[18px] xl:text-[24px]">{about}</p>
          </div>
          <div className="md:w-[250px] md:h-[240px] lg:w-[340px] lg:h-[350px] xl:w-[490px] xl:h-[500px] md:ml-auto">
            <img
              className="w-full h-full rounded-[40px] grayscale"
              src={img}
              alt=""
            />
          </div>
        </div>
        <motion.div
          initial={fadeInHr?.initial}
          animate={isInView && fadeInHr?.animate}
          transition={fadeInHr?.transition}
          className="py-6 md:py-8 lg:py-12"
        >
          <hr />
        </motion.div>
      </div>
    </>
  );
}

export default Team;
