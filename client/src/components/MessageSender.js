import React from "react";
import { sendMessages } from "../services/api";

const MessageSender = () => {
  const handleClick = async () => {
    try {
      await sendMessages();
      alert("Messages sent successfully!");
    } catch (error) {
      alert("Failed to send messages!");
    }
  };

  return (
    <button onClick={handleClick}>
      Send Messages
    </button>
  );
};

export default MessageSender;
