import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './global.css';
import Home from './components/menu/menu';

createRoot(document.getElementById('root')).render (
<h1> <React.StrictMode>
       <Home/>
    </React.StrictMode>,
</h1>)