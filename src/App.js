import React from 'react';
import './App.css';
import Calendly from './components/Calendly';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <div className="row">
        <div className="col">
        <Calendly />
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
