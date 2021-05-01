import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
