import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>
                What I Do
            </span>
            <span className="skillDesc">As a CS student, I am interested in utilizing a variety of different technologies and languages to tackle difficult problems, such as the water cleanliness crisis, customer onboarding for INRIX, and working with AWS and postgreSQL to format data. I am constantly trying to learn new things, and I love to be challenged and overcome obstacles.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt="UIDesign" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>At INRIX, I worked closely with UX and UI designers to implement new customer-onboarding functionality to the INRIX IQ website. This required learning what makes good UX, and how to properly code good UI.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>I have experience with React (which this website is built with!), VueJS, and NodeJS. These tools have helped me build several websites for Hhckathons, internships, and some personal projects.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Backend and Data Management</h2>
                        <p>I am familiar with AWS services such as Lambda, postgreSQL, and C++. I am also NVIDIA Deep Learning certified! (Credentials are on my LinkedIn.)</p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Skills;