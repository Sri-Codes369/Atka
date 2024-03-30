import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/navBar';
import MainView from '../MainView/mainView';




const Home = ({ isLoggedIn }) => {
  const [countries, setCountries] = useState(['United State', 'India', 'France', 'Germany', 'Country5']);
  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 200);

    return () => clearInterval(intervalId);
  }, [countries]);

  return (
     <><div>
        
          <div id='Home-Page'>
          <div  class="background-image">
          
              <h1 className="text-center text-welcome">Welcome to Atka</h1>
           
              <h2 className="text-center my-5" style={{color:"#3087c2ab"}}>Visit <span class="text-countries h2">{countries[currentIndex]}</span> </h2>
     
              <div className="text-center">
                  <button className="btn btn-book">Book Now</button>
              </div>
          </div>

          {isLoggedIn && <MainView />}
          </div>
       </div></>
  );
};

export default Home;
