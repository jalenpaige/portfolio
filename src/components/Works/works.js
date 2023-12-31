import React from 'react';
import "./works.css"
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>Here of some of the projects I am most proud of! Through them, I have learned a lot about how to code effectivley, both alone and in team situations.</span>
            <div className='worksImgs'>
                <a href="https://devpost.com/software/project-safe-water" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio1} alt="" className='worksImg' />
                </a>
                <a href="https://devpost.com/software/transportation-optimized-task-list" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio2} alt="" className='worksImg' />
                </a>
                <a href="https://devpost.com/software/team-dalan" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio3} alt="" className='worksImg' />
                </a>
            </div>
            <button className="worksBtn"> See More </button>
        </section>
    )
}

export default Works;