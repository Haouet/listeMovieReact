import { useState , useEffect } from 'react'
import './MovieList.css';
import axios from 'axios';
import MovieCard from './MovieCard';

export default function MovieList() {
  const [searchValue,setSearchValue] = useState("");
  const [movies,setMovies] = useState([]);
  useEffect(()=> {
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=ba5a452f`)
    .then((response)=>{
      if(response.data.Search){
        console.log(response.data.Search);
        setMovies(response.data.Search)
      }  
    }).catch((error) => console.log(error))
  },[searchValue]);
  return (    
  <>    
 <div className="row">
 <div className="col-lg-12 col-md-12 mb-4 mb-lg-0">
  <div className="input-container">
     <input type="text" className="form-control mr-sm-8" placeholder="Search !!!"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      />
   </div>

      {movies.length > 0 && <div className='row'>      
      {movies.map((movie)=>(
      <div class="col-6 col-sm-4" key={movie.imdbID}>
      {<div className="card-deck">
      <div className="card"> 
        <MovieCard movie={movie}/>      
      </div> 
      </div> }
      </div>))}
    </div>}

 </div>
 </div>

  
</>
  )
}
