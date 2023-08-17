import React, { useState } from "react";
import "../styles/CreateCharacterOverlay.css"; // import your CSS file

const CreateCharacterOverlay = ({ onClose }) => {
    const [characterInfo, setCharacterInfo] = useState({
        name: "",
        level: "",
        race: "",
        class: "",
        background: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCharacterInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    return (
        <div className="overlay">
            <div className="overlay-content">
                <div className="left-group">
                    <h2>Create Character</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={characterInfo.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="level"
                        placeholder="Level"
                        value={characterInfo.level}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="race"
                        placeholder="Race"
                        value={characterInfo.race}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="class"
                        placeholder="Class"
                        value={characterInfo.class}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="background"
                        placeholder="Background"
                        value={characterInfo.background}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="right-group">
                    <h3>STATS: </h3>
                    <div className="stats-box">
                        <p>Health Points: {/* Add your logic for Health Points here */}</p>
                        <p>Hit Chance: {/* Add your logic for Hit Chance here */}</p>
                        <p>Attack Damage: {/* Add your logic for Attack Damage here */}</p>
                        <p>Armor Class: {/* Add your logic for Armor Class here */}</p>
                        <p>Initiative Bonus: {/* Add your logic for Initiative Bonus here */}</p>
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
