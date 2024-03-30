import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar/navBar';
import Home from './HomePage/homePage';
import React,{useState} from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Home isLoggedIn={isLoggedIn}/>
    </>
   
  );
}

export default App;
