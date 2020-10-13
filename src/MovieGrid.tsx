import React from 'react'
import { MovieItems }  from './MovieItems'
import { OMDbMovie } from './interfaces'


interface MovieGridProps {
  movies: Array<OMDbMovie>
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {

    return (
      <section>
        {movies.map(movie => (
          <MovieItems key={movie.imdbID} movie={movie} />
        ))}
      </section>
    );
}