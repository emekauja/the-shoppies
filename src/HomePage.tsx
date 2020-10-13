import React, { useEffect } from 'react'
import { Store } from './Store'
import { fetchDataAction, setSearchFilter } from './Actions'
import { MovieItems } from './MovieItems'
import { OMDbMovie } from './interfaces'



//interface HomePageProps {}

const HomePage: React.FC = () => {
  //const { fetchDataAction, setSearchFilter } = actions

  const { state, dispatch } = React.useContext(Store)
  const queryValue: string = state.queryValue
  const movies: Array<OMDbMovie> = state.movieList

  const handleSearchChange = (evt: any) => {
    const { value } = evt.target
    dispatch(setSearchFilter(value))
  }


  useEffect(() => {
    fetchDataAction(queryValue, dispatch)
  }, [dispatch, queryValue])
    return (
      <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search movies"
          value={queryValue}
          onChange={handleSearchChange}
        />
      </form>
      <div className="results">
          <h4>Results for: {`"${queryValue}"`}</h4>
          <ul>
            {
              state.isLoading
                ? (<p style={{
                  fontSize: "30px",
                  color: "#c1c1c1",
                }}>Loading...</p>)
                : movies.length === 0 ?
                  (<p style={{
                    fontSize: "20px",
                    color: "#c1c1c1",
                  }}>Please search movie above!</p>)
                  : (movies && movies.map(movie => (
                    <MovieItems key={movie.imdbID} movie={movie} /* nominatedMovies={nominatedMovies} */ />
                  )))
            }
          </ul>
        </div>
    </section>
    );
}


export default HomePage;