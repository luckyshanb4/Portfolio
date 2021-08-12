import React from 'react';
import './App.scss';
import NavBar from './components/NavBar'

const App = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <NavBar/>
            </div>
            <div className="main-contents"></div>
        </div>
    );
};

export default App;