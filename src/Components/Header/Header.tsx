import React from 'react';
import "./Header.scss";

const navData = ["Work", "About", "Contact"];

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>D-CODE</h2>
                </div>
                <div className="nav">
                    {navData.map(el => {
                        return <a href="#">{el}</a>
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;
