import React from 'react';
import Card from './card.js';

class Pokelist extends React.Component {
  render() {
    const { pokemons } = this.props;
    console.log(pokemons)
    return (
      <div>
        {pokemons.map(pokemon => <Card pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokelist;
