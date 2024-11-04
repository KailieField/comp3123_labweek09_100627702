import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Student from './components/Student';

const stud = {
  id: 100627702,
  name: 'Kailie Field',
  college: 'George Brown College, Toronto'
}


function App() {

 return(
  <div className="App">
    <img src={ logo } className="App-logo" alt="logo" />
    <Welcome />
    <Student stud={ stud } />
  </div>
 )
  
  
}

export default App;
