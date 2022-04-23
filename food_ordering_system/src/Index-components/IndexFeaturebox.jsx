import React from 'react';
import "./Index.css"

function Featurebox(props) {
    return (
        <div className='index'>
            <div className='a-box'>
                <div class='a-b-img'>
                    <img src={props.image} alt='' />
                </div>
                <div className='a-b-text'>
                    <h2> {props.title} </h2>
                    <p>You can’t stop eating, so go!</p>
                </div>
            </div>
        </div>
    )
}
export default Featurebox;