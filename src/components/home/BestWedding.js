import { motion } from "framer-motion";
import React from "react";
import { fadeUp } from "../../utils/varients";

function BestWedding() {
  return (
    <>
      <div className="pb-12 sm:text-center space-y-8 pt-[160px] sm:pt-[180px] lg:pt-[260px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px]">
        <div>
          <motion.h4
            initial={fadeUp?.initial}
            animate={fadeUp?.animate}
            transition={fadeUp?.transition}
            className="text-[14px] md:text-[20px] pb-3 uppercase"
          >
            BEST WEDDING DJ IN DC
          </motion.h4>
          <div>
            <p className="text-[44px] md:text-[64px] lg:text-[78px] xl:text-[114px] leading-none font-medium uppercase">
              <motion.span
                initial={fadeUp?.initial}
                animate={fadeUp?.animate}
                transition={fadeUp?.transition}
                className="uppercase block leading-none"
              >
                A GREAT WEDDING
              </motion.span>
              <motion.span
                initial={fadeUp?.initial}
                animate={fadeUp?.animate}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "spring",
                }}
                className="uppercase block leading-none"
              >
                STARTS WITH A PACKED
              </motion.span>
            </p>
            <p className="text-[44px] md:text-[64px] lg:text-[78px] xl:text-[114px] lg:flex justify-end leading-none font-medium pr-12">
              <motion.span
                initial={fadeUp?.initial}
                animate={fadeUp?.animate}
                transition={{
                  delay: 0.3,
                  duration: 1,
                  type: "spring",
                }}
                className="uppercase block"
              >
                DANCE FLOOR
              </motion.span>
              <motion.span
                initial={fadeUp?.initial}
                animate={fadeUp?.animate}
                transition={{
                  delay: 0.8,
                  duration: 1,
                  type: "spring",
                }}
                className="hidden text-[14px] lg:block md:w-[190px] text-[#ffae00] md:leading-5 pt-8"
              >
                We keep the party going on the best night of your life. Create
                moments, memories & dance moves your guests will talk about for
                years!
              </motion.span>
            </p>
            <motion.p
              initial={fadeUp?.initial}
              animate={fadeUp?.animate}
              transition={{
                delay: 0.8,
                duration: 1,
                type: "spring",
              }}
              className="sm:hidden text-[14px] text-[#ffae00] pt-2"
            >
              We keep the party going on the best night of your life. Create
              moments, memories & dance moves your guests will talk about for
              years!
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0.3, 0.8, 1] }}
          transition={{
            delay: 0.8,
            type: "spring",
            duration: 2,
          }}
        >
          <button className="uppercase border border-[#ffb937] hover:bg-[#ffb937] text-[24px] sm:text-[14px] md:text-[20px] lg:text-[26px] py-2 md:py-3 px-3 md:px-6 lg:px-12 rounded-lg w-full sm:w-auto">
            Check Availability
          </button>
        </motion.div>
      </div>
    </>
  );
}

export default BestWedding;
