const Footer = ({ movies }) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>🎬 Movie World</h3>
                <p>Search • Discover • Save your favorite movies</p>

                <p>
                    Powered by <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer">
                        OMDb API
                    </a>
                </p>

                <p>© 2026 Burra Vinay. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;