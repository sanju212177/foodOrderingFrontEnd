import React from 'react';
import "./Index.css"
import { Button } from 'react-bootstrap';
function Header() {
    return (
        <div className='index'>
            <div id='main'>
                <div className='header-heading'>
                    <h1>ONLINE</h1>
                    <h1><span> FOOD </span>ORDERING</h1>
                    <p className='details'>Want a delicious meal, but no time we will deliver it hot and yummy.</p>
                    <div className='header-btns'>
                        <a href='/users' className='header-btn' style={{ marginLeft: '8%' }}><h6>ORDER NOW</h6></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
