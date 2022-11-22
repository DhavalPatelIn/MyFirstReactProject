import React from "react";
import '../css/style.css';
import '../css/portfolio.css';
import Image1 from '../images/service1.png';
import Image2 from '../images/service2.png';
import Image3 from '../images/service3.png';
import Image4 from '../images/hero-banner.png';
import Image5 from '../images/hero-banner2.webp';
import Image6 from '../images/service1.png';

let items=[
    { imagedata: Image1 },
    { imagedata: Image2 },
    { imagedata: Image3 },
    { imagedata: Image4 },
    { imagedata: Image5 },
    { imagedata: Image6 },
];


function Portfolio() {
    return (
        <section className="portfolio--section">
            <div className="container">
                <h2>Portfolio</h2>
            </div>
            <div className="flex-container">
                {items.map((item,index)=>{
                    return <div key={index} className="portfolio-image bg-image" style={{ backgroundImage: `url(${item.imagedata})` }}></div>
                })}
            </div>
            <ul>
                
            </ul>
        </section>
    );
}
export default Portfolio;