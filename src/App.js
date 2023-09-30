import { useEffect, useState } from "react";
import Movie from "./Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

export const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(function () {
    getMovies(FEATURED_API);
  }, []);

  async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getMovies(`${SEARCH_API}${query}`);
    setQuery("");
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search..."
            className="search"
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
