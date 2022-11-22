import React from 'react';
import { Link} from "react-router-dom"
import Service1 from "../images/service1.png"
import Service2 from "../images/service2.png"
import Service3 from "../images/service3.png"
import '../css/servicesbox.css'

const servicesdata = [
    {
        serviceImage: Service1,
        servicetitle: "design & building",
        servicetext: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
        serviceurl: "/projects",
    },
    {
        serviceImage: Service2,
        servicetitle: "construction renovation",
        servicetext: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc ",
        serviceurl: "/projects",
    },
    {
        serviceImage: Service3,
        servicetitle: "finishing interiors",
        servicetext: "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc",
        serviceurl: "/projects",
    },
]

function ServiceBox(){
    return(
        <section className='services--box'>
            <div className='flex-container'>
                {servicesdata.map((item, index)=>(
                    <div className='wrap--box bg-image' style={{ backgroundImage: `url(${item.serviceImage})` }} key={index}>
                        <Link to={item.serviceurl}>
                            <h3>{item.servicetitle}</h3>
                            <p>{item.servicetext}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServiceBox;