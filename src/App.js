import React from 'react';
import axios from "axios"

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  //async키워드를 사용해야 await 가능 
  getMovies = async() => {
      const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{isLoading} = this.state;
    return (
      <div>{isLoading ? "Loading.." : "We are Ready"}</div>
    );
  }
}

export default App;
