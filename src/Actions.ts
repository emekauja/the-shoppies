import { IAction, OMDbMovie } from './interfaces'

export const setSearchFilter = (filterValue: string) => {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: filterValue,
  }
}

//Fetch DATA from API
export const fetchDataAction = async (queryValue: string, dispatch: any) => {
  const URL = `https://www.omdbapi.com/?apikey=d3e1b3bd&type=movie&s=${queryValue}`

  dispatch({
    type: 'GET_ALL_MOVIES_START'
  })

  try {
    const allMovies = await fetch(URL)
    const data = await allMovies.json()

    if (data.Error) {
      dispatch({
        type: 'FETCH_MOVIES_FAILURE',
        payload: data.Error,
      })
      throw data.Error
    } else {
      dispatch({
        type: 'FETCH_MOVIES',
        payload: data/* .map((movie: OMDbMovie) => {
          return {
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
            nominated: false,
        };
        }) */
      })
    }
  } catch (data) {
    dispatch({
      type: 'FETCH_MOVIES_FAILURE',
      payload: data.Error,
    })
  }
}

export const setNominatedMovie = (movie: OMDbMovie, dispatch: any) => {
  dispatch({
    type: 'SET_NOMINATED_MOVIE_START'
  })

  try {
    dispatch({
      type: 'SET_NOMINATED_MOVIE_SUCCESS',
      payload: movie,
    })
  } catch (err) {
    dispatch({
      type: 'SET_NOMINATED_MOVIE_FAILURE',
    })
  }
}

export const removeNominatedMovie = (movie: OMDbMovie, dispatch: any) => {
  dispatch({
    type: 'REMOVE_NOMINATED_MOVIE_START'
  })

  try {
    dispatch({
      type: 'REMOVE_NOMINATED_MOVIE_SUCCESS',
      payload: movie.imdbID,
    })
  } catch (err) {
    dispatch({
      type: 'REMOVE_NOMINATED_MOVIE_FAILURE',
    })
  }
}

export const notimateMovieAction = (dispatch: any, movie: OMDbMovie): IAction => {

  return dispatch({
  type: 'ADD_NOMINEE',
  payload: movie
 })
 }