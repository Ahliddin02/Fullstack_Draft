// import { useEffect, useState } from "react";

export function MessageList({ contact, messages }) {
  // const [newMessages, setNewMessages] = useState([]);

  return (
    <div className="MessageList">
      {messages
        .filter(
          (message) =>
            (message.sender === contact.id && message.receiver === 1000) ||
            (message.sender === 1000 && message.receiver === contact.id)
        )
        .map((newMessages) => (
          <span key={newMessages.id} className="main">
            <h5 className="MessageList__h3">{newMessages.text}</h5>
          </span>
        ))}
    </div>
  );
}
