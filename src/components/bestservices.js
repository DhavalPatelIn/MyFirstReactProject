import React from 'react';
import '../css/bestservices.css';
import BestServicesList from './bestserviceslist';

import Icon1 from '../images/icon1.png';
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';
import Icon4 from '../images/icon4.png';
import Icon5 from '../images/icon5.png';
import Icon6 from '../images/icon6.png';

const ServicesData = [
    {
        ServicesIcon: Icon1,
        ServiceTitle:"DESIGN & PLANNING",
        ServiceContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        ServicesIcon: Icon2,
        ServiceTitle:"BUILDING RENOVATION",
        ServiceContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        ServicesIcon: Icon3,
        ServiceTitle:"INTERIOR DESIGN",
        ServiceContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        ServicesIcon: Icon4,
        ServiceTitle:"CONSTRUCTION SERVICES",
        ServiceContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        ServicesIcon: Icon5,
        ServiceTitle:"DOCUMENTATION",
        ServiceContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        ServicesIcon: Icon6,
        ServiceTitle:"PROFESSIONAL SUPPORT",
        ServiceContent: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

function BestServices({BestServicesTitle}) {
    return(
        <section className='bestservices-section'>
            <div className='container'>
                <div className='services-title'>
                    <h2>{BestServicesTitle}</h2>
                </div>
                <div className='flex-container'>
                {ServicesData.map((item, index) =>(
                    <BestServicesList ServicesIcon={item.ServicesIcon} ServiceTitle={item.ServiceTitle} ServiceContent={item.ServiceContent} key={item.ServiceTitle + index} />
                ))}
                </div>
            </div>
        </section>
    );
}
export default BestServices;