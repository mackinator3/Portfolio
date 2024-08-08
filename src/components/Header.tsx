
import NavItems from './NavItems';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
          <div className="container-fluid">
                <Nav.Link as={Link} to="/about" className="navbar-brand brand-name" id="Home">Justin Mack</Nav.Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavItems />
            </div>
          </div>
        </nav>
    );
}
export default Header;