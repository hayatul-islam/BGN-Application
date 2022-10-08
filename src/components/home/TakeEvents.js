import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { fadeIn } from "../../utils/varients";
import TakeEvent from "./TakeEvent";

// fake data
const datas = [
  {
    id: 1,
    status: "UPLIGHTING",
    title: "LIGHT UP THE NIGHT",
    body: "Use our wireless uplighting to customize the look and feel of your venue by creating a one of a kind atmosphere that matches your style and vision.",
    view: "VIEW UPLIGHTING",
    img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA1fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "uplighting",
  },
  {
    id: 2,
    status: "PHOTO BOOTH",
    title: "Selfies roof party",
    body: "Raclette microdosing coloring book church-key tonx selfies big mood umami pabst mixtape keytar yuccie poke. Paleo cray fixie viral, knausgaard wayfarers whatever. Selfies roof party yes plz, coloring book stumptown thundercats lumbersexual austin.",
    view: "VIEW PHOTO BOOTH",
    img: "https://images.unsplash.com/photo-1557425631-f132f06f4aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "photo-booth",
  },
  {
    id: 3,
    status: "CEREMONY STRINGS",
    title: "Celiac vape banjo",
    body: "Poke woke you probably haven't heard of them, celiac vape banjo marfa etsy gatekeep normcore viral blue bottle ennui fam praxis. Fashion axe keffiyeh thundercats man braid austin hammock lomo. Chartreuse hot chicken bushwick bicycle rights.",
    view: "VIEW STRINGS",
    img: "https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjgwfHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "",
  },
];

function TakeEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        ref={ref}
        className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[70px] py-[80px] sm:py-[120px] xl:py-[250px]"
      >
        <div>
          <h2 className="hidden md:block md:text-[44px] lg:text-[62px] xl:text-[82px] text-end leading-tight font-medium ">
            <motion.span
              initial={{ opacity: 0, x: 700 }}
              animate={isInView && fadeIn?.animate}
              transition={{
                delay: 0.1,
                duration: 1,
                type: "tween",
              }}
              className="block"
            >
              TAKE YOUR EVENT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 700 }}
              animate={isInView && fadeIn?.animate}
              transition={{
                delay: 0.2,
                duration: 1,
                type: "tween",
              }}
              className="block"
            >
              TO THE NEXT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 700 }}
              animate={isInView && fadeIn?.animate}
              transition={{
                delay: 0.3,
                duration: 1,
                type: "tween",
              }}
              className="block"
            >
              LEVEL
            </motion.span>
          </h2>
          <h2 className="md:hidden text-[36px] sm:text-[58px] leading-tight font-medium ">
            TAKE YOUR EVENT TO THE NEXT LEVEL
          </h2>
        </div>
        <div className="py-12">
          {datas?.map((data) => (
            <TakeEvent key={data?.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TakeEvents;
