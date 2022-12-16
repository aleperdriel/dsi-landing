import { useState, useEffect } from 'react';
import imgCarouselFirst from '../assets/img/home/Activities.jpg'
// import imgCarouselSecond from '../assets/img/'
// import imgCarouselThird from '../assets/img/'

function LineCarousel() {
    const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // create a interval and get the id
    const myInterval = setInterval(() => {
        setActiveTab((prevTab) => prevTab < 2 ? prevTab +1 : 0);
    }, 5000);
    // clear out the interval using it id when unmounting the component
    return () => clearInterval(myInterval);
  }, []);

    return(
        <div className="line-carousel-block">
            <ul>
                <li className={(activeTab === 0) ? 'active-tab' : ''}>Memorable activities</li>
                <li className={(activeTab === 1) ? 'active-tab' : ''}>A path from a point lorem lorem</li>
                <li className={(activeTab === 2) ? 'active-tab' : ''}>I believe I can fly, I believe I can touch the sky</li>
            </ul>
            <div className={(activeTab === 0) ? "line-carousel-content" : "inactive-tab"}>
                <img src={imgCarouselFirst} alt="illustration"></img>
                <div className="line-carousel-text">
                    <h3>Participate in amazing and memorable activities</h3>
                    <p>Help trisomics reach higher steps in their life by guiding them and letting them try breathtaking activities. This is a unique experience and will surely give both parties an unforgettable experience.</p>
                </div>
            </div>
            <div className={(activeTab === 1) ? "line-carousel-content" : "inactive-tab"}>
                <img src={imgCarouselFirst} alt="illustration"></img>
                <div className="line-carousel-text">
                    <h3>Participate in amazing and memorable activities 2</h3>
                    <p>Help trisomics reach higher steps in their life by guiding them and letting them try breathtaking activities. This is a unique experience and will surely give both parties an unforgettable experience.</p>
                </div>
            </div>
            <div className={(activeTab === 2) ? "line-carousel-content" : "inactive-tab"}>
                <img src={imgCarouselFirst} alt="illustration"></img>
                <div className="line-carousel-text">
                    <h3>Participate in amazing and memorable activities 3</h3>
                    <p>Help trisomics reach higher steps in their life by guiding them and letting them try breathtaking activities. This is a unique experience and will surely give both parties an unforgettable experience.</p>
                </div>
            </div>
               
        </div>
    )
}

export default LineCarousel;
