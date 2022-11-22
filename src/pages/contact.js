import React from 'react';
import InnerBanner from '../components/innerbanner';
import '../css/contactus.css'
function Contact () {
    return(
        <div>
            <InnerBanner PageTitle="Contact us" />
            <section  className='contact-form'>
            <div className='container'>
                <form>
                    <div className='flex-container'>
                        <div className='input-wrap half-width'>
                            <input type="text" placeholder='Name*' />
                        </div>
                        <div className='input-wrap half-width'>
                            <input type="email" placeholder='Email*' />
                        </div>
                        <div className='input-wrap full-width'>
                            <input type="tel" placeholder='Number*' />
                        </div>
                        <div className='textarea-wrap full-width'>
                            <textarea placeholder='Message'></textarea>
                        </div>
                        <div className='submit-btn full-width'>
                            <input type="submit" value='Send' />
                        </div>
                    </div>
                </form>
            </div>
            </section>
        </div>
    );
}
export default Contact;