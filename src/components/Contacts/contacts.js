import React from 'react';
import './contacts.css'

const Contacts = () => {
    return (
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please feel free to contact me at the form below:</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src="" alt="Github" className='link' />
                    <img src="" alt="LinkedIn" className='link' />
                    <img src="" alt="DevPost" className='link' />
                </div>
            </form>
        </div>
    )
}

export default Contacts;