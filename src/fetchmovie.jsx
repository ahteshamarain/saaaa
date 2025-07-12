import React from 'react';
import Movie from './netflix';
import { useEffect, useState } from 'react';
function MovieList() {
    
  const [movie,setMovie]=useState([]);


  
  useEffect(()=>{
  fetch("https://66051af12ca9478ea17f53a8.mockapi.io/movie")
  .then((data) => data.json())

  .then((movieList)=>setMovie(movieList));
  },[]
 );
  // .then((movieList) => {
  //     console.log(movieList);
  // })},[]);
  return (
    <div className="App">
   
      <div className="container">
        <div className="row">
          {movie.map((mov, index) => (
            <div className="col-md-4" key={index}>
              <Movie
                imgsrc={mov.imgsrc}
                title={mov.title}
                name={mov.name}
                link={mov.link}
                id={mov.id}
                key={mov.id}




              />


              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;