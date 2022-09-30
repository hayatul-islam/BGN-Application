import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useRef } from "react";
import Testimonial from "./Testimonial";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-10, 10, v)}%`);
  console.log(wrap);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div>
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

// fake data
const datas = [
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "I was planning my wedding from out of state so I had limited time to meet with vendors. For the months leading up to my wedding, I communicated with Bryan only on email yet I was completely confident in his abilities, based on this thorough communication. We spoke on the phone a few days before the wedding and confirmed the timeline, the playlist, and name pronunciation. ",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
  {
    body: "“I've been to over 30 weddings, and I've never seen a dance floor explode with more energy and excitement than the dance floor at our reception. After 3 non-stop hours of dancing, lots of our guests commented that it was one of the best receptions they've ever been at, and one major reason was the music and the dancing.’’",
    img: "https://assets.website-files.com/5e23629e05541e5df1703ec0/61ae6364f72863686cef5ddf_Bryan%20George%20Music18.jpg",
    name: "Brad + Kat",
  },
];

function Testimonials() {
  return (
    <>
      <div className=" bg-[url('https://assets.website-files.com/5e23629e05541e1ef1703eab/61d5c18d861413850a714caa_bgm-testimonials.jpg')] bg-no-repeat bg-cover">
        <div className="bg-[#202020] bg-opacity-80 py-12">
          <div className="space-y-2 py-12">
            <ParallaxText baseVelocity={2}>
              <img
                src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8771302801f_what-the-people.png"
                alt=""
              />
            </ParallaxText>
            <ParallaxText baseVelocity={-2}>
              <img
                src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8771302801f_what-the-people.png"
                alt=""
              />
            </ParallaxText>
          </div>

          <div className="px-[70px] py-16">
            <div className="grid grid-cols-3 gap-12">
              {datas?.map((data, i) => (
                <Testimonial key={i} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
