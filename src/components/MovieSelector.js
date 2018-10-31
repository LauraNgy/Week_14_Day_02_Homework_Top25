import React, {Fragment} from 'react';

const MovieSelector = (props) => {
  const options = props.movies.map( (movie, index) => {
    return <option value={index} key={index}>{movie.name}</option>
  });

  const listItems = props.movies.map( (movie) => {
    return <li>{movie.name}</li>
  })

  function handleChange(event) {
    props.onMovieSelected(event.target.value);
  }

  return (
    <Fragment>
      <select id="movie-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Select a movie to find more about it</option>
        {options}
      </select>
      <ol>
        {listItems}
      </ol>
  </Fragment>
  )
}

export default MovieSelector;
