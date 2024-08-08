import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode }
    from '@fortawesome/free-solid-svg-icons';
import { faCogs }
    from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

interface Props {
    isActive?: boolean;
}
function Skills(props: Props) {
    const breadcrumbsPaths =
        [
            { title: 'Home', to: '/' },
            { title: 'Skills', to: '/skills' }
        ]; 
    return (
        <>
            {!props.isActive && <Header />}
            {!props.isActive && <Breadcrumbs paths={breadcrumbsPaths} />}
        <section id="skills"
                className={`container ${props.isActive ? "skills-container-alt" : "skills-container"}`}>
            <h2 className="section-title skills-title">
                <FontAwesomeIcon icon={faCogs}
                    className="mr-2" />
                Skills
            </h2>
            <ul className="skills-list">
                <li>
                    <FontAwesomeIcon icon={faCode}
                        className="mr-2" />
                    C#
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode}
                        className="mr-2" />
                    C++
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode}
                        className="mr-2" />
                    HTML
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode}
                        className="mr-2" />
                    CSS
                </li>
                <li>
                    <FontAwesomeIcon icon={faCode}
                        className="mr-2" />
                    JavaScript
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode}
                        className="mr-2" />
                    React
                </li>
                <li>
                    <FontAwesomeIcon icon={faLaptopCode}
                        className="mr-2" />
                    Bootstrap
                </li>
                {/* Add more skills as needed */}
            </ul>
            </section>
            {!props.isActive && <Footer />}
        </>
    );
}
export default Skills;