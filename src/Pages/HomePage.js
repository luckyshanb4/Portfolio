import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Link}  from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            <div className="HomePage">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, I am
                        <span> Luckyshan Bandara </span>
                    </h1>
                    <p className="home-page-sub-text">
                    A Passionate Programmer
                    </p>
                    <div className="icons">
                    
                    <Link className="iconHolder"> 
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />  
                    </Link>
                    <Link className="iconHolder"> 
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>  
                    </Link>
                    <Link className="iconHolder"> 
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>  
                    </Link>
                    

                    </div>

                </header>
            </div>
        </div>
    );
}

export default HomePage;