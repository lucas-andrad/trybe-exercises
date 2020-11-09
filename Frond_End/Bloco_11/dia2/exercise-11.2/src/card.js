import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="container">
        <div className="card">
          <div className="texts">
            <p>{name}</p>
            <p>{type}</p>
            <p>
              {averageWeight.value}
              {averageWeight.measurementUnit}
            </p>
          </div>
          <img src={image} alt="Pokemon" className="icon"></img>
        </div>
      </div>
    );
  }
}

export default Card;
