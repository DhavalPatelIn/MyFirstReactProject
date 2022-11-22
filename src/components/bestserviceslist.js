import React from "react";
import Icon1 from '../images/icon1.png';

function ServicesList({ServicesIcon, ServiceTitle, ServiceContent}) {
    return(
        <div className='services-wrapper'>
            <div className='iconwrap'>
                <img src={ServicesIcon} alt='icon' />
            </div>
            <div className='service-content'>
                <h4>{ServiceTitle}</h4>
                <p>{ServiceContent}</p>
            </div>
        </div>
    );
}

export default ServicesList;