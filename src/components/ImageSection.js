import React from 'react';
import about from "../img/about.png"

function ImageSection(props) {
    return (
        <div>
            <div className="ImageSection">
                <div className="img">
                    <img src={about} alt=""/>
                </div>
           

                <div className="about-info">
                    <h4>I am <span>Luckyshan</span></h4>
                    <p className="aboutText">
                    I found my passion in Software Development. Thus I followed my passion and I currently work as a Freelance Programmer. I am looking for an opportunity to develop my career as a Software Engineer.
                    </p>

                    <div className="about-details">
                        <div className="left-section">
                            <p>Full Name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Educational Qualifications</p>
                        </div>

                        <div className="right-section">
                            <p className="p-margin-left">: Edirille Mudiyanselage Janith Luckyshan Bandara</p>
                            <p className="p-margin-left">: 29</p>
                            <p className="p-margin-left">: Sri Lankan</p>
                            <p className="p-margin-left">: Sinhala. English</p>
                            <p className="p-margin-left">: B.Sc (Hons) in Electrical & Electronic Engineering</p>
                        </div>

                        
                

                    </div>
                    <button className="btn">Download CV</button>

                </div>
            </div>
        </div>
      
       
       

        
    );
}

export default ImageSection;