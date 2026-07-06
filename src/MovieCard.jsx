import { Link } from "react-router-dom"
import { FaRegHeart, FaHeart } from "react-icons/fa";
const MovieCard = ({ key, movie, handleFavorites, favorites }) => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    return (
        <main>
            <article className="MovieCard">
                <div className="fav-btn-div">
                    <button className="fav-btn" onClick={() => handleFavorites(movie)}>{isFavorite ? <FaHeart color="red"></FaHeart> :
                        <FaRegHeart color="gray"></FaRegHeart>}</button>
                    <br></br>
                </div>
                <Link to={`/moviepage/${movie.imdbID}`} id="movieCardId">
                    <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"} alt={movie.Title} style={{ height: "300px", margin: "10px" }}
                        onError={(e) => {
                            e.target.src = "/no-poster.png";
                        }}>
                    </img>
                    <div id="movieCardId2" className="movie-info">
                        <h2 >Title:{movie.Title}</h2>
                        <p>Year:{movie.Year}</p>

                    </div>
                </Link>

            </article>
        </main>
    )
}

export default MovieCard;