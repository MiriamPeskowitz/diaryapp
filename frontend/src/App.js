import React, { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import AddActivity from './components/AddActivity';

//could be props, but if it's {setScreen} you don't have to keep saying props.setScreen.. 

const App = () => {
  const {screen, setScreen} = useState('addActivity')

  return (
    <div className="App">
      { screen === 'homepage' && <Homepage setScreen = {setScreen}  />}
      
      { screen === 'addActivity' && <AddActivity />}
    </div>
  );
}

export default App;

