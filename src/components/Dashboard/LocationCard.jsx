import React from "react";
import { LOCATION_DATA } from "../../data/dashboardData";
import "./style/LocationCard.css";
import worldMap from "../../assets/world_map.png";

const LocationCard = () => (
  <div className="chart-card location-card">
    <div className="chart-title">Revenue by Location</div>
    <div className="world-map-image-container">
      <img src={worldMap} alt="World Map with locations" />
    </div>
    <ul className="location-list">
      {LOCATION_DATA.map((location, index) => (
        <li key={index}>
          <div className="list-item-content">
            <span className="location-city">{location.city}</span>
          </div>
          <span className="location-value">{location.value}K</span>
        </li>
      ))}
    </ul>
  </div>
);

export default LocationCard;
