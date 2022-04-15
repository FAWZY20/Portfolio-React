import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Acceuil from './pages/Acceuil/Acceuil.js';
import Contact from './pages/Contact/Contact.js';
import { 
  BrowserRouter, 
  Routes,
  Route,
 } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
