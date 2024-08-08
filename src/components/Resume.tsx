import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faFileDownload }
    from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from './Breadcrumbs';
import Skills from './Skills';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function Resume() {
    const [isActive] = useState(true);
    const breadcrumbsPaths =
        [
            { title: 'Home', to: '/' },
            { title: 'Reumse', to: '/resume' }
        ]; 
    return (
        <>
            <Header />
            <Breadcrumbs paths={breadcrumbsPaths} />
            <section id="resume"
            className="container text-center">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8">
                    <h2 className="section-title">
                        <FontAwesomeIcon icon={faFileDownload}
                            className="mr-2" />
                        Resume
                    </h2>
                    <p className="section-description">
                        Download my resume to learn more
                        about my professional experience and skills.
                    </p>
                    <a href="documents/Justin_Mack_Resume.pdf"
                        className="resume-download-btn" download>
                        Download Resume
                    </a>
                    {/* Include the Skills component here */}
                        <Skills isActive={isActive} />
                </div>
            </div>
            </section>
            <Footer />
        </>
    )
}
export default Resume;