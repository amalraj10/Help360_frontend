import React from 'react';

const AnnouncementSection = () => {
  const messages = [
    { text: "Welcome to Thillenkery Village Announcement Group!" },
    { text: "Important notice: Village cleanup scheduled for this Saturday at 10 AM." },
    { text: "Reminder: Community meeting tomorrow at 7 PM in the village hall." }
  ];

  return (
    <div className="announcement-section">
      <div className="announcement-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementSection;
