import React from "react";
import "./iMessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function iMessage() {
  return (
    <div className="imessage">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default iMessage;
