import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './home';
import Adminogin from './Adminlogin';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Newhome from './Components/Newhome';
import Viewemp from './Components/Viewemp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/adminlogin/*" element={<Adminogin />} />

    </Routes>
  </BrowserRouter>
);