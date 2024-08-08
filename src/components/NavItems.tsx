
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function NavItems() {

    return (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Nav.Link as={Link} to="/about" className="nav-link" id="About">About</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link as={Link} to="/resume" className="nav-link" id="Resume">Resume</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link as={Link} to="/projects" className="nav-link" id="Projects">Projects</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link as={Link} to="/skills" className="nav-link" id="Skills">Skills</Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link as={Link} to="/contact" className="nav-link" id="Contact">Contact</Nav.Link>
                </li>
        </ul>
    );
}
