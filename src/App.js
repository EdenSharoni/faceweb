import React from 'react';
import profileImage from './img/picture.png';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My React Page</h1>
<h2>Author: Eden Sharoni</h2>
<img src ={profileImage} alt ="Profile-image"/>
    </div>
  );
}

export default App;
