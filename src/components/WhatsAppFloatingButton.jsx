import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloatingButton.css';

const WhatsAppFloatingButton = () => {
  const whatsappNumber = '96181725930'; // without the plus (+)
  const message = encodeURIComponent('Hi Omar, I visited your portfolio and would like to chat!');

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppFloatingButton;
