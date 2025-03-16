import PropTypes from 'prop-types';

const Navbar = ({setCategory, category}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" onClick={() => setCategory("general")}><span className="badge bg-primary-subtle text-primary-emphasis fs-4">NewsLand</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${category==="technology" ? "active" : ""}`} onClick={() => setCategory("technology")}>Technology</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${category==="business" ? "active" : ""}`} onClick={() => setCategory("business")}>Business</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${category==="health" ? "active" : ""}`} onClick={() => setCategory("health")}>Health</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${category==="sports" ? "active" : ""}`} onClick={() => setCategory("sports")}>Sports</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={`nav-link ${category==="entertainment" ? "active" : ""}`} onClick={() => setCategory("entertainment")}>Entertainment</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    setCategory: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
}

export default Navbar