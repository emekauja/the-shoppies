export const setSearchFilter = (filterValue: string) => {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: filterValue,
  }
}

//Fetch DATA from API
export const fetchMovies = (queryValue: string) => async (dispatch: any) => {
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
        payload: data
      })
    }
  } catch (data) {
    dispatch({
      type: 'FETCH_MOVIES_FAILURE',
      payload: data.Error,
    })
  }

}