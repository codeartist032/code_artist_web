import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

export default function Contact() {
  const { lang } = useLang();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSend = () => {
    const phone = '963959860097'; // Your WhatsApp number
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedText}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sube-title">{lang === 'en' ? 'Contact Us' : 'تواصل معنا'}</h1>
            <p><i className="fa-solid fa-paper-plane"></i> code96392@gmail.com </p>
            <p><i className="fa-solid fa-phone-volume"></i> +963 0959860097 </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'en' ? 'Your Name' : 'اسمك'}
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'en' ? 'Your Email' : 'بريدك الإلكتروني'}
                required
              />
              <textarea
                name="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={lang === 'en' ? 'Your Message' : 'رسالتك'}
              ></textarea>

              <button type="button" className="btn btn2" onClick={handleWhatsAppSend}>
                {lang === 'en' ? 'Send via WhatsApp' : 'أرسل عبر واتساب'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
