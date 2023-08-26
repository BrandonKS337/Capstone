import React, { useState, useEffect } from "react";
import CreateCharacterOverlay from "../overlays/CreateCharacterOverlay";
import "../styles/CharactersPage.css";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    setSearchTerm(""); // Reset the search term when showing the overlay
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/heroes");
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (hero_id) => {
    setFlippedCards((prevFlips) => ({
      ...prevFlips,
      [hero_id]: !prevFlips[hero_id],
    }));
  };

  const deleteCharacter = async (hero_id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/heroes/${hero_id}`, {
        method: 'DELETE'
      });
      if (response.status !== 200) {
        const errorData = await response.json();
        console.error('Error deleting character: ', errorData.message)
        return
      }

      //if that works filter out deleted hero from the array
      const updatedCharacters = characters.filter(character => character.hero_id !==hero_id);
      setCharacters(updatedCharacters)
    } catch (error) {
      console.error('Error deleting character: ', error)
    }
  }

  const filteredCharacters = characters.filter((character) =>
    character.hero_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pageContainer">
      <div className="top-area">
        <div className="top">
          <h1>My Characters</h1>
        </div>
        <div className="filter-row">
          <input
            className="filterBar"
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={handleSearchChange}
          />{" "}
          <button onClick={toggleOverlay}>Create Character</button>
          {showOverlay && <CreateCharacterOverlay onClose={toggleOverlay} />}
        </div>
      </div>
      <div className="characterCards">
        {filteredCharacters.map((character) => (
          <div
            key={character.hero_id}
            className={`character-card ${
              flippedCards[character.hero_id] ? "flipped" : ""
            }`}
            onClick={() => handleCardClick(character.hero_id)}
          >
            <div className="card-inner">
              <div
                className="card-front"
                style={{ backgroundImage: `url(${character.image_url})` }}
              >
                <h3>{character.hero_name}</h3>
              </div>
              <div className="card-back">
                <div className="back-top-half">
                  <h2>{character.hero_name}</h2>
                  <div className="level-circle">{character.hero_level}</div>
                </div>
                <div className="stats">
                  <p>Race: {character.race_id}</p>
                  <p>Class: {character.class_id}</p>
                  <p>Xp: {character.xp}</p>
                </div>
                <div className="background">
                  <p>{character.background}</p>
                </div>
                <div className="edit-delete-buttons">
                  <button className="edit-button">Edit</button>
                  <button className="delete-button" onClick={(e) => {
                    e.stopPropagation(); //this keeps the card from flipping
                    deleteCharacter(character.hero_id)
                  }}>Delete</button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



