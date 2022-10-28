import React from 'react'
import MovieCard from './MovieCard';
import { Link  } from "react-router-dom";
export default function MovieItem({movies}) {
 

  return (
    <>    
               {(movies.length > 0) && <div className='row'>
                {movies.map((movie) => (
                  <div className="col-6 col-sm-4" key={movie.imdbID}>
                    <div className="card-deck">
                      <div className="card">
                        <Link to={`/DetailMovie/${movie.Title}`} ><MovieCard movie={movie} /></Link>
                        
                      </div>
                    </div>
                  </div>))}
              </div>}
              </>

   
  )
}
