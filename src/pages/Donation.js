import Header from '../components/Header';
import WaveImg from '../assets/img/wave.svg';
import Donation1Img from '../assets/img/don2.webp';
import Donation2Img from '../assets/img/don3.webp';
import DonationForm from '../components/DonationForm';

import HeroBlock from '../components/HeroBlock';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Donation() {    
    return(
        <>
            <Header/>
            <div id="donation-block" className="hero-block">
                <h2>Support Us</h2>
            </div>
            {/* Donation SECTION */}

            <section className="donation-section">
                <div className='section-constraint'>
                    <article>
                        <img src={Donation1Img} alt="child smiling"></img>
                        <div className="article-description">
                            <h3>Improve lives with your support</h3>
                            <p>We are a UK based international disabled people's organisation, comprising a membership of individuals and organisations from all over the world, committed to improving quality of life for people with Down syndrome, promoting their right to be included on a full and equal basis with others.</p>
                        </div>
                    </article>
                    <article>
                        <img src={Donation2Img} alt="child smiling"></img>
                        <div className='article-description'>
                            <h3>Your contribution</h3>
                            <p>We are a UK based international disabled people's organisation, comprising a membership of individuals and organisations from all over the world, committed to improving quality of life for people with Down syndrome, promoting their right to be included on a full and equal basis with others.</p>
                        </div>
                    </article>
                </div>
            </section>
            {/* END OF Donation SECTION */}

            {/* DONATION FORM SECTION */}
            <div className='donation-form-block wave-section'>
                <img src={WaveImg} alt="Wave"/>
                <DonationForm />
            </div>
            {/* END OF DONATION FORM SECTION */}

            <Footer/>

        </>
        
    )
}

export default Donation;
