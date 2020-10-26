import React, { useEffect } from 'react'
import { Store } from './Store'
import { fetchDataAction, setSearchFilter, notimateMovieAction } from './Actions'
//import { MovieItems } from './MovieItems'
import { /* OMDbMovie, */ IMovieProps } from './interfaces'
import { MovieGrid } from './MovieGrid'
import NominatedPage from './NominatedPage'
import { SearchBar } from './SearchBar'
import Spinner from './ui/Spinner'



//interface HomePageProps {}

function HomePage() {
  const { state, dispatch } = React.useContext(Store)
  const queryValue: string = state.queryValue

  useEffect(() => {
    fetchDataAction(queryValue, dispatch)
  }, [dispatch, queryValue])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    dispatch(setSearchFilter(value))
  }

  const props: IMovieProps = {
    movies: state.movieList,
    notimateMovieAction,
    nominees: state.nominees,
    store: { state, dispatch }
  }
    return (
      <React.Suspense fallback="loading...">
        <section className="search">
          <SearchBar query={queryValue} getQuery={handleSearchChange} />
        </section>
        <div className="results">
            <h4>Results for: {`"${queryValue}"`}</h4>
            {
              state.isLoading
              ? <Spinner />
              : <MovieGrid {...props} />
              }
          </div>
          <NominatedPage />
      </React.Suspense>
    );
}


export default HomePage;