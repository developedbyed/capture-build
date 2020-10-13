import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//Images
import homeImg1 from '../img/home1.png';
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={homeImg1} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
