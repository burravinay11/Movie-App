import { FaSearch, FaHeart, FaHome } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Nav = ({ search, setSearch, page, setPage, suggestions, showSuggestions, setShowSuggestions }) => {
    const navigate = useNavigate()
    return (
        <nav className="nav" >
            <form onSubmit={(e) => e.preventDefault(e)} className="searchForm">
                <input type="search"
                    placeholder="Search Movies"
                    value={search}
                    id="searchBar"
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }
                    }
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => {
                        setTimeout(() => setShowSuggestions(false), 200);
                    }}
                />
                <div className="suggestions">
                    {showSuggestions && search.length > 1 &&
                        suggestions.map((movie) => (
                            <div
                                key={movie.imdbID}
                                className="suggestion"
                                onMouseDown={() => {
                                    navigate(`/moviepage/${movie.imdbID}`);
                                    setShowSuggestions(false)
                                }}
                            >
                                {movie.Title}
                            </div>
                        ))}
                </div>
                <button
                    className="searchBtn"><FaSearch />
                </button>
            </form>
            <div className="routers">
                <div className="home-router">
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? "active-link" : "")} style={{ color: "white", textDecoration: "none" }}>Home</NavLink>
                </div>
                <div className="favorites-router">
                    <NavLink to={"/favorites"} className={({ isActive }) => (isActive ? "active-link" : "")} style={{ color: "white", textDecoration: "none" }}>Favorites</NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Nav;