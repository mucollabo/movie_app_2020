import React from 'react';
import PropTypes from 'prop-types';

function Food ({name, picture, rating}) {
  
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    rating: 5,
  },
  {
    id: 2,
    name: 'Salad',
    image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    rating: 4.2,
  },
  {
    id: 4,
    name: 'Kimchi',
    image: 'https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
    rating: 5,
  },
  {
    id: 5,
    name: 'Cola',
    image: 'https://images.unsplash.com/photo-1554169360-f86ef83314ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&q=80',
    rating: 3.7,
  },
];

function App() {
  return (
    <div>
      
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;
