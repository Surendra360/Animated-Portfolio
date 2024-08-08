import React from "react";
import { motion, useScroll } from "framer-motion";

const HeroText = () => {

  // const[scrollDirection, setScrollDirection] =  useScroll(1)

  const scrollY = useScroll().scrollY
  // console.log(scrollY);
   scrollY.on("change", function(){
    const currentScrolling = scrollY.get()-scrollY.getPrevious()
    console.log(currentScrolling);
    
   })
  

  return (
    <div className="absolute top-[58%]">
        <motion.div
          // initial={{
          //   x:-1510
          // }}
          // animate={{
          //   x: -3020,
          // }}
          // transition={{
          //   duration: 5,
          //   repeat: Infinity,
          //   ease: "linear",
          // }}
          className="flex gap-8"
        >
          <h1 className=" font-semibold text-white whitespace-nowrap">
            - Surendra Kumar
          </h1>
          <h1 className=" font-semibold text-white whitespace-nowrap">
            - Surendra Kumar
          </h1>
          <h1 className=" font-semibold text-white whitespace-nowrap">
            - Surendra Kumar
          </h1>
        </motion.div>
      
    </div>
  );
};

export default HeroText;
