import React, { useState, useEffect } from 'react';
import MainTask from './MainTask';
import Home from './Home';
import Navibar from './Navibar';
import TopPanel from './TopPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

    return (
        <div>
            <Router>
                <Navibar />
                <br></br>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/panel' element={<MainTask />} />
                    <Route path='/weather' element={<TopPanel />} />
                </Routes>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div id='footer'>
                    <p>@Copyright by Nurzarina</p>
                </div>
            </Router>
        </div>
    );
}

export default App;
