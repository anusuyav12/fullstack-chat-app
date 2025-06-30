<<<<<<< HEAD
import React from 'react';

import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";

const storedtheme = localStorage.getItem("chat-theme") || "winter";
document.documentElement.setAttribute(
  "data-theme", storedtheme);

createRoot(document.getElementById('root')).render(
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // 👈 This is important!
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
>>>>>>> cb734c8ff5837d86a4552b5686e9993870fa7fc8
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
<<<<<<< HEAD
);
=======
)
>>>>>>> cb734c8ff5837d86a4552b5686e9993870fa7fc8
