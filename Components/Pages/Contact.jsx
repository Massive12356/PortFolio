import React from 'react'
import GmailIcon from '../../src/assets/gmail-svgrepo-com.svg'
import whatsappIcon from '../../src/assets/whatsapp-color-svgrepo-com.svg'
import telegramIcon from '../../src/assets/telegram-svgrepo-com.svg'
import messengerIcon from '../../src/assets/messenger.svg'

const Contact = () => {
  return (
    <div className='ContactWrapp-Div'>
      <h2 className="heading"> Start a <span>Conversation</span></h2>
      <div className="formDiv">
        <form action="#" id="contactForm"/>
            <div className="input-box">
                <input type="text" placeholder="Full Name" id="name" />
                <input type="text" placeholder="Email Address" id="email"/>
            </div>
            <div className="input-box">
                <input type="number" placeholder="Mobile Number" id="phone"/>
                <input type="text" placeholder="Email Subject" id="subject"/>
            </div>
            <textarea name="" id="message" cols="30" rows="11" placeholder="Your Message"></textarea>
        <form/>
        </div>
        <div className='btn-div'>
        <input type="submit" value="Send Message" className="Btn" />
        </div>
        <div className="contactInfoDiv">
        <a href="mailto:massive469@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <img src={GmailIcon} alt="Email" />
      </a>

      <a href="https://wa.me/message/FQ4LSHKK4UG3P1" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp"  className="WhatsApp"/>
      </a>

      <a href="https://t.me/massiveSalvation" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
        <img src={telegramIcon} alt="Telegram" />
      </a>

      <a href="https://m.me/edward.mintah.10?hash=AbZpuulpuGLY1neD&source=qr_link_share" aria-label="Messenger" target="_blank" rel="noopener noreferrer">
        <img src={messengerIcon} alt="Messenger"/>
      </a>

        </div>
        <div className="footerDiv">
        <p>Copyright &copy; 2024 by <a href="https://www.linkedin.com/in/edward-mintah-1bb747322/
" target='_blank'>Edward Mintah Jr.</a> | All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Contact
