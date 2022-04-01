import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(async () => {
    const movieResp = fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  


  const handleOnChange = (e) => {

    let searchTerm = e.target.value;

    setSearchTerm(searchTerm);
    e.preventDefault();  // ????

    if(e.target.value.length > 0)
    fetch(SEARCH_API+searchTerm) // ......?
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
    
  }

  useEffect(()=>{

    console.log("searchTerm render")
    if(searchTerm.length == 0) {
      const movieResp = fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
    }
  },[searchTerm])

  return (
    <>
      <header>
       
          <input type="search" placeholder="Search" className="search"
           value={searchTerm} onChange={handleOnChange}/>  
       
      </header> 
      <div className="movie-container">
        {movies && movies.length > 0 &&
          movies.map((movie) => {
            // ?????
            return <Movie key={movie.id} {...movie} />; // Why used spread operator here?
          })}
      </div>
    </>
  );
}

export default App;


// line no : 33 --- value ?? onCHange??