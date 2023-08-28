import React from "react";
import "../styles/BattlePit.css";

import sendIcon from "../assets/quill_send.svg"; // Import the send icon

export const BattlePit = () => {
  return (
    <div className="arena-container">
      <h1>The Battle Pitt</h1>
      <div className="encounters-container">
        <div className="far-left">
          <button className="allies-container">Click to Add Allies</button>
        </div>
        <div className="middle">
          <button className="enemies-container">Click to Add Enemies</button>
        </div>
        <div className="far-right">
          <div className="results-chat-container">Roll/racking //chat container</div>
          <div className="encounter-tracker">
            <div className="chatbox-container">
              <input type="text" className="chatbox" placeholder="I'm the chatbox" />
              <button className="icon">
                <img src={sendIcon} alt="Send" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
