import React from 'react'
import Mentalhealth from '../../src/assets/mentalHealth.png'
import Faqs from '../../src/assets/Faqs.png'
import newsLetter from '../../src/assets/newsLetter.png'
import AgeCalProject from '../../src/assets/AgeCal.png'
import estatePic from '../../src/assets/estate.png'
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
                <img src={Faqs} alt=""/>
                <div className="portfolio-layer">
                    <h4>Frequently Asked Questions (FAQS)</h4>
                    <p>This is a  FAQ page that provides quick answers to common customer questions, improving user experience and reducing the need for direct support.</p>
                    <a href="https://massive12356.github.io/Frontend-Challenge/faq-accordion-main/index.html" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
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
