import React from 'react';
import {  Link   } from "react-router-dom";
import Header  from './components/Header';
import MovieList from './components/MovieList';


function App() {
  
  return (
    <div className='container'>
    <Header />
    <Link to={`/`} >Home</Link>      
    <MovieList/>
    
    </div>
  );
}

export default App;
