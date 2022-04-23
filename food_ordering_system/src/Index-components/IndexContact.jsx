import React from "react";
import "./Index.css"
function Contact() {
    return (
        <div className='index'>
            <div id='contact'>
                <h1>CONTACT US</h1>
                <form>
                    <input type='text' placeholder='Full Nmae' required />
                    <input type='email' placeholder='Type Your Email' required />
                    <textarea placeholder='Write Here...........' name='message'></textarea>
                    <input type='submit' value='Send' />
                </form>
            </div>
        </div >
    )

}
export default Contact;