import React,  { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function DetailMovie() {
  const {Title} = useParams();
  useEffect(() => {
    console.log("infos", {Title})
 
  })
  return (
  <div>  
  <h1> Movie Title :  {Title} </h1>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/{Title}"
   title= {Title} ></iframe>
  </div>
  
  )
}

export default DetailMovie