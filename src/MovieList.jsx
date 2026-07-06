import MovieCard from "./MovieCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const MovieList = ({ movies, handleFavorites, favorites, page, setPage, totalPages, showPagination = true }) => {
    return (
        <>
            <section className="movie-list">
                {movies.map(movie => (
                    <MovieCard key={movie.imdbID}
                        movie={movie}
                        handleFavorites={handleFavorites}
                        favorites={favorites}
                    />

                ))}


            </section>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {showPagination &&
                    <div className="Pagination">
                        <button className="previous-btn" onClick={() => setPage(page - 1)}
                            disabled={page == 1}
                        ><FaArrowLeft />Previous</button>
                        <p>Page-{page}</p>
                        <button className="Next" onClick={() => setPage(page + 1)}
                            disabled={page == totalPages} style={{}}>Next<FaArrowRight /></button>

                    </div>
                }
            </div>
        </>
    )
}
export default MovieList;