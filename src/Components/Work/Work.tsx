import React from 'react';
import "./Work.scss";




const data = [
    {
        id: 0,
        title: "Trafico",
        img: "/Trafico.jpg",
        filter: "html/css",
        href: "https://denis-paziak.github.io/Trafico/output/"
    },
    {
        id: 1,
        title: "Amazing-taiwan",
        img: "/Amazing-taiwan.jpg",
        filter: "html/css",
        href: "https://denis-paziak.github.io/Amazing-taiwan/"
    },
    {
        id: 2,
        title: "Todo-list",
        img: "/todo-list.jpg",
        filter: "react",
        href: 'https://todo-list-denis-paziak.vercel.app/'
    },
    {
        id: 3,
        title: "Password-generator",
        img: "/Password-generator.jpg",
        filter: "javaScript",
        href: 'https://denis-paziak.github.io/Password-generator/'
    },
    {
        id: 4,
        title: "Call-Center Dashboard",
        img: "/Call-Center.jpg",
        filter: "react",
        href: 'https://call-center-software.vercel.app/'
    },

];


const Work = () => {
    return (
        <div className="work">
            <div className="container">
                <div className="title">
                    <h2 data-aos="fade-up">Work</h2>
                </div>
                <div className="work-list">

                    {data.map((el) => {
                        return  <a href={el.href} key={el.id} className="item" data-aos="fade-up">
                            <div className="img">
                                <img src={el.img} alt="work img"/>
                            </div>
                            <h2>{el.title}</h2>
                        </a>
                    })}

                </div>
            </div>
        </div>
    );
};

export default Work;
