import MovieList from "./MovieList";
const Favorites=({favorites,handleFavorites,isLoading,fetchError})=>{
    return(
        <main className="Favorites">
            {isLoading?(<b><p className="loading-page">Loading Favorite Movies...</p></b>):
            fetchError?(<p className="fetching-error">{fetchError}</p>):
            favorites.length?
                (<MovieList movies={favorites}
                    favorites={favorites}
                            handleFavorites={handleFavorites}
                            showPagination={false}/>):(<p className="loading-page">
                                <b>Favorites Not Found</b></p>
                            )
            }
            
        </main>
    )
}

export default Favorites;