import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone }
    from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub }
    from '@fortawesome/free-brands-svg-icons'; 
import Breadcrumbs from './Breadcrumbs';
import Header from './Header';
import Footer from './Footer';
function Contact() {
    const breadcrumbsPaths =
        [
            { title: 'Home', to: '/' },
            { title: 'Contact', to: '/contact' }
        ]; 
    return (
        <>
            <Header />
            <Breadcrumbs paths={breadcrumbsPaths} />
            <section id="contact" className=" my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="section-title text-5xl font-bold text-emerald-500 text-center">Contact</h2>
            <p className="section-description">
                Feel free to reach out for
                collaboration or inquiries.
            </p>
            <ul className="contact-list list-unstyled">
                <li>
                    <FontAwesomeIcon icon={faEnvelope}
                        className="contact-icon" />
                    <a href="mailto:jam12v@my.fsu.edu">jam12v@my.fsu.edu</a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faLinkedin}
                        className="contact-icon" />
                    <a href="https://www.linkedin.com/in/justin-mack-58406712b/">LinkedIn</a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub}
                        className="contact-icon" />
                    <a href="https://github.com/mackinator3/">GitHub</a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone}
                        className="contact-icon" />
                    <a href="tel:8133268514">813-326-8514</a>
                </li>
            </ul>
            </section>
            <Footer />
        </>
    );
}
export default Contact;