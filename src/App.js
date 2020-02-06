import React from 'react';
import Navbar from './components/layout/Navbar';
import Budget from './components/budget/Budget';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container my-5">
        <Budget />
      </div>
    </div>
  );
}

export default App;
