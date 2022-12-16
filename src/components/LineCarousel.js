import imgCarouselFirst from '../assets/img/home/Activities.jpg'
// import imgCarouselSecond from '../assets/img/'
// import imgCarouselThird from '../assets/img/'

function LineCarousel() {
    return(
        <div className="line-carousel-block">
            <ul>
                <li className="carousel-dot active">Memorable activities</li>
                <li className="carousel-dot">A path from a point lorem lorem</li>
                <li className="carousel-dot">I believe I can fly, I believe I can touch the sky</li>
            </ul>
            <div className="line-carousel-content">
                <img src={imgCarouselFirst} alt="illustration"></img>
                <div className="line-carousel-text">
                    <h3>Participate in amazing and memorable activities</h3>
                    <p>Help trisomics reach higher steps in their life by guiding them and letting them try breathtaking activities. This is a unique experience and will surely give both parties an unforgettable experience.</p>
                </div>
            </div>
        </div>
    )
}

export default LineCarousel;
