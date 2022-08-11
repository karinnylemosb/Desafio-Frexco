import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './global.css';
// import Home from './components/menu/menu';
import Routes from "./core/routes/routes"
import GlobalState from './core/context/GlobalProducts'

createRoot(document.getElementById('root')).render (
<React.StrictMode>
    <GlobalState>
       <Routes/>
       </GlobalState>
    </React.StrictMode>
)