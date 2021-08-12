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

                <ul className="nav-item">

                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            portfolios
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>

                </ul>

                

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