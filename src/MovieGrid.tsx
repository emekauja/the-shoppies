import React from 'react'
//import { MovieItems }  from './MovieItems'
import { OMDbMovie } from './interfaces'
//import { setNominatedMovie } from './Actions'
//import { MovieItems } from './MovieItems'


/*  interface MovieGridProps {
  movies: Array<OMDbMovie>
} */

export const MovieGrid = (props: any): Array<JSX.Element> | any => {
  const {movies, notimateMovieAction, nominees, store} = props
  const  {state, dispatch} = store
  const nominations = state.nominees

  const handleNomination = (movie:OMDbMovie) => {
    movie["nominated"] = true
    if (nominations.length === 5) {

    } else {
      notimateMovieAction(dispatch, movie)
    }
  }

    return movies.map((movie: OMDbMovie) => (
      <section key={movie.imdbID} className="movie-container">
        <div className="movie-box block-inner">
          <img 
            src={movie.Poster} 
            alt={`${movie.Title}`} 
            className="box__img"
          />
          <section>
          <div className="">{movie.Title}</div>
            <div>
              Year: {movie.Year} 
            </div>
          </section>
          <button 
            type="button" 
            disabled={movie.nominated ? true : false}
            className={movie.nominated ? "" : "nominate"}
            onClick={() => handleNomination(movie)}
          >
            {nominees.includes(movie) ? 
            'Nominated' : 
            'Nominate' }
          </button>
        </div>
      </section>
   ))
}