import React, {useEffect, useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Login from './components/login'
import Dashboard from "./components/dashboard";
import ResponsiveAppBar from "./components/headerToolbar";
import {config} from './config';
import {PublicClientApplication} from '@azure/msal-browser';

function App() {
    const [state, setState] = useState({
        error: null,
        isAuthenticated: false,
        user: {}
    });
    let msalInstance;

    const getPublicClientApp = () => {
        msalInstance = new PublicClientApplication({
            auth: {
                clientId: config.appId,
                redirectUri: config.redirectUri,
                authority: config.authority
            },
            cache: {
                cacheLocation: 'sessionStorage',
                storeAuthStateInCookie: true
            }
        });
    }

    const login = async () => {
        try {
            await msalInstance.loginPopup(
                {
                    scopes: config.scopes,
                    prompt: 'select_account'
                });

            this.setState({isAuthenticated: true});

        } catch (e) {
            this.setState({isAuthenticated: false, user: {}, error: e});
        }
    };

    const logout = () => {
        msalInstance.logout();
    };

    useEffect(() => {
        getPublicClientApp();
        login();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
