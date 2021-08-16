import React from 'react';
import reactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.png'


function NavBar(props) {
    return (
        <div className='NavBar'>
           
            <nav className="nav">

                <div className='profile'>
                    <img src={avatar} alt=""/>
                </div>

                <div className="nav-items">

                    <div className="nav-item">
                        <NavLink className="link" to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink className="link" to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink className="link" to="/portfolios" exact activeClassName="active">
                            portfolios
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink className="link" to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink className="link" to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </div>

                </div>

                

                <footer className="footer">
                    <p>
                        @2021 Luckyshan Bandara
                    </p>
                </footer>

            </nav>

        </div>
    );
}

export default NavBar;