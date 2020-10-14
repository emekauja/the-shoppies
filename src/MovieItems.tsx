import React from 'react'
import { OMDbMovie } from './interfaces'
import { setNominatedMovie } from './Actions'
import { Store } from './Store'


interface MovieItemsProps {
  movie: OMDbMovie
  nominatedMovies: Array<OMDbMovie>
}

export const MovieItems: React.FC<MovieItemsProps> = ({ movie, nominatedMovies }) => {
  const { dispatch } = React.useContext(Store)

    const handleNominate = (evt: any) => {
      evt.preventDefault()
      movie["nominated"] = true
      if (nominatedMovies.length === 5) {
        alert("Maximum number of nominations added!")
      } else {
        setNominatedMovie(movie, dispatch)
      }
    }
    return (
      <div className="card">
        <div className="card-movie__img">
          <img src={movie.Poster} alt=""/>
        </div>
        <div className="card-movie__details">
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
        <button
          type="button"
          disabled={movie.nominated ? true : false}
          onClick={handleNominate}
          className={movie.nominated ? "" : "nominate"}
        >
        {movie.nominated ? "Nominated" : "Nominate"}
      </button>      
      </div>
    );
}