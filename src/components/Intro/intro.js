import React from 'react';
import './intro.css';
import bg from '../../assets/me.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className='introText'>I'm <span className='introName'>Jalen Paige</span> <br />A Future Developer</span>
                <p className='introPara'>
                    I am a CS major at Santa Clara University passionate about <br /> ML, UI/UX and much more!
                </p>
                <Link>
                    <button className='btn'>
                        <img src={btnImg} alt="" className='btnImg' />
                        Check out some of my projects and hobbies!
                    </button>
                </Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro;