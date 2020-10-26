import React from 'react'
import { Store } from './Store'
import { /* fetchDataAction, setSearchFilter, */ removeNominatedMovie } from './Actions'
//import { MovieItems } from './MovieItems'
import { /* OMDbMovie, */ INominatedProps } from './interfaces'
import Spinner from './ui/Spinner'


//interface HomePageProps {}
const NominatedCard = React.lazy<any>(() => import('./NominatedCard'))


function NominatedPage() {
  //const { fetchDataAction, setSearchFilter } = actions

  const { state, dispatch } = React.useContext(Store)
  //const movies: Array<OMDbMovie> = state.movieList
  //const nominatedMovies = state.nominees

  
  const props: INominatedProps = {
    movies: state.nominees,
    removeNominatedMovie,
    nominees: state.nominees,
    store: { state, dispatch }
  }
    return (
      <React.Suspense fallback="loading...">
        <section className="search">
          <div className="results">
            <h2>Nominations</h2>
            {state.isLoading ? <Spinner /> : <NominatedCard {...props} />}
          </div>
        </section>
      </React.Suspense>

    );
}


export default NominatedPage;