import React from 'react'

const Message = ({ text }) => {
    return (
      <div className="message-container">
        <p>{text}</p>
      </div>
    );
  };
  
  export default Message;