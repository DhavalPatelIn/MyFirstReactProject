import React from "react";
import '../css/testimonial.css';

function Testimonial({TestimonialContent, AuthorImage, AuthorName, AuthorData}){
    return(
        <div className="content--wrap">
            <p>{TestimonialContent}</p>
            <div className="author-image bg-image"  style={{ backgroundImage: `url(${AuthorImage})` }}></div>
            <h4>{AuthorName}</h4>
            <h6>{AuthorData}</h6>
        </div>
    );
}
export default Testimonial;