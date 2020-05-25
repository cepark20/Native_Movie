import React from 'react';
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "http://aeriskitchen.com/wp-content/upload/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: 
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx",
    rating: 3
  }
]


function Food({name, picture, rating}){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div> 
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
