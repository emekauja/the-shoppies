/**
 * All the interfaces
 */

export type Dispatch = React.Dispatch<IAction>

export interface OMDbMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Poster: string,
  nominated: boolean
}
 
export interface IAction {
  type: string
  payload: Array<OMDbMovie> | any
}

 export interface IState {
  movieResults: OMDbMovie | any,
  nominees: Array<OMDbMovie>,
  movieList: Array<OMDbMovie>,
  isLoading: boolean,
  nominated: boolean,
  queryValue: string,
  errorMessage: string
}

export interface IMovie {
  id: string,
  title: string,
  poster: string,
  year: string,
  nominated: boolean,
}

export interface IMovieProps {
  movies: Array<OMDbMovie>
  store: {state: IState, dispatch: any}
  notimateMovieAction:(state: IState, dispatch: any, movie: OMDbMovie) => IAction
  nominees: Array<OMDbMovie>
}