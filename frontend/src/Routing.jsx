import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Getstarted from './component/Getstarted';
import Questions from './component/Questions';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import Planform from './component/Planform';
import Dashboard from './component/Dashboard';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path="/*" element={<App />} />
                <Route exact path="/app" element={<App />} />
                <Route exact path="/navbar" element={<Navbar />} />
                <Route exact path="/getstarted" element={<Getstarted />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/questions" element={<Questions />} />
                <Route exact path="/footer" element={<Footer />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/planform" element={<Planform />} />
                <Route exact path="/dashboard/:_id" element={<Dashboard />} />

            </Routes>
        </>
    );
};

export default Routing;