import React from 'react';

const MovieDetail = (props) => {
  if (!props.movie) {
    return null;
  }

  return (
    <div className="movie-details">
      <h3>{props.movie.name}</h3>
      <p>Director: {props.movie.artistName}</p>
      <p>Release Date: {props.movie.releaseDate}</p>
      <p>Main Genre: {props.movie.genres[0].name}</p>
    </div>
  )
}

export default MovieDetail;
