import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub }
    from '@fortawesome/free-brands-svg-icons';
import logo from './images/logo.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
            <div className="row">
                <div className="col-4">
                    <p>Justin Mack</p>
                </div>
                <img src={logo} className="col-4" />
                <div className="col text-md-right">
                    <ul className="social-icons list-unstyled">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/justin-mack-58406712b/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href=
                                "https://github.com/mackinator3/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </footer> 
    )
}