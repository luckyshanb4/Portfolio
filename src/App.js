import React from 'react';
import './App.scss';
import NavBar from './components/NavBar'
import HomePage from './Pages/HomePage';
import { Switch,Route } from 'react-router';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';

const App = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <NavBar/>
            </div>
            <div className="main-contents">
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/about" exact>
                            <AboutPage/>
                        </Route>
                        <Route path="/portfolios" exact>
                            <PortfoliosPage/>
                        </Route>
                        <Route path="/blogs" exact>
                            <BlogPage/>
                        </Route>
                        <Route path="/contact" exact>
                            <ContactPage/>
                        </Route>

                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default App;