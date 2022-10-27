import React from 'react';
import CardStyled from './styles/Card.styled';

const Card = ({ item }) => {
  return (
    <CardStyled layout={item.id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>

      <div>
        <img src={`./images/${item.image}`} alt='' />
      </div>
    </CardStyled>
  );
};

export default Card;
