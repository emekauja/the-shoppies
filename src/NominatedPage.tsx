import React from 'react'
import { Store } from './Store'
import { /* fetchDataAction, setSearchFilter, */ removeNominatedMovie } from './Actions'
//import { MovieItems } from './MovieItems'
import { /* OMDbMovie, */ INominatedProps } from './interfaces'
import { MovieGrid } from './MovieGrid'



//interface HomePageProps {}
const NominatedCard = React.lazy<any>(() => import('./NominatedCard'))


function NominatedPage() {
  //const { fetchDataAction, setSearchFilter } = actions

  const { state, dispatch } = React.useContext(Store)
  //const movies: Array<OMDbMovie> = state.movieList
  //const nominatedMovies = state.nominees

  
  const props: INominatedProps = {
    movies: state.movieList,
    removeNominatedMovie,
    nominees: state.nominees,
    store: { state, dispatch }
  }
    return (
      <section className="search">
      <div className="results">
        <h2>Nominations</h2>
          <NominatedCard {...props} />
        </div>
    </section>
    );
}


export default NominatedPage;