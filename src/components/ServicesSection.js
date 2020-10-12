import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg'; 
import homeImg2 from '../img/home2.png'

const ServicesSection = () => {
    return(
        <div>
            <div className="services">
                <div className="description">
                    <h2>High <span>quality</span> services.</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt=""/>
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt=""/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={diaphragm} alt=""/>
                                <h3>Pro Grade Gear</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={money} alt=""/>
                                <h3>Affordable</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="image">
                        <img src={homeImg2} alt="camera"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;