import React from 'react'
import { IState, IAction } from './interfaces'


const initialState:IState = {
  movieResults: {},
  movieList: [],
  nominees: [],
  isLoading: false,
  nominated: false,
  queryValue: '',
  errorMessage: ''
}

export const Store = React.createContext<IState | any>(initialState)

function reducer(state:IState, action:IAction): IState {
  switch (action.type) {
    case 'GET_ALL_MOVIES_START':
    case 'SET_NOMINATED_MOVIE_START':
    case 'REMOVE_NOMINATED_MOVIE_START':
      return {
        ...state,
        isLoading: true,
        nominated: true,
      }
    case 'FETCH_MOVIES':
      return { 
        ...state, 
        isLoading: false, 
        movieResults: action.payload, 
        movieList: action.payload.Search
       }
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        queryValue: action.payload,
        }
    case 'ADD_NOMINEE':
      return {
        ...state, 
        isLoading: false,
        nominated: false,
        nominees: [...state.nominees, action.payload],
      } 
    case 'REMOVE_NOMINEE':
      return {
        ...state,
        isLoading: false,
        nominated: false,
        nominees: action.payload /* state.nominees.filter(movie => movie.imdbID !== action.payload) */
      }
      case 'SET_NOMINATED_MOVIE_FAILURE':
      case 'REMOVE_NOMINATED_MOVIE_FAILURE':
          return {
            ...state,
            isLoading: false,
            nominated: false,
          }
    default:
      return state
  }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute):JSX.Element {
const [state, dispatch] = React.useReducer(reducer, initialState)
return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}