import { useState, useEffect } from 'react';
import imgCarouselFirst from '../assets/img/home/Activities.jpg'
import imgCarouselSecond from '../assets/img/home/help.jpg'
import imgCarouselThird from '../assets/img/home/networking.jpg'

function LineCarousel() {
    const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
        setActiveTab((prevTab) => prevTab < 2 ? prevTab +1 : 0);
    }, 5000);
    return () => clearInterval(myInterval);
  }, []);

    return(
        <div className="line-carousel-block">
            <ul>
                <li className={(activeTab === 0) ? 'active-tab' : ''}>Memorable activities</li>
                <li className={(activeTab === 1) ? 'active-tab' : ''}>Lend your skills</li>
                <li className={(activeTab === 2) ? 'active-tab' : ''}>DSI project support</li>
            </ul>
            <div className={(activeTab === 0) ? "line-carousel-content" : "inactive-tab"}>
                <img src={imgCarouselFirst} alt="illustration"></img>
                <div className="line-carousel-text">
                    <h3>Participate in amazing and memorable activities</h3>
                    <p>Help trisomics reach higher steps in their life by guiding them and letting them try breathtaking activities. This is a unique experience and will surely give both parties an unforgettable experience.</p>
                </div>
            </div>
            <div className={(activeTab === 1) ? "line-carousel-content" : "inactive-tab"}>
                <img src={imgCarouselSecond} alt="illustration"></img>
                <div className="line-carousel-text">
                    <h3>Lend DSI your professional or technical skills</h3>
                    <p>If you have specific professional or technical skills you feel can add value to our operational activities, on a voluntary or pro bono basis, we would be delighted to talk to you.</p>
                </div>
            </div>
            <div className={(activeTab === 2) ? "line-carousel-content" : "inactive-tab"}>
                <img src={imgCarouselThird} alt="illustration"></img>
                <div className="line-carousel-text">
                    <h3>DSI project support</h3>
                    <p>We have a growing list of country based projects, working with our national members in various areas supporting people with Down syndrome and their families and advocates. We would be very happy to speak to you if you are based locally or have links to any of these countries and can offer your help.</p>
                </div>
            </div>
               
        </div>
    )
}

export default LineCarousel;
