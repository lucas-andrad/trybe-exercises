import React from 'react';

class Card extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {averageWeight.value}
          {averageWeight.measurementUnit}
        </p>
        <img src={image} alt="Pokemon"></img>
      </div>
    );
  }
}

export default Card;
