import React from 'react'

function Add() {
  return (
    <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Title Movie</label>
      <input type="email" class="form-control" id="exampleInputEmail1" 
      aria-describedby="emailHelp" placeholder="Enter title" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Type Movie</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Movie" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Year Movie</label>
      <input type="number" class="form-control" id="exampleInputPassword1" placeholder="YYYY" />
      
    </div>
    <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )
}

export default Add