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
  const  {/* state, */ dispatch} = store

/*   const handleNominate = (evt: any) => {
    evt.preventDefault()
    movie["nominated"] = true
    if (nominatedMovies.length === 5) {
      alert("Maximum number of nominations added!")
    } else {
      setNominatedMovie(movie, dispatch)
    }
  } */

    return movies.map((movie: OMDbMovie) => (
      <section key={movie.imdbID} className="episode-box">
        <img 
          src={movie.Poster} 
          alt={`${movie.Title}`} 
        />
        <div className="">{movie.Title}</div>
        <section>
          <div>
            Year: {movie.Year} 
          </div>
          <button 
            type="button" 
            disabled={movie.nominated ? true : false}
            className={movie.nominated ? "" : "nominate"}
            onClick={() => {
              notimateMovieAction(dispatch, movie)
              movie["nominated"] = true 
              }}
          >
            {nominees.includes(movie) ? 
            'Nominated' : 
            'Nominate' }
          </button>
        </section>
      </section>
        ))
}