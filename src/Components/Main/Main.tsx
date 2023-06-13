import React from 'react';
import "./Main.scss";
import shape from "../../img/shape.svg";

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="text">
                    <p data-aos="fade-up"  data-aos-duration="1500" >HELLO, I`am </p>
                    <h1 data-aos="fade-up"   data-aos-duration="2000" ><span>DENIS</span> PAZIAK</h1>
                </div>
                <div className="vector">
                    <img src={shape} alt="shape"  data-aos="fade-up"  data-aos-duration="1000"/>
                </div>
            </div>
        </div>
    );
};

export default Main;
