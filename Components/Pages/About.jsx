import React from 'react'
import aboutImage from '../../src/assets/eddy (5).jpeg'

const About = () => {
  return (
    <div className='aboutImageDiv-wrapp'>
      <div className="imageDiv">
        <img src={aboutImage} alt="" />
      </div>
      <div className="AboutContent-Div">
      <h2 className="heading">About <span>Me</span></h2>
            <p>I am a versatile web developer with a strong foundation in HTML, CSS, JavaScript, and React.js, specializing in building responsive, user-centered web applications. With a deep understanding of front-end technologies, I have developed the ability to craft modern and efficient user interfaces that not only enhance user experience but are also scalable across various devices. My passion for clean code and design standards drives my approach to every project, ensuring that each solution I build is visually appealing, functional, and efficient.

           In addition to my expertise in front-end development, I am also an experienced system administrator with comprehensive knowledge in server management and infrastructure optimization. My background in server maintenance, network administration, and troubleshooting allows me to take a holistic approach to web development, focusing on both the performance of the application and the reliability of the underlying infrastructure. This unique combination of skills positions me to effectively manage the technical aspects of web projects, ensuring they are secure, scalable, and performant.

           I continuously strive to expand my knowledge in emerging technologies, always seeking ways to improve both development processes and system efficiency. With a strong problem-solving mindset and the ability to manage complex systems, I am committed to delivering high-quality, innovative solutions that meet the needs of both users and businesses.</p>
      </div>
      
    </div>
  )
}

export default About;
