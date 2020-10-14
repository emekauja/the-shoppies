import React, { useState } from 'react'

interface SeachBarProps {
  getQuery: Function
}

export const SeachBar: React.FC<SeachBarProps> = ({ getQuery }) => {
  const [movieTitle, setMovieTitle] = useState<string>('') 

  const onChange = (q: string) => {

    setMovieTitle(q)
    getQuery(q)
  }

  return (
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="search movies"
            value={movieTitle}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
        </form>
      </section>
    );
}