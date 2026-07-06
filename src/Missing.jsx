import { Link } from "react-router-dom";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
const Missing = () => {
    return (
        <main className="Missing">
            <p>Movies Not Found</p>
            <p><Link to="/" className="MissingLink"><FaHandPointRight />Go to HomePage<FaHandPointLeft /></Link></p>
        </main>
    )
}

export default Missing;