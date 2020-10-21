import React from 'react';
//import axios from 'axios';
import './App.scss';
import NavBar from './NavBar';
//import { SeachBar } from './SeachBar';
//import { /* Movie, */ OMDbMovie } from './interfaces'
//import { MovieGrid } from './MovieGrid' 


function App(props: any): JSX.Element {
/*   const [movies, setMovies] = useState<OMDbMovie[]>([])
  const [query, setQuery] = useState<string>('')
  //const key = 'd3e1b3bd'

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=d3e1bd`)
      .then((result) => {
        if (result.data.Search) {
          setMovies(result.data.Search.map((movie: OMDbMovie) => {
            return {
              id: movie.imdbID,
              title: movie.Title,
              poster: movie.Poster,
              year: movie.Year,
              nominated: false,
          };
        })
        );
      }
      })
      .catch((error) => {
        console.log(error.response.data.error)
      })
      
      if (query.length === 0) {
        setMovies([])
      }
  }, [query]) */

/*   useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(
        `https://www.omdbapi.com/?s=${query}&type=movie&apikey=d3e1bd`
      )

          const movies = movieResults.map((movie: any) => {
          const newMovie: Movie = {
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
            nominated: false
          }
          return newMovie
        })
        const results = await result.data.Search
        if (query.length === 0) {
          setMovies([])
        }
        setMovies(results) 
    } 

    fetchMovies()
  }, [query]) */


  return (
    <React.Fragment>
      <NavBar />
      {props.children}
    </React.Fragment>
  );
}

export default App;
