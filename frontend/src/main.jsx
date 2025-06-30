import React from 'react';

import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";

const storedtheme = localStorage.getItem("chat-theme") || "winter";
document.documentElement.setAttribute(
  "data-theme", storedtheme);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);
