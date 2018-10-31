import React from 'react';

const MovieSelector = (props) => {
  console.log(props);
  const options = props.movies.map( (movie, index) => {
    return <option value={index} key={index}>{movie.name}</option>
  });

  function handleChange(event) {
    props.onMovieSelected(event.target.value);
  }

  return (
    <select id="movie-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Select a movie to find more about it</option>
      {options}
    </select>
  )
}

export default MovieSelector;
