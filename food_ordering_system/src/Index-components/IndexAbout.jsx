import React from 'react';
import aboutimage from '../images/aboutus.jpg';
import "./Index.css"
function About() {
    return (
        <div className='index'>
            <div id='about'>
                <div className='about-image'>
                    <img src={aboutimage} alt='' />
                </div>
                <div className='about-text'>
                    <h1>LEARN MORE ABOUT US</h1>
                    <p>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.” </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    )
}
export default About;



