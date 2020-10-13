import React from 'react'
import { OMDbMovie } from './interfaces'

interface MovieItemsProps {
  movie: OMDbMovie
}

export const MovieItems: React.FC<MovieItemsProps> = ({ movie }) => {
    return (
      <div className="card">
        <div className="card-movie__img">
          <img src={movie.Poster} alt=""/>
        </div>
        <div className="card-movie__details">
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
        {/* <Nominate />  */}
      </div>
    );
}