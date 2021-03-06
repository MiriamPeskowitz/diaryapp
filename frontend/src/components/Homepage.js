import React from 'react';
import logo from '../img/logo.svg';
// import screenshot from '../img/screenshot.png';
import AddActivity from './AddActivity';

const Homepage = ({ setScreen }) => {
  const AddActivity = () => {
  setScreen('AddActivity')
  }
  
  return (
    <header className="Homepage">
      <img 
        src={logo} 
        className="Homepage-logo"
        alt="logo" />
      <div className="container">
        <div className="Left" alt="screenshot" > 
        </div>

         <div className="Right"> 
         <p>Log Your Activities in this App.</p>
         <button onClick={AddActivity}>START</button>
        </div>
      </div>
    </header>
  )
}
export default Homepage;

