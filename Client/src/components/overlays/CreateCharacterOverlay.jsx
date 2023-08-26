import React, { useState } from "react";
import "../styles/CreateCharacterOverlay.css"; // import your CSS file
import axios from "axios";

const CreateCharacterOverlay = ({ onClose }) => {
  const [characterInfo, setCharacterInfo] = useState({
    hero_name: "",
    hero_level: "",
    race_id: "",
    class_id: "",
    background: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/heroes/create",
        characterInfo
      );

      if (response.status === 200) {
        //on success do this below
        onClose(); // Close the overlay
        window.location.reload(); // Refresh the page
      } else {
        console.error("Failed to submit data:", response.data);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="left-group">
          <h2>Create Character</h2>
          <input
            type="text"
            name="hero_name"
            placeholder="Name"
            value={characterInfo.hero_name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="hero_level"
            placeholder="Level"
            value={characterInfo.hero_level}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="race_id"
            placeholder="Race"
            value={characterInfo.race_id}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="class_id"
            placeholder="Class"
            value={characterInfo.class_id}
            onChange={handleInputChange}
          />
          <textarea
            name="background"
            placeholder="Background"
            value={characterInfo.background}
            onChange={handleInputChange}
          />
          <button className="submit-button" onClick={handleSubmit}>
            Send it!
          </button>
        </div>
        <div className="right-group">
          <h3>STATS: </h3>
          <div className="stats-box">
            <p>Health Points: {/* Add your logic for Health Points here */}</p>
            <p>Hit Chance: {/* Add your logic for Hit Chance here */}</p>
            <p>Attack Damage: {/* Add your logic for Attack Damage here */}</p>
            <p>Armor Class: {/* Add your logic for Armor Class here */}</p>
            <p>
              Initiative Bonus: {/* Add your logic for Initiative Bonus here */}
            </p>
          </div>
          <button
            className="close-button"
            onClick={onClose}
            style={{ alignSelf: "flex-end" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCharacterOverlay;
