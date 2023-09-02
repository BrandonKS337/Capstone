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
          <div className="buttons-container">
            <button className="filter-button">
              <div className="button">Ability Scores</div>
            </button>
            <button className="filter-button">
              <div className="button">Alignments</div>
            </button>
            <button className="filter-button">
              <div className="button">Backgrounds</div>
            </button>
            <button className="filter-button">
              <div className="button">Classes</div>
            </button>
            <button className="filter-button">
              <div className="button">Conditions</div>
            </button>
            <button className="filter-button">
              <div className="button">Damage Types</div>
            </button>
            <button className="filter-button">
              <div className="button">Equipment</div>
            </button>
            <button className="filter-button">
              <div className="button">Equipment Categories</div>
            </button>
            <button className="filter-button">
              <div className="button">Feats</div>
            </button>
            <button className="filter-button">
              <div className="button">Features</div>
            </button>
            <button className="filter-button">
              <div className="button">Languages</div>
            </button>
            <button className="filter-button">
              <div className="button">Magic Items</div>
            </button>
            <button className="filter-button">
              <div className="button">Magic Schools</div>
            </button>
            <button className="filter-button">
              <div className="button">Monsters</div>
            </button>
            <button className="filter-button">
              <div className="button">Proficiencies</div>
            </button>
            <button className="filter-button">
              <div className="button">Races</div>
            </button>
            <button className="filter-button">
              <div className="button">Rule Sections</div>
            </button>
            <button className="filter-button">
              <div className="button">Rules</div>
            </button>
            <button className="filter-button">
              <div className="button">Skills</div>
            </button>
            <button className="filter-button">
              <div className="button">Spells</div>
            </button>
            <button className="filter-button">
              <div className="button">Subclasses</div>
            </button>
            <button className="filter-button">
              <div className="button">Subraces</div>
            </button>
            <button className="filter-button">
              <div className="button">Traits</div>
            </button>
            <button className="filter-button">
              <div className="button">Weapon Properties</div>
            </button>
          </div>
        </div>
        <div className="bottomRight">
          {/* include the whit background and this is where the data will all display */}
          <div className="results-container">
            {" "}
            <img src="./src/components/assets/LibraryMaterials/library screenshot.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
