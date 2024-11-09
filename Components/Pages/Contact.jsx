import React from 'react'
import GmailIcon from '../../src/assets/gmail-svgrepo-com.svg'
import whatsappIcon from '../../src/assets/whatsapp-color-svgrepo-com.svg'
import telegramIcon from '../../src/assets/telegram-svgrepo-com.svg'
import messengerIcon from '../../src/assets/messenger.svg'
import Swal from 'sweetalert2'

const Contact = () => {
  // Handle Form Submission

const onSubmit = async (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Collect form data from the form submission event
  const formData = new FormData(event.target);

  // Add API access key to form data
  formData.append("access_key", "41cae450-5e61-45a2-83a0-e10938d6c9fa");

  // Convert form data to a JSON object
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  // Send form data to the Web3Forms API endpoint
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  // Check if the form submission was successful
  if (res.success) {
    Swal.fire({
      title: "Thank You!",
      text: "Your message has been received. We’ll get back to you shortly.",
      icon: "success"
    });    
    event.target.reset();
  }
};

  return (
    <div className='ContactWrapp-Div'>
      <h2 className="heading"> Start a <span>Conversation</span></h2>
      <div className="formDiv">
    <form onSubmit={onSubmit} id="contactForm">
        <div className="input-box">
            <input type="text" placeholder="Full Name" id="name" name='name' required />
            <input type="text" placeholder="Email Address" id="email" name='email' required />
        </div>
        <div className="input-box">
            <input type="number" placeholder="Mobile Number" id="phone" name='phone' required />
            <input type="text" placeholder="Email Subject" id="subject" name='subject' required />
        </div>
        <div className="textAreaDiv">
         <textarea id="message" cols="30" rows="11" placeholder="Your Message" name='message' required></textarea>
         </div>
        <div className='btn-div'>
            <input type="submit" value="Send Message" className="Btn" />
        </div>
    </form>
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
