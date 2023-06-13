import React from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Work from "../Work/Work";


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
});

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Work />
        </div>
    );
};

export default App;
