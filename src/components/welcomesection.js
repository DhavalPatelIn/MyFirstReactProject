import React from 'react';
import { Link } from 'react-router-dom';
import '../css/welcome.css'

function Welcome({Subtitle, Title, WelcomeText, ButtonLink, ButtonText}){
    return(
        <section className='welcome--section'>
            <div className='container'>
                <div className='flex-container'>
                    <div className='left-title-text'>
                        <h3>{Subtitle}</h3>
                        <h1>{Title}</h1>
                    </div>
                    <div className='right-text'>
                        <p>{WelcomeText}</p>
                        <div className='ctm-button'>
                            <Link to={ButtonLink}>{ButtonText}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome;