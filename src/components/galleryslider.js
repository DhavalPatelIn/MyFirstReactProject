import React from 'react';
import "slick-carousel/slick/slick.css";

import HeroBanner from '../images/gallery1.jpg'; 
import HeroBanner2 from '../images/gallery2.jpg'; 

import Slider from "react-slick";

const featureData = [
    { SliderImage: HeroBanner },
    { SliderImage: HeroBanner2 },
]

function GallerySlider (SliderImage) {

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
    }
    return(
        <div>
            <div className='gallery-slider'>
                <Slider {...sliderSettings}>
                    {featureData.map((item, index) =>(
                        <div key={item}>
                            <div className='hero-banner-image' style={{ backgroundImage: `url(${item.SliderImage})` }} key={index} ></div>
                        </div>
                    ))}             
                </Slider>
            </div>
        </div>
    );
}
export default GallerySlider;