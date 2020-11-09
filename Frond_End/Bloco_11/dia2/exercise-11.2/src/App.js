import React from 'react';
import './App.css';
import data from './data.js';
import Pokelist from './pokelist.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokelist />
      </div>
    );
  }
}

export default App;
