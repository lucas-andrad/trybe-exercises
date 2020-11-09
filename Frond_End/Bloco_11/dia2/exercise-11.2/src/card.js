import React from 'react';

class Card extends React.Component {
  render() {
    const { id, name, type } = this.props.pokemon;
    console.log(this.props.pokemon);
    return (
      <div>
        <p>
          {id}, {name}, {type}
        </p>
      </div>
    );
  }
}

export default Card;
