import React, { useState } from 'react';
import { animate, motion } from "framer-motion";

const Navigation = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div className='w-screen px-5 py-10 text-white flex items-center justify-between fixed '>
        <div className='flex items-center gap-1'>
          <motion.span
            className='text-xl font-semibold cursor-pointer'
            animate={isHovering ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            ©️
          </motion.span>
          <span className='w-40 whitespace-nowrap text-xl overflow-hidden cursor-pointer'>
            <motion.h1
              animate={isHovering ? { x: -74 } : { x: 0 }}
              transition={{ ease: 'linear' }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Code by Surendra Kumar
            </motion.h1>
          </span>
        </div>
        <ul className='flex items-center gap-10 px-5 text-lg'>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;