import React from 'react';
import Card from './card.js';
import data from './data.js'

class Pokelist extends React.Component {
  render() {
    return (
      <div>
        {data.map(pokemon => <Card pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokelist;
