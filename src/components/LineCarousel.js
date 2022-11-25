// import imgCarouselFirst from '../assets/img/'
// import imgCarouselSecond from '../assets/img/'
// import imgCarouselThird from '../assets/img/'

function LineCarousel() {
    return(
        <div className="line-carousel-block">
            <ul>
                <li className="carousel-dot">It could be talking about anything</li>
                <li className="carousel-dot">A path from a point lorem lorem</li>
                <li className="carousel-dot">I believe I can fly, I believe I can touch the sky</li>
            </ul>
            <section>
                {/* <img src={imgCarouselFirst} alt=""></img> */}
                <div className="carouselText">
                    <h3>Participate in amazing and memorable activities</h3>
                    <p>Help trisomics reach higher steps in their life by guiding them and letting them try breathtaking activities. This is a unique experience and will surely give both parties an unforgettable experience.</p>
                </div>
            </section>
        </div>
    )
}

export default LineCarousel;
