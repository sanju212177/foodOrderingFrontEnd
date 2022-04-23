import React from 'react';
import Featurebox from './IndexFeaturebox';
import image1 from '../images/nothindian.jpg';
import image2 from '../images/southindian.jpg';
import image3 from '../images/chinese.jpg';
import image4 from '../images/sea.jpg';
import "./Index.css"
function Feature() {
    return (
        <div className='index'>
            <div id='features'>
                <h1>FEATURES</h1>
                <div className='a-container'>
                    <Featurebox image={image1} title="North Indian" />
                    <Featurebox image={image2} title="South Indian" />
                    <Featurebox image={image3} title="Chinese" />
                    <Featurebox image={image4} title="Sea" />
                </div>
            </div>
        </div>


    )
}
export default Feature;