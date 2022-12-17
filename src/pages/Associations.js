import Header from '../components/Header';
import HeroBlock from '../components/HeroBlock';
import Footer from '../components/Footer';
import logo1 from '../assets/img/organizations/logo1.png'
import logo2 from '../assets/img/organizations/logo2.png'
import logo3 from '../assets/img/organizations/logo3.png'
import logo4 from '../assets/img/organizations/logo4.png'

function Associations() {    
    return(
        <>
            <Header/>
            <div id="asso-block">
                <HeroBlock>
                        <h2>Organizations</h2>
                </HeroBlock>
            </div>
            <div className='org-card-container'>
                <div className="org-card">
                    <img src={logo1} alt="logo" id="ida-logo"></img>
                    <p>We are an Alliance of 14 global and regional organisations of persons with disabilities. We advocate at the United Nations for a more inclusive global environment for everyone.</p>
                </div>
                <div className="org-card">
                    <img src={logo2} alt="logo"></img>
                    <p>Trisomy 21 Research Society (T21RS) is the first international non-profit scientific organization of researchers studying Down syndrome.</p>
                </div>
                <div className="org-card">
                    <img src={logo3} alt="logo"></img>
                    <p>The International Association for the Scientific Study of Intellectual and Developmental Disabilities (IASSIDD) is the first and only world-wide group dedicated to the scientific study of intellectual disability.</p>
                </div>
                <div className="org-card">
                    <img src={logo4} alt="logo"></img>
                    <p>In 2011, the National Institutes of Health (NIH) joined with governmental and private organizations interested in Down syndrome to form the Down Syndrome Consortium. </p>
                </div>
            </div>

        
            <Footer/>

        </>
        
    )
}

export default Associations;
