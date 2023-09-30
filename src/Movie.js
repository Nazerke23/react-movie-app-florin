import { IMAGE_API } from "./App";

function Movie({ title, poster_path, overview, vote_average }) {
  if (
    title == null ||
    poster_path == null ||
    overview == null ||
    vote_average == null
  ) {
    return;
  }

  function setVoteClass(vote) {
    if (vote >= 8) return "green";
    if (vote >= 6) return "orange";
    else return "red";
  }

  return (
    <div className="movie">
      <img src={IMAGE_API + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
