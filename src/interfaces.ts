/**
 * All the interfaces
 */

export type Dispatch = React.Dispatch<IAction>
 
export interface IAction {
  type: string
  payload: Array<IMovie> | any
}

 export interface IState {
  movieResults: OMDbMovie | any,
  nominees: Array<IMovie>,
  movieList: Array<IMovie>,
  isLoading: boolean,
  nominated: boolean,
  queryValue: string,
  errorMessage: string
}


export interface OMDbMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Poster: string,
}

export interface IMovie {
  id: string,
  title: string,
  poster: string,
  year: string,
  nominated: boolean,
}

/* export interface IEpisodeProps {
  episodes: Array<IEpisode>
  store: {state: IState, dispatch: any}
  toggleFavAction:(state: IState, dispatch: any, episode: IEpisode) => IAction
  favourites: Array<IEpisode>
} */