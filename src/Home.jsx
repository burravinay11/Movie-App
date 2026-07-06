import MovieList from './MovieList.jsx'
import useAxiosFetch from './hooks/useAxiosFetch.jsx';
const Home = ({ movies, isLoading, fetchError, handleFavorites, favorites, page, setPage, totalPages }) => {
    return (
        <main className="Home">
            {
                isLoading ? (<b><p className='loading-page'>Loading Movies...</p></b>
                ) : fetchError ? (<p className="fetching-error">{fetchError}</p>
                ) : movies.length ? (
                    <MovieList movies={movies} handleFavorites={handleFavorites} favorites={favorites} page={page} setPage={setPage} totalPages={totalPages} showPagination={true} />
                )
                    : (<b><p className='loading-page'>Please Search for the Movies!</p></b>)
            }

        </main>
    )
}

export default Home;