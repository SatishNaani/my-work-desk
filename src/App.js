import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Login from './components/login'
import Dashboard from "./components/dashboard";
import ResponsiveAppBar from "./components/headerToolbar";

function App() {
    return (
        <Router>
            <div>
                <ResponsiveAppBar/>
                <Routes>
                    {/* <Route exact path="/" element={<Login/>}/>
                            <Route path="/sign-in" element={<Login/>}/>
                            <Route path="/Dashboard/:id" element={<Dashboard/>}/>*/}

                    <Route exact path="/" element={<Dashboard/>}/>

                </Routes>
            </div>
        </Router>
    )
}

export default App
