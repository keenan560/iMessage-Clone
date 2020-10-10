import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone"
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    // Firebase post

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className="chat__messages">
        <h2>I am message</h2>
        <h2>I am message</h2>
        <h2>I am message</h2>
        <h2>I am message</h2>
        <h2>I am message</h2>
        
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send Message
          </button>
        </form>
        <IconButton>
          <MicNoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
