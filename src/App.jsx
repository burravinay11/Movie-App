import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxiosFetch from './hooks/useAxiosFetch'
import Header from './Header.jsx';
import Nav from './Nav.jsx'
import Home from "./Home.jsx";
import Favorites from "./Favorites.jsx";
import MoviePage from "./MoviePage.jsx";
import Missing from "./Missing.jsx"
import Footer from "./Footer.jsx";
import MovieCard from "./MovieCard.jsx";
function App() {
  const [search, setSearch] = useState("Avengers");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [page, setPage] = useState(1)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { data, fetchError, isLoading } = useAxiosFetch(`?s=${debouncedSearch}&page=${page}&apikey=ff86fe7a`);
  const movies = data.Search || [];
  const suggestions = movies;
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const handleFavorites = (movie) => {
    const favItem = favorites.some((fav) =>
      fav.imdbID === movie.imdbID
    )

    if (favItem) {
      setFavorites(favorites.filter((fav) =>
        fav.imdbID !== movie.imdbID

      ))
    } else {
      setFavorites([...favorites, movie]);
    }
  }
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const totalPages = Math.ceil((data.totalResults / 10))
  console.log(totalPages)
  return (
    <>
      <Header />
      <Nav search={search} setSearch={setSearch} suggestions={suggestions} showSuggestions={showSuggestions} setShowSuggestions={setShowSuggestions} />
      <Routes>
        <Route path='/' element={<Home movies={movies}
          isLoading={isLoading}
          fetchError={fetchError}
          favorites={favorites}
          handleFavorites={handleFavorites}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />}></Route>
        <Route path='/moviepage/:imdbID' element={<MoviePage />}></Route>
        <Route path='/favorites' element={<Favorites favorites={favorites}
          handleFavorites={handleFavorites}
          isLoading={isLoading}
          fetchError={fetchError}
        />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      <Footer movies={movies} />
    </>
  )
}

export default App;
