import React from 'react'

interface SearchBarProps {
  query: string,
  getQuery: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, getQuery }) => {
  //const [movieTitle, setMovieTitle] = useState<string>('') 

/*   const onChange = (q: string) => {

    setMovieTitle(q)
    getQuery(q)
  } */

  return (
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="search movies"
            value={query}
            onChange={getQuery}
            autoFocus
          />
        </form>
      </section>
    );
}