import React, { useEffect } from 'react'
import { Store } from './Store'
import { fetchDataAction, setSearchFilter, notimateMovieAction } from './Actions'
//import { MovieItems } from './MovieItems'
import { /* OMDbMovie, */ IMovieProps } from './interfaces'
import { MovieGrid } from './MovieGrid'



//interface HomePageProps {}

function HomePage() {
  //const { fetchDataAction, setSearchFilter } = actions

  const { state, dispatch } = React.useContext(Store)
  const queryValue: string = state.queryValue
  //const movies: Array<OMDbMovie> = state.movieList
  //const nominatedMovies = state.nominees

  const handleSearchChange = (evt: any) => {
    const { value } = evt.target
    dispatch(setSearchFilter(value))
  }

  useEffect(() => {
    fetchDataAction(queryValue, dispatch)
  }, [dispatch, queryValue])

  
  const props: IMovieProps = {
    movies: state.movieList,
    notimateMovieAction,
    nominees: state.nominees,
    store: { state, dispatch }
  }
    return (
      <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search movies"
          value={queryValue}
          onChange={handleSearchChange}
          autoFocus
        />
      </form>
      <div className="results">
          <h4>Results for: {`"${queryValue}"`}</h4>
          <MovieGrid {...props} />
        </div>
    </section>
    );
}


export default HomePage;