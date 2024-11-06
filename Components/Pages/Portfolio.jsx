import React from 'react'
import gbcProject from '../../src/assets/gbchr.png'
import homePageNews from '../../src/assets/newHomePage.png'
import Faqs from '../../src/assets/Faqs.png'
import newsLetter from '../../src/assets/newsLetter.png'
import AgeCalProject from '../../src/assets/AgeCal.png'
import CAR6 from '../../src/assets/car6.jpg'
import  Logo from '../../src/assets/external-link-svgrepo-com.svg';

const Portfolio = () => {
  return (
    <div className='PortfolioWrapp-Div'>
      <h2 className="heading"> Latest <span>Projects</span></h2>
      <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={gbcProject} alt=""/>
                <div className="portfolio-layer">
                    <h4>SPM SOFTWARE</h4>
                    <p>Staff Work Schedule and Perfomance Monitor System for Ghana Broadcasting Corporation(GBC).</p>
                    <a href="http://www.gbchr.local/" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={homePageNews} alt=""/>
                <div className="portfolio-layer">
                    <h4>NEWS BLOG</h4>
                    <p>THis  news homepage displays top stories and breaking news, offering quick access to various news categories and updates.</p>
                    <a href="https://massive12356.github.io/Frontend-Challenge/homePageNews/" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
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
            <div className="portfolio-box">
                <img src={CAR6} alt=""/>
                <div className="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="" target="_blank"><img src={Logo} alt="External Link" className="link" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
