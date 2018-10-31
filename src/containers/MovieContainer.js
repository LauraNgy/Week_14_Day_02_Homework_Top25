import React, {Component} from 'react';
import MovieSelector from '../components/MovieSelector';
import MovieDetail from '../components/MovieDetail';

class MovieContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      currentMovie: null
    };
    this.handleMovieSelected = this.handleMovieSelected.bind(this);
  }

  componentDidMount() {
    fetch('https://rss.itunes.apple.com/api/v1/gb/movies/top-movies/all/25/explicit.json')
      .then (
        (response) => {
          return response.json();
        }
      )
      .then (
        (result) => {
          console.log(result.feed.results);
          this.setState({movies: result.feed.results});
        }
      )
      .catch(
        (err) => {
          console.error(err);
        }
      )
  }

  handleMovieSelected(index) {
    const selectedMovie = this.state.movies[index];
    this.setState({currentMovie: selectedMovie});
  }

  render(){
    return (
      <div className="mainDiv">
        <h2>Top 25 Movies in UK</h2>
        <MovieSelector movies={this.state.movies} onMovieSelected={this.handleMovieSelected}/>
        <MovieDetail movie={this.state.currentMovie}/>
      </div>
    );
  }
}

export default MovieContainer;
