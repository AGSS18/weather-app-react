import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <ul className="favorites" id="favorites">
        <li className="city-one">Paris</li>
        <li className="city-two">Lisbon</li>
        <li className="city-three">Sydney</li>
        <li className="city-four">San Francisco</li>
        <li className="city-five">Monterrey</li>
        <li className="edit">
          <i className="fas fa-pencil-alt"></i>
        </li>
      </ul>
      <div className="search-container">
        <form id="search-form">
          <input
            type="text"
            placeholder="search..."
            size="25px"
            className="search-city"
            id="search-city"
          />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
          <button
            type="button"
            className="location-button"
            id="location-button"
          >
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <button type="button" className="plus-icon" id="plus-icon">
            <i className="fas fa-plus"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
