import React, { useState, useEffect } from 'react'
import { Routes, Route,  useParams   } from "react-router-dom";

import Error from './Error';
import './MovieList.css';
import axios from 'axios';

import DetailMovie from './DetailMovie';
import MovieItem from './MovieItem';

export default function MovieList() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=ba5a452f`)
      .then((response) => {
        if (response.data.Search) {
          console.log(response.data.Search);
          setMovies(response.data.Search)
        }
      }).catch((error) => console.log(error))
  }, [searchValue]);

 
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
          <Routes>            
            <Route path='/' element={
             <MovieItem movies={movies}/>
            } />
            <Route path="/MovieList" element={<MovieList/>} />
            <Route path="/DetailMovie/:Title" element={<DetailMovie />} />            
            <Route path="*" element={<Error/>} />
          </Routes>

        </div>
      </div>


    </>
  )
}
