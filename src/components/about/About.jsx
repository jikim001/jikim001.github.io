import React from 'react';
import "./about.css";
// import Image from "../../assets/my-profile-2.svg"
import AboutBox from "./AboutBox"

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                {/* <img src={Image} alt="" className="about__img" /> */}

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            My name is Jisoo Kim and I'm a native Coloradan who likes to explore cafes every Friday.
                            I currently work at Lockheed Martin on the Orion program, so I'll see you on Mars!
                        </p>
                        <a href="" className="btn">Download Resume</a>
                    </div>

                    <div className="about__skills grid">
                        
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Embedded Software Development</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Frontend Development</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">UI/UX design</h3>
                                <span className="skills__number">50%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>





                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About