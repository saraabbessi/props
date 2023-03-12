import './App.css';
import React from 'react';
import FullName from './Components/FullName';
import Profession from './Components/Profession';
import Bio from './Components/Bio';


function App() {
  return (
    
    <div >
      <FullName name ="Sarra" lastName="Abbessi" age="24 years old"/>
      <Profession profession="I am currently a student" 
      study=" I'am graduated from Higher Institute of Languages of Tunis"/>
      <Bio interests="My Interests are"/>
    </div>
  );
}

export default App;
