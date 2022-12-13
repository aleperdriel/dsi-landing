import Header from '../components/Header';
import WaveImg from '../assets/img/wave.png';

import HeroBlock from '../components/HeroBlock';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About() {    
    return(
        <>
            <Header/>
            <div id="about-block" className="hero-block">
                <h2>About Us</h2>
            </div>
            {/* ABOUT SECTION */}

            <section className="about-section">
                <div className='section-constraint'>
                    <h3>Who we are</h3>
                    <p className='description'>We are a UK based international disabled people's organisation, comprising a membership of individuals and organisations from all over the world, committed to improving quality of life for people with Down syndrome, promoting their right to be included on a full and equal basis with others.</p>
                    <div className="image-triple-container">
                        <div className="image-triple image-triple-1">
                            <div className="image-triple-description">
                                <Link to="/" className="image-triple-description">
                                    <p>What we stand for</p>
                                </Link>
                            </div>
                        </div>
                        <div className="image-triple image-triple-2">
                            <Link to="/" className="image-triple-description">
                                <p>Our approach</p>
                            </Link>

                        </div>
                        <div className="image-triple image-triple-3">
                            <div className="image-triple-description">
                                <Link to="/" className="image-triple-description">
                                    <p>Who we work with</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END OF ABOUT SECTION */}

            {/* IMPACT SECTION */}
            <div className='impact-block'>
                <img src={WaveImg}/>
                <div className="impact-block-text">
                    <div className='section-constraint'>
                        <h3>Our impact</h3>
                        <p className="description">The growth of our network and delivery of our objectives in cooperation with our national and world regional members, is having a positive impact on the lives of people with Down syndrome.</p>
                        <div className="image-triple-container">
                            <div className="image-triple image-triple-1">
                                <div className="image-triple-description">
                                    <Link to="/" className="image-triple-description">
                                        <p>What we stand for</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-triple image-triple-2">
                                <Link to="/" className="image-triple-description">
                                    <p>Our approach</p>
                                </Link>

                            </div>
                            <div className="image-triple image-triple-3">
                                <div className="image-triple-description">
                                    <Link to="/" className="image-triple-description">
                                        <p>Who we work with</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END OF IMPACT SECTION */}

            {/* HISTORy SECTION */}

            <section className="history-section">
                <div className='section-constraint'>
                    <h3>Our history</h3>
                    <p className='description'>We are a UK based international disabled people's organisation, comprising a membership of individuals and organisations from all over the world, committed to improving quality of life for people with Down syndrome, promoting their right to be included on a full and equal basis with others.</p>
                </div>
            </section>
            {/* END HISTORY SECTION */}

            {/* REPORTS SECTION */}

            <section className="reports-section">
                <div className='section-constraint'>
                    <h3>Annual Reports</h3>
                    <p className='description'>Each year we publish a comprehensive annual report, looking at our progress against our aims and objectives and including financial statements, with income and expenditure for the year. Our financial year runs from April-March.</p>
                    <div className="image-triple-container">
                        <div className="image-triple image-triple-1">
                            <div className="image-triple-description">
                                <Link to="/" className="image-triple-description">
                                    <p>What we stand for</p>
                                </Link>
                            </div>
                        </div>
                        <div className="image-triple image-triple-2">
                            <Link to="/" className="image-triple-description">
                                <p>Our approach</p>
                            </Link>

                        </div>
                        <div className="image-triple image-triple-3">
                            <div className="image-triple-description">
                                <Link to="/" className="image-triple-description">
                                    <p>Who we work with</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer/> */}

        </>
        
    )
}

export default About;