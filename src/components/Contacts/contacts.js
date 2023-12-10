import React, { useRef } from 'react';
import './contacts.css'
import GitHubLogo from '../../assets/GitHubLogo.png';
import LinkedInLogo from '../../assets/linkedin-logo.png';
import DevPostLogo from '../../assets/devpost-logo.png';
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q57t6mi', 'template_xizlzk5', form.current, 'DQwvYMIg1GaNOvzO5')
            .then((result) => {
                e.target.reset();
                alert('Email Sent!');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact' className='contactPage'>
            <div className='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please feel free to contact me with the form below:</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://github.com/jalenpaige" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubLogo} alt="Github" className='link github' />
                        </a>
                        <a href="https://www.linkedin.com/in/jalen-paige/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInLogo} alt="LinkedIn" className='link linkedIn' />
                        </a>
                        <a href="https://devpost.com/jpaige304?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
                            <img src={DevPostLogo} alt="DevPost" className='link devPost' />
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contacts;