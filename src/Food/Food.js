import React from "react";
import PropTypes from 'prop-types' 

function Food({name,picture,rating}) {
  
  return (
  <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}
const foodLike = [
  { id : 1,
    name : 'kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating : 3},
  { id : 2,
    name : 'kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating : 3},
  { id : 3,
    name : 'kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating : 3},

];

function App() {
  return (
    <div>
      {foodLike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image}rating={dish.rating} />))}
      
    </div>
    );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};
export default App;
