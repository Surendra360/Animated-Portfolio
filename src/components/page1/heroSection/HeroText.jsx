import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const HeroText = () => {

  const [scrollDirection, setScrollDirection] = useState(1)

  const scrollY =   useScroll().scrollY
  // console.log(scrollY);
  scrollY.on("change",function(){

    const currentScrolling = scrollY.get()-scrollY.getPrevious()
    
    if(currentScrolling>0){
      setScrollDirection(1)
    }else{
      setScrollDirection(-1)
    }
  })
  

  return (
    <div className="absolute top-[58%]">
        <motion.div
          initial={{
            x:-1664
          }}
          animate={{
            x:scrollDirection>0?-3328:0
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex"
        >
          <h1 className="text-[14vw] font-semibold text-white whitespace-nowrap">
            -Surendra Kumar
          </h1>

          <h1 className="text-[14vw] font-medium text-white whitespace-nowrap ">
            -Surendra Kumar
          </h1>

          <h1 className="text-[14vw] font-medium text-white whitespace-nowrap">
            -Surendra Kumar
          </h1>

        </motion.div>
    </div>
  );
};

export default HeroText;
