import React from 'react';
import './App.css';
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
