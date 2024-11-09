import React from 'react'
import {FaServer,FaCode} from 'react-icons/fa'

const Services = () => {
  return (
    <div className='servicesWrapper-div'>
      <h2 className="heading">Professional <span>Services</span></h2>
        <div className="services-container">
            <div className="services-box">
                <div className="Icons">
                  <FaCode className='icon'/>
                </div>
                <h3>Web Development</h3>
                <p>As a proficient web developer, I specialize in building modern, responsive websites and applications using technologies such as HTML, CSS, JavaScript, and React.js. My approach focuses on delivering user-friendly interfaces that enhance the overall experience for visitors. I am committed to creating visually appealing designs that function seamlessly across all devices, ensuring optimal performance and accessibility. Whether you need a basic website or a complex single-page application (SPA), I apply best practices to deliver solutions that meet your unique needs and business goals.</p>
            </div>
            <div className="services-box">
            <div className="Icons">
                  <FaServer className='icon' />
                </div>
                <h3>System Administration</h3>
                <p> I am an experienced system administrator with a strong background in server management. I offer comprehensive services that encompass server setup, configuration, and ongoing maintenance, ensuring that your website and applications operate smoothly and securely. My knowledge of Linux-based environments and networking enables me to effectively troubleshoot and resolve server-related issues, maintaining high levels of performance and uptime for your applications.</p>
            </div>
        </div>
    </div>
  )
}

export default Services
