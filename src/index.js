import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';



import 'bootstrap/dist/css/bootstrap.min.css'; 

import 'bootstrap/dist/js/bootstrap.bundle.min';


import './BookingForm/bookingForm.css'

import './Package/package.css'

import './Services/services.css'


import Home from './HomePage/homePage';
import './HomePage/homePage.css'
import './NavBar/navBar.css'
import './Gallery/Gallery.css'
import './About/about.css'
import './Footer/footer.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Home />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
