import React, { useState } from 'react';
import './styles.css';  // Import CSS file for styling
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Icon } from '@mui/material';

const PanchayatMedia = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText }]);
      setInputText('');
    }
  };

  return (
    <div className="panchayat-media-container">
      <h2 className="section-heading">Panchayat Media</h2>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          className="message-input"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
<Icon  baseClassName="fas" className="fa-plus-circle me-3" color="primary" />


        <button className="send-button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default PanchayatMedia;
