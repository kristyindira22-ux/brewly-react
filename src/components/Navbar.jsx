import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <Link to="/" className="brand-logo">
        BREWLY
      </Link>

      <nav className="main-nav">
        <Link to="/" className="active">
          Home
        </Link>

        <a href="#signature">Menu</a>
        <a href="#clients">Rewards</a>
        <a href="#contact">About</a>
      </nav>

      <Link to="/login" className="profile-icon" aria-label="Profile">
        <i className="bi bi-person-circle"></i>
      </Link>
    </header>
  );
}

export default Navbar;