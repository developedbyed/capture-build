import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledToggle layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className="faq-line"></div>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  cursor: pointer;
  h4 {
    padding: 2rem 0rem;
  }
`;

export default Toggle;
