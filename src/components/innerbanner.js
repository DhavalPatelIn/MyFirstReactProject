import React from "react";
import '../css/innerbanner.css';

function AboutPage ({PageTitle}) {
    return(
        <section className="inner--banner">
            <div className="container">
                <h1>{PageTitle}</h1>
            </div>
        </section>
    );
}
export default AboutPage;