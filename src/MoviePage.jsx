import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { useState } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
const MoviePage = () => {
    const { imdbID } = useParams();
    const { data, fetchError, isLoading } = useAxiosFetch(`?i=${imdbID}&apikey=ff86fe7a`);
    return (
        <main className="MoviePage" style={{ backgroundImage: `url(${data.Poster})` }}>
            {isLoading ? (<b><p className="loading-page">Loading Movie Details...</p></b>) :
                fetchError ? (<p className="fetching-error">{fetchError}</p>) :
                    data.Title ? (
                        <div className="overlay">
                            <div className="movie-details">
                                <h1>{data.Title}</h1>
                                <img src={data.Poster !== "N/A" ? data.Poster : "/no-poster.png"} alt={data.Title}
                                    onError={(e) => {
                                        e.target.src = "/no-poster.png";
                                    }}></img>
                                <div className="movie-details-text">
                                    <p>Year: {data.Year}</p>
                                    <p>Rated: {data.Rated}</p>
                                    <p>Released: {data.Released}</p>
                                    <p>Runtime: {data.Runtime}</p>
                                    <p>Genre: {data.Genre}</p>
                                    <p>Director: {data.Director}</p>
                                    <p>Writer: {data.Writer}</p>
                                    <p>Actors: {data.Actors}</p>
                                    <p>Plot:{data.Plot}</p>
                                    <p>Language: {data.Language}</p>
                                    <p>Country: {data.Country}</p>
                                    <p>Awards: {data.Awards}</p>
                                    <p>Metascore: {data.Metascore}</p>
                                    <p>imdbRating: {data.imdbRating}</p>
                                    <p>imdbVotes: {data.imdbVotes}</p>
                                    <p>imdbID: {data.imdbID}</p>
                                    <p>BoxOffice: {data.BoxOffice}</p>
                                </div>
                            </div>
                        </div>
                    ) : (<div className="Missing">
                        <p>Movie Not Found</p>
                        <p><Link to="/" className="MissingLink"><FaHandPointRight />Go to HomePage<FaHandPointLeft /></Link></p>
                    </div>
                    )

            }

        </main>

    )
}

export default MoviePage;