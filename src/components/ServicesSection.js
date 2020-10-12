import React from 'react';
import {About,Description,Image} from '../styles';
import styled from 'styled-components';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg'; 
import homeImg2 from '../img/home2.png'

const ServicesSection = () => {
    return(
            <Services>
                <Description>
                    <h2>High <span>quality</span> services.</h2>
                    <Cards>
                        <Card>
                            <div className="icon">
                                <img src={clock} alt=""/>
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={teamwork} alt=""/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={diaphragm} alt=""/>
                                <h3>Pro Grade Gear</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                        <Card>
                            <div className="icon">
                                <img src={money} alt=""/>
                                <h3>Affordable</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                    </Cards>
                </Description>
                <Image>
                    <img src={homeImg2} alt="camera"/>
                </Image>
            </Services>
    )
}

const Services = styled(About)`
     min-height: 90vh;
     color: white;
     display: flex;
     justify-content: space-between;
     align-items:center;
     padding: 5rem 10rem;
     h2{
         padding-bottom: 5rem;
     }
     p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`

const Cards = styled.div`
    display:flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left: 1rem;
            background:white;
            color:black;
            padding: 1rem;
        }
    }
`


export default ServicesSection;