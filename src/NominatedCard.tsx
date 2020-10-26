import React from 'react'
//import { MovieItems }  from './MovieItems'
import { OMDbMovie } from './interfaces'
//import { setNominatedMovie } from './Actions'
//import { MovieItems } from './MovieItems'


/*  interface MovieGridProps {
  movies: Array<OMDbMovie>
} */

 const NominatedCard = (props: any): Array<JSX.Element> | any => {
  const {movies, removeNominatedMovie, store} = props
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
            className= "remove_button"
            onClick={() => {
              removeNominatedMovie(movie, dispatch)
              movie["nominated"] = false
              }}
          >
            Remove nomination
          </button>
      </section>
        ))
}

/* <a href="https://super.so" target="_blank" class="block">
    <div class="block-inner lax" data-lax-opacity="(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0" data-lax-anchor="self" style="backface-visibility: hidden; opacity: 1;">
        <div class="block-text">
            <h2 class="block-title">Super</h2>
            <p class="block-subtitle">Add custom domains &amp; analytics to your Notion docs.</p>
        </div>
        <div class="block-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right block-icon icon"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            <img class="block-img" src="https://d33wubrfki0l68.cloudfront.net/0fb4a401ca0ab04c9fd849dc6801f9942c490e3b/91033/images/logo-super.svg" alt="Super">
        </div>
    </div>
</a> */
export default NominatedCard
