import React from 'react';
import image from '../../src/image.jpg';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const Movie = ({title, poster_path, overview, vote_average}) => {

    const setVoteClass = (vote) => {  //??
        if(vote >= 8){
            return "green"
        }else if(vote >= 6){
            return "orange"
        }else {
            return "red"
        }
    }
  return (
    <div className='movie'>  
            <img src={(poster_path? IMAGE_API + poster_path : image)} alt={title} /> 
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={` tag ${setVoteClass(vote_average)}`}>{vote_average}</span> 
        </div>
       <div className="movie-over">
           <h2>Overview:</h2>
           <p>{overview}</p> 
       </div>
    </div>
  )
}


export default Movie;


// line no: 7 ---  img api not working .. done
// movie hover : taking full space .. how to resolve ?
// line No 13: function inside classname ????
