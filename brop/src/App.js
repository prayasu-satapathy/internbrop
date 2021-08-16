import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
// import Footer from './Footer.jsx';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Home/>
     
    </div>
  );
}

export default App;
