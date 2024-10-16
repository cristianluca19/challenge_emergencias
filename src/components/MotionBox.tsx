import React from 'react';
import { motion } from 'framer-motion';
import { IMotionBoxProps } from '../type';


const MotionBox: React.FC<IMotionBoxProps> = ({
  children,
  initial = { opacity: 0, y: -50 },
  animate = { opacity: 1, y: 0 },   
  transition = { duration: 1 },     
  className = '',                   
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionBox;
