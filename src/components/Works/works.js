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
            <span className='worksDesc'>Here of some of the projects I am most proud of! Through them, I have learned a lot about how to code effectivley, both alone and in team situations. Each image links to a devpost, live-hosted website, or github (with code linked when hovered or on devpost).</span>
            <div className='worksImgs'>
                <a className="wrapper" href="https://devpost.com/software/project-safe-water" target="_blank" rel="noopener noreferrer">
                <div class="image-container">
                        <img src={Portfolio1} alt=""/>
                        <div class="image-caption">
                            <h1>Project Safewater</h1>
                            <p>A finalist at SCU's 2023 Hack for Humanity, Project Safewater utilizes government water data to assess the quality of water in a given region, as well as locating safe drinking water.</p>
                        </div>
                    </div>
                </a>
                <a className="wrapper" href="https://devpost.com/software/transportation-optimized-task-list" target="_blank" rel="noopener noreferrer">
                <div class="image-container">
                        <img src={Portfolio2} alt=""/>
                        <div class="image-caption">
                            <h1>Trip Saver</h1>
                            <p>My first project! A website that utilizies INRIX's traffic data to find the optimal time to travel between two locations</p>
                        </div>
                    </div>
                </a>
                <a className="wrapper" href="https://devpost.com/software/team-dalan" target="_blank" rel="noopener noreferrer">
                <div class="image-container">
                        <img src={Portfolio3} alt=""/>
                        <div class="image-caption">
                            <h1>Air Quality Map</h1>
                            <p>Similar to Project Safewater, this project displays air-quality in a given region. I worked alongside two friends, teaching them the basics of Vue and website development.</p>
                        </div>
                    </div>
                </a>
                <a className="wrapper" href="https://bronco-swap.web.app/" target="_blank" rel="noopener noreferrer">
                    <div class="image-container">
                        <img src={Portfolio4} alt=""/>
                        <div class="image-caption">
                            <h1>Bronco Swap</h1>
                            <p>A marketplace for university students, designed with Vue3 and Firebase for SCU's 2024 Hack for Humanity. Codebase at: </p>
                            <a className='gh-link' href='https://github.com/calvinwlim/Bronco-Swap/tree/main/Bronco-Swap'>https://github.com/calvinwlim/Bronco-Swap/tree/main/Bronco-Swap</a>
                        </div>
                    </div>
                </a>
            </div>
            <button className="worksBtn"> See More </button>
        </section>
    )
}

export default Works;