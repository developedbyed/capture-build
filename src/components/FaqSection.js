import React from 'react';
import { About } from '../styles';
import styled from 'styled-components';
import Toggle from './Toggle';
import { motion } from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <Toggle>
        <motion.div className="question">
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
          <div className="faq-line"></div>
        </motion.div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>What Products do you offer?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <div className="question">
        <h4>Diferrent Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            reprehenderit perferendis sunt magni dolores ratione.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
