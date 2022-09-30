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
    body: "Lumbersexual praxis heirloom sriracha affogato keytar. Edison bulb +1 brunch everyday carry, hashtag gatekeep pop-up PBR&B aesthetic small batch sartorial lomo etsy. DSA fanny pack VHS hell of selfies craft beer, deep v YOLO lo-fi actually shabby chic vape. Mlkshk VHS gochujang paleo fam yes plz chia. Marfa helvetica irony, celiac poutine hella cardigan praxis roof party. 90's poutine semiotics cardigan kitsch glossier hoodie subway tile loko tumeric .",
    img: "https://images.unsplash.com/photo-1570591798622-e104e02ba28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxwYXJ0eSUyMG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Jocelyn",
  },
  {
    body: "Edison bulb glossier live-edge prism cornhole, crucifix brunch farm-to-table post-ironic four loko franzen viral cred man braid. Next level af stumptown, retro iceland live-edge jianbing actually single-origin coffee glossier locavore cliche microdosing. Brunch dreamcatcher poke raw denim normcore copper mug ethical hella chartreuse farm-to-table. Dreamcatcher letterpress ethical godard tonx. Cray copper mug DIY, keffiyeh synth taxidermy vexillologist craft beer. ",
    img: "https://images.unsplash.com/photo-1474293507615-951863a0f942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFydHklMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Nancy N.",
  },
  {
    body: "Everyday carry before they sold out pitchfork chartreuse poke austin ennui succulents sriracha banh mi swag DIY vape. Microdosing pour-over bespoke, semiotics hammock yr bitters quinoa roof party. Polaroid forage chambray try-hard tote bag whatever chia live-edge man braid portland. Ethical chartreuse mukbang blue bottle hexagon snackwave copper mug glossier pug. Hot chicken shabby chic before they sold out, you probably haven't heard of them franzen man bun mixtape four. ",
    img: "https://images.unsplash.com/photo-1592598187272-d1ee6d661ce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcnR5JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "S M Shaown",
  },
  {
    body: "Food truck health goth keffiyeh DSA poke lyft listicle gochujang enamel pin roof party shabby chic hexagon. Raclette polaroid banjo direct trade forage post-ironic edison bulb. Fanny pack kickstarter single-origin coffee before they sold out man bun. Viral retro raclette letterpress. Plaid biodiesel ramps, kitsch pug pickled hella mixtape tofu disrupt. Hell of typewriter tacos, chambray wayfarers keffiyeh gatekeep kitsch. Gastropub chicharrones humblebrag cloud bread live-edge hella flexitarian vinyl trust fund Brooklyn.",
    img: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBhcnR5JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ahamed + Jubayer",
  },
  {
    body: "Squid big mood bruh, cardigan echo park meditation gentrify. Mumblecore etsy helvetica adaptogen sartorial prism kinfolk kale chips literally. Whatever VHS cold-pressed messenger bag crucifix. Lomo pork belly tbh, pug gluten-free readymade beard. Schlitz twee street art, williamsburg humblebrag gastropub quinoa +1 trust fund Brooklyn ethical viral migas cold-pressed. Pop-up typewriter art party copper mug artisan prism, trust fund next level gochujang kitsch church-key selfies brunch meditation selvage trust fund Brooklyn.",
    img: "https://images.unsplash.com/photo-1543191219-92c8ed3d8cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHBhcnR5JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Arrony & Asim",
  },
  {
    body: "Yr drinking vinegar snackwave microdosing iPhone, shoreditch wolf poutine prism waistcoat tumblr. Chia put a bird on it skateboard, vegan post-ironic pug thundercats. Adaptogen austin viral DSA small batch +1 normcore jean shorts occupy franzen flexitarian keffiyeh pug raclette. Bodega boys hashtag sriracha poke yr deep v marfa vibecession umami flannel keffiyeh before they sold out blog. Ascot live-edge fixie chia activated charcoal lo-fi williamsburg seitan poke offal truffaut af tilde asymmetrical shaman.",
    img: "https://images.unsplash.com/photo-1652784680811-a6155a369258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBhcnR5JTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
                className="h-[50px]"
                src="https://assets.website-files.com/5e23629e05541e1ef1703eab/61ae57722ab3b8771302801f_what-the-people.png"
                alt=""
              />
            </ParallaxText>
            <ParallaxText baseVelocity={-2}>
              <img
                className="h-[50px]"
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
