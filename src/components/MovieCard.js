export default function MovieCard({movie}) {
  return (
  <>
    {movie.Poster ? (<img src={movie.Poster} alt={movie.Title} className="card-img-top"/> )
            : (<div className="filter-poster"></div>)}
    <div className="card-body">
      <h5 className="card-title">{movie.Title} </h5>
    </div>
    <div className="card-footer">
      <small className="text-muted">Year{movie.Year}</small>
    </div>
  </>

  )
}
