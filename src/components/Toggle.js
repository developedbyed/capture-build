import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <motion.div onClick={() => setToggle(!toggle)}>
      {toggle ? children : ''}
    </motion.div>
  );
};

export default Toggle;
