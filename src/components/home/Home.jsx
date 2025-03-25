import React from 'react';
import "./home.css";
// import Me from "../../assets/my-profile.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                {/* <img src={Me} alt="" className="home__img" /> */}
                <h1 className="home__name">Jisoo Kim</h1>
                <span className="home__education">I'm your friendly neighborhood Software Engineer!</span>
            
                <HeaderSocials />


                <a href="#contact" className="btn">Let's chat!</a>
            
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home