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

//setState를 할 때마다 새로운 state + render function 호출 
class App extends React.Component{

  state = {
    count: 0
  };
  add = () => {
    //this.state.count = 1; not working! 
    //this.setState({count: this.state.count + 1}); not good
    this.setState(current => ( //current: current state 
      {count: current.count + 1}
    ));
  }; // 외부의 상태에 의존하지 않는 가장 좋은 방법 
  minus = () => {
    this.setState(current => (
      {count: current.count - 1}
    ));
  };

  // 처음 만들어졌을 때 
  componentDidMount(){
    console.log("component rendered");
    
  }

  //업데이트할 때 마다 호출 
  componentDidUpdate(){
    console.log("I just updated");
    
  }

  componentWillUnmount(){
    console.log("Goodbye");
  }

  render(){
    console.log("Im rendering");
    
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
