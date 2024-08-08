import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faUser }
    from '@fortawesome/free-solid-svg-icons';
import myFace from './images/myFace.jpg'
import Header from './Header';
import Footer from './Footer';

function About() {
    return (
        <>
            <Header />
            <section id="about" className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="section-title">
                        <FontAwesomeIcon icon={faUser}
                            className="mr-2" />
                        About Me
                    </h2>
                    <div className="profile-image-container">
                        <img src={myFace}
                            alt="Justin Mack circa 2015"
                            className="img-fluid rounded-circle profile-image"
                        />
                    </div>
                    <p className="section-description mt-4">
                        I have played with computers all my life. My only regret is that I did not head straight into IT from day one! I worked for the State of Florida primarily as a web dev. HTML/CSS/JS, with some sprinklings of C# for migrating wordpress sites to a custom Microsoft Blazor build. Of course, I my first class was C++, so I only do leetcode in C++.
                    </p>
                </div>
            </div>
            </section>
            <Footer />
        </>
    );
}
export default About;