import React, { useState, useEffect } from "react";
import CreateCharacterOverlay from "../overlays/CreateCharacterOverlay";
import "../styles/CharactersPage.css";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const [editingHeroId, setEditingHeroId] = useState(null);
  const [editedCharacter, setEditedCharacter] = useState({});

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

  const handleCardClick = (hero_id, isCurrentCardEditing) => {
    if (!isCurrentCardEditing) {
      setFlippedCards((prevFlips) => ({
        ...prevFlips,
        [hero_id]: !prevFlips[hero_id],
      }));
    }
  };

  const updateCharacter = async (hero_id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/heroes/${hero_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedCharacter),
        }
      );

      if (response.status !== 200) {
        const errorData = await response.json();
        console.error("Error updating character: ", errorData.message);
        return;
      }
      // Refresh or update local data if needed.
      fetchCharacters();
    } catch (error) {
      console.error("Error updating character: ", error);
    }
  };

  const deleteCharacter = async (hero_id) => {
    //adding in confirmation for delete option prior to sending fetch request
    const character = characters.find((char) => char.hero_id === hero_id);
    const characterName = character ? character.hero_name : "this character";

    const userConfirmed = window.confirm(
      `Are you sure you want to delete ${characterName}?`
    );

    if (!userConfirmed) {
      return; //at this point if user did not "confirm" deletion the function stops closing the warning.
    }
    //if user clicks yes....proceeds to try statement and runs delete through delete method

    try {
      const response = await fetch(
        `http://localhost:8000/api/heroes/${hero_id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status !== 200) {
        const errorData = await response.json();
        console.error("Error deleting character: ", errorData.message);
        return;
      }

      // if that works filter out deleted hero from the array
      const updatedCharacters = characters.filter(
        (character) => character.hero_id !== hero_id
      );
      setCharacters(updatedCharacters);
    } catch (error) {
      console.error("Error deleting character: ", error);
    }
  };

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
        {filteredCharacters.map((character) => {
          const isCurrentCardEditing = character.hero_id === editingHeroId;

          return (
            <div
              key={character.hero_id}
              className={`character-card ${
                flippedCards[character.hero_id] ? "flipped" : ""
              }`}
              onClick={() =>
                handleCardClick(character.hero_id, isCurrentCardEditing)
              }
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
                    <h2>
                      {isCurrentCardEditing ? (
                        <input
                          value={editedCharacter.hero_name || ""}
                          onChange={(e) =>
                            setEditedCharacter((prevState) => ({
                              ...prevState,
                              hero_name: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        character.hero_name
                      )}
                    </h2>
                    <div className="level-circle">{character.hero_level}</div>
                  </div>
                  <div className="stats edit-section">
                    <p>
                      Race:
                      {isCurrentCardEditing ? (
                        <input
                          value={editedCharacter.race_id || ""}
                          onChange={(e) =>
                            setEditedCharacter((prevState) => ({
                              ...prevState,
                              race_id: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        character.race_id
                      )}
                    </p>
                    <p>
                      Class:
                      {isCurrentCardEditing ? (
                        <input
                          value={editedCharacter.class_id || ""}
                          onChange={(e) =>
                            setEditedCharacter((prevState) => ({
                              ...prevState,
                              class_id: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        character.class_id
                      )}
                    </p>
                    <p>
                      XP:
                      {isCurrentCardEditing ? (
                        <input
                          type="number"
                          maxLength="10"
                          pattern="\d*"
                          value={editedCharacter.xp || ""}
                          onChange={(e) => {
                            if (
                              e.target.value.length <= 10
                            ) {
                              setEditedCharacter((prevState) => ({
                                ...prevState,
                                xp: e.target.value,
                              }));
                            }
                          }}
                        />
                      ) : (
                        character.xp
                      )}
                    </p>
                  </div>
                  <div className="background edit-section">
                    <p>
                      <strong>Background: </strong>
                      {isCurrentCardEditing ? (
                        <input
                          value={editedCharacter.background || ""}
                          onChange={(e) =>
                            setEditedCharacter((prevState) => ({
                              ...prevState,
                              background: e.target.value,
                            }))
                          }
                        />
                      ) : (
                        character.background
                      )}
                    </p>
                  </div>
                  <div className="edit-delete-buttons">
                    <button
                      className="edit-button"
                      onClick={(e) => {
                        e.stopPropagation(); //prevents the card flip
                        if (isCurrentCardEditing) {
                          updateCharacter(character.hero_id);
                          setEditingHeroId(null);
                        } else {
                          setEditingHeroId(character.hero_id);
                          setEditedCharacter(character);
                        }
                      }}
                    >
                      {isCurrentCardEditing ? "Submit" : "Edit"}
                    </button>
                    <button
                      className="delete-button"
                      onClick={(e) => {
                        e.stopPropagation(); //this keeps the card from flipping
                        deleteCharacter(character.hero_id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//side note. Saw another post about doing max input characters like this
/* if (
    pattern="\d*"
    added to input portion \d*" d matches any digit and * matches 0 or more of preceding elemnt. is used for input type text  to make sure only numbers are entered.

    e.target.value.length <= 10 &&        // sets max .length value less or = to INT
    /^[0-9]*$/.test(e.target.value)       // this tests value of input.
    /^[0-9]*$/ = a regex pattern??
    ^ asserts position at start of line
    [0-9] = any digit between 0 and your set max
    * = quantifier that matches between 0 and unlimited occurrences of preceding element...
    $ = asserts the position at end of the line
) */
