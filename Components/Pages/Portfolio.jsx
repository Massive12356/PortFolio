import React from 'react'
import Mentalhealth from '../../src/assets/mentalHealth.png'
import estatePic from '../../src/assets/estate.png'
import  pic1 from '../../src/assets/construction pic.png';
import  Logo from '../../src/assets/external-link-svgrepo-com.svg';

const Portfolio = () => {
  return (
    <div className='PortfolioWrapp-Div'>
      <h2 className="heading"> Latest <span>Projects</span></h2>
      <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={estatePic} alt=""/>
                <div className="portfolio-layer">
                    <h4>REAL ESTATE WEBSITE</h4>
                    <p>Responsive Real Estate Website developed with REACT and TAILWIND CSS.</p>
                    <a href="https://estateproject-navy.vercel.app/" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={Mentalhealth} alt=""/>
                <div className="portfolio-layer">
                    <h4>MENTAL HEALTH WEBSITE</h4>
                    <p>A responsive platform dedicated to promoting mental health and well-being.Accessible on any device.</p>
                    <a href="https://mental-health-theta-dun.vercel.app/" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={pic1} alt=""/>
                <div className="portfolio-layer">
                    <h4>CONSTRUCTION WEBSITE</h4>
                    <p>A user-friendly construction website highlighting services, past projects, and client testimonials to build trust and engagement.</p>
                    <a href="https://construction-app-nine.vercel.app/" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
