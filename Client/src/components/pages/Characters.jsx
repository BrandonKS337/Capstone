import React, { useState, useEffect } from "react";
import CreateCharacterOverlay from "../overlays/CreateCharacterOverlay";
import "../styles/CharactersPage.css"

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOverlay, setShowOverlay] = useState(false)

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    setSearchTerm(""); // Reset the search term when showing the overlay
  }


  useEffect(() => {
    fetchCharacters();
  }, []); //sets to empty array. the fetch command will fill it but this array needs placed to designate it exists to be filled

  const fetchCharacters = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/heroes"); // Adjust the URL as needed
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.hero_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pageContainer">
      <h1>My Characters</h1>
      <div>
        <input
          className="filterBar"
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={toggleOverlay}>Create Character</button>
        {showOverlay && <CreateCharacterOverlay onClose={toggleOverlay} />}
      </div>
      <div className="characterCards">
        {filteredCharacters.map((character) => (
          <div key={character.hero_id} className="character-card">
            <h2>{character.hero_name}</h2>
            <p>Level: {character.hero_level}</p>
            <p>Xp: {character.xp}</p>
            <p>Race: {character.race_id}</p>
            {/* Probably will just need to manually take in race.....cant get damn foreign key to work. */}
          </div>
        ))}
      </div>
    </div>
  );
};
