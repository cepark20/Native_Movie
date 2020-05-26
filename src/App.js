import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  //async키워드를 사용해야 await 가능 
  getMovies = async() => {
      const{
        data: { 
          data :{movies}
        }
      } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); //es6 사용 
      //const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
      //console.log(movies.data.data.movies);
      //console.log(movies);
      this.setState({movies, isLoading:false});
      
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{isLoading, movies} = this.state;
    return (
      <div>{isLoading ? "Loading.." 
      : movies.map(movie => (
        <Movie 
        key = {movie.id}
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        />
        ))}
      </div>
    );
  }
}

export default App;
