import React from 'react';

class Card extends React.Component {
  render() {
    const { name, type , averageWeight, image} = this.props.pokemon;
    console.log(this.props.pokemon);
    return (
      <div>
        <p>
          {name}, {type}
        </p>
      </div>
    );
  }
}

export default Card;
