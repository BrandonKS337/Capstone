import React from "react";
import "../styles/Library.css";

export const Library = () => {
  return (
    <div className="component-container">
      <div className="top">
        {/* include page intro, searchBar, welcome message */}
        <div className="top-left">
          <h1 className="title">Welcome to the Archives:</h1>
        </div>
        <div className="top-right">
          <p>
            {" "}
            Please feel free to click one of the available filter buttons and
            then further filter the content with the search bar afterwards
          </p>
        </div>
      </div>
      <div className="searchBar">
        <input
          type="text"
          className="theBar"
          name="searchBar"
          placeholder="Search by Name, Level, class etc"
        />
      </div>
      <div className="bottom-portion">
        {/* include the two containers left and right aka nav bar/content */}
        <div className="bottomLeft">
          {/* include all of the quick filter buttons */}
          <div className="div">
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
            <button
              className="filter-button"
              alt="Create character"
              src="./src/components/assets/LibraryMaterials/Create Character Button.svg"
            >
              <div className="button">Ability-Scores</div>
            </button>
          </div>
        </div>
        <div className="bottomRight">
          {/* include the whit background and this is where the data will all display */}
          <div className="results-container"></div>
        </div>
      </div>
    </div>
  );
};
