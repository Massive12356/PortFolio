import React from 'react'
import Mentalhealth from '../../src/assets/mentalHealth.png'
import newsLetter from '../../src/assets/newsLetter.png'
import AgeCalProject from '../../src/assets/AgeCal.png'
import estatePic from '../../src/assets/estate.png'
import  pic1 from '../../src/assets/construction pic.png';

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
            <div className="portfolio-box">
                <img src={newsLetter} alt=""/>
                <div className="portfolio-layer">
                    <h4>NEWS LETTER SIGNUP PAGE</h4>
                    <p>This  newsletter sign-up page is a web page designed to collect user email addresses for subscribing to regular updates, promotions, or content</p>
                    <a href="https://massive12356.github.io/Frontend-Challenge/newsletter-sign-up-with-success-message-main/" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={AgeCalProject} alt=""/>
                <div className="portfolio-layer">
                    <h4>AGE CALCULATOR</h4>
                    <p>This age calculator determines a person's age based on their birthdate by calculating the difference between the current date and the provided birthdate.</p>
                    <a href="https://massive12356.github.io/Frontend-Challenge/age-calculator-app-main/" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
