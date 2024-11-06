import React, { useEffect, useState }from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import myResume from '../../src/assets/MintahCV.pdf';
import myHomePic from '../../src/assets/eddy (3).jpeg'

const Home = () => {

  const [text, setText] = useState(''); // State to hold the current text
  const texts = ["FrontEnd Developer", "System Administrator"]; // Texts to cycle through

  useEffect(() => {
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let typingSpeed = 150; // Adjust the speed of typing effect (lower number = faster)

    const type = () => {
      if (count === texts.length) {
        count = 0; // Reset count if all texts are displayed
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      setText(letter); // Update state with current letter
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(type, typingSpeed); // Call the type function again after a delay
    };

    type(); // Start typing effect

    // Cleanup function to stop the typing effect if the component unmounts
    return () => {
      clearTimeout(); // Clear the timeout if necessary (could be more complex in a real case)
    };
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className='HomeWrapper-div'>
            <div className="home1-div">
            <h3>Hi, Welcome to My World</h3>
            <h1>Edward Mintah Jr.</h1>
            <h3>And I'm a <span className="multiple-text" >{text}</span></h3>
            <p>I am a skilled and enthusiastic computer programmer with extensive experience in frontend development. My expertise lies in designing visually captivating, ultra-responsive, and intuitive web applications that are user-friendly. I pay meticulous attention to detail while ensuring quality standards remain uncompromised; my ultimate goal is to surpass the end-users' expectations by delivering unmatched digital experiences.</p>
            <div className="logoCv-wrappDiv">
              <div className="social-media-icons">
              <a href="https://www.facebook.com/edward.mintah.10" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/edward-mintah-1bb747322/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/mintahjr._edward" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://github.com/Massive12356" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>

              </div>
              <div className="CvDiv">
              <a href={myResume} target="_blank" className="btn">Download CV</a>
              </div>
            </div>
            </div>
            <div className="home2-div">
              <img src={myHomePic} alt="Eddy Mintah Jr." className='pic1'/>
            </div>
      
    </div>
  )
}

export default Home
