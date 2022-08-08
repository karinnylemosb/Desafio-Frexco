import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './global.css';
import Home from './pages/Home/index-home';

createRoot(document.getElementById('root')).render (
<h1> <React.StrictMode>
       <Home/>
    </React.StrictMode>,
</h1>)