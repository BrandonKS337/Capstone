import React, { useState } from "react";
import "../styles/CreateCharacterOverlay.css"; // import your CSS file
import axios from "axios";
import defaultImage from "../assets/image_placeholder.jpg";

const CreateCharacterOverlay = ({ onClose }) => {
  const [characterInfo, setCharacterInfo] = useState({
    hero_name: "",
    hero_level: "",
    race_id: "",
    class_id: "",
    background: "",
    hero_image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setCharacterInfo((prevInfo) => ({
          ...prevInfo,
          hero_image: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
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
        <div className="header">
          <h2>Create Character</h2>
          <button
            className="close-button"
            onClick={onClose}
            style={{ alignSelf: "flex-end" }}
          >
            X
          </button>{" "}
        </div>
        <div className="edit-section">
          <div className="card-container">
            <div className="card-container-top">
              <div className="image-container">
                <img
                  src={characterInfo.hero_image || defaultImage}
                  alt="Uploaded Hero"
                  width="200"
                />
                <input
                  type="file"
                  name="Image"
                  accept="image/*"
                  placeholder="Image"
                  // value={characterInfo.hero_image}
                  onChange={handleImageChange}
                />
              </div>

              <div className="core-info">
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
                  type="number"
                  name="xp"
                  placeholder="XP"
                  value={characterInfo.xp}
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
              </div>
            </div>
            <div className="primary-stats-container">
              <div className="additional-stats">
                <input
                  type="number"
                  name="Strength"
                  value={characterInfo.STR}
                  onChange={handleInputChange}
                />{" "}
                Proficiency
              </div>
              <div className="additional-stats">
                <input
                  type="number"
                  name="Proficiency"
                  placeholder="Proficiency"
                  value={characterInfo.class_id}
                  onChange={handleInputChange}
                />{" "}
                Proficiency
              </div>
              <div className="additional-stats">
                <input
                  type="number"
                  name="Proficiency"
                  placeholder="Proficiency"
                  value={characterInfo.class_id}
                  onChange={handleInputChange}
                />{" "}
                Proficiency
              </div>
              <div className="additional-stats">
                <input
                  type="number"
                  name="Proficiency"
                  placeholder="Proficiency"
                  value={characterInfo.class_id}
                  onChange={handleInputChange}
                />{" "}
                Proficiency
              </div>
              <div className="additional-stats">
                <input
                  type="number"
                  name="Proficiency"
                  placeholder="Proficiency"
                  value={characterInfo.class_id}
                  onChange={handleInputChange}
                />{" "}
                Proficiency
              </div>
              <div className="additional-stats">
                <input
                  type="number"
                  name="Proficiency"
                  placeholder="Proficiency"
                  value={characterInfo.class_id}
                  onChange={handleInputChange}
                />{" "}
                Proficiency
              </div>
              <div className="additional-stats">
                <input
                  type="number"
                  name="Proficiency"
                  placeholder="Proficiency"
                  value={characterInfo.class_id}
                  onChange={handleInputChange}
                />{" "}
                Proficiency
              </div>
            </div>

            <textarea
              name="background"
              placeholder="Background"
              value={characterInfo.background}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Send it!
        </button>
      </div>
    </div>
  );
};

export default CreateCharacterOverlay;
