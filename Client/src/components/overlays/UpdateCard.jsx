import React, { useState } from "react";
import "../styles/UpdateCard.css";

export const UpdateCard = ({ onClose, heroId, existingData }) => {
  const [editedCharacter, setEditedCharacter] = useState(existingData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCharacter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCharacter(heroId);
  };

  const updateCharacter = async (hero_id) => {
    // Your existing update function here, but use the local editedCharacter state
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input 
            name="hero_name" 
            value={editedCharacter.hero_name || ''}
            onChange={handleInputChange}
            placeholder="Hero Name"
            required
          />
          {/* Continue with similar input fields for each attribute... */}
          <input 
            name="hero_level"
            type="number"
            value={editedCharacter.hero_level || ''}
            onChange={handleInputChange}
            placeholder="Hero Level"
            required
          />
          {/* ... */}
          {/* After all fields, add a submit button: */}
          <button type="submit">Update</button>
          <button onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

