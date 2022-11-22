import React from 'react';
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';

import HeroBanner from '../images/hero-banner.png'; 
import HeroBanner2 from '../images/hero-banner2.webp'; 

import Slider from "react-slick";

import '../css/home-slider.css';

const featureData = [
    {
        SliderImage: HeroBanner,
        SubTitle: "We are builders",
        Title: "We will build your dream",
        SliderContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        ButtonText: 'View Project',
        SliderButton: '/projects',
    },
    {
        SliderImage: HeroBanner2,
        SubTitle: "We Make",
        Title: "Your dream",
        SliderContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
        ButtonText: 'Contact Us',
        SliderButton: '/contact',
    },
]

function HomeSlider (SliderImage, SubTitle, Title, SliderContent, SliderButton, ButtonText) {

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
    }
    return(
        <div>
            <div className='homepage-wrapper'>
                <Slider {...sliderSettings}>
                    {featureData.map((item, index) =>(
                        <div key={item}>
                            <div className='hero-banner-image' style={{ backgroundImage: `url(${item.SliderImage})` }} key={index} >
                                <div className='container'>
                                    <div className='content-wrap'>
                                    
                                        <h3>{item.SubTitle}</h3>        
                                        <h2>{item.Title}</h2>
                                        <p>{item.SliderContent} </p>
                                        <div className='ctm-button white-btn'>
                                            <Link to={item.SliderButton}>{item.ButtonText}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}             
                </Slider>
            </div>
        </div>
    );
}
export default HomeSlider;