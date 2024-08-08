
import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from './breadcrumbs';
import Header from './Header';
import Footer from './Footer';

export function Projects() {
    const breadcrumbsPaths =
        [
            { title: 'Home', to: '/' },
            { title: 'Projects', to: '/projects' }
        ]; 
    return (
        <>
            <Header />
            <Breadcrumbs paths={breadcrumbsPaths} />
            <section id="projects"
            className="container text-center">
            <h2 className="section-title">
                <FontAwesomeIcon icon={faCode}
                    className="mr-2" />
                Projects
            </h2>
            <div className="row">
                {/* Project 1 */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="https://mrrp.myfwc.com/bin-locations/">
                                    MRRP - FWC Website
                                </a>
                            </h5>
                            <p className="card-text">
                                Did most of the work transferring content and designing the frontend for the transfer into our Umbraco instance. Accessibilty and meeting the global FWC scheme was a general constraint for this.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="https://mackinator3.github.io/Forum2/#/">
                                    React API project
                                </a>
                            </h5>
                            <p className="card-text">
                                This was my first actual pet project. I mainly wanted to practice some react and interacting with API's. It does the function is was designed to, access some API and print out only relevant data. It's not "complete", per se, but has a special place in my heart. My code is located on my <a href="https://github.com/mackinator3/">Github</a>.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Project 3 */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">
                                Gopher Tortoise Day (waiting on release)
                            </h5>
                            <p className="card-text">
                                This is another one related to my job. We are moving away from wordpress and I worked with one of our senior devs to create a C# Microsoft Blazor replacement. Outside of setting up the inital dev ops, I did all the work in setting it up and creating it. The business unit seemed to like it!
                            </p>
                        </div>
                    </div>
                </div>
                {/* Project 4 */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">
                                Game Development
                            </h5>
                            <p className="card-text">
                                I am working on getting a game released on steam. Still in the pretty early stages, but I am excited. I've been a long time gamer. Though, here's a link to a C# <a href="https://github.com/mackinator3/GameOfLife">Conway's Game of Life</a> I made(with some tutorial help).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;
