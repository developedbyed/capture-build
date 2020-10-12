import React from 'react';
import {About,Description,Image} from '../styles';
import styled from 'styled-components'
//Images
import homeImg1 from '../img/home1.png';



const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We
                    have professionals with amazing skills to help you achieve it.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={homeImg1} alt="camera guy"/>
            </Image>
        </About>
    );
}


const Hide = styled.div`
    overflow: hidden;
`

export default AboutSection;