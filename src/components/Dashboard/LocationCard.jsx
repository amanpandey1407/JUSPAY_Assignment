import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { LOCATION_DATA } from "../../data/dashboardData";
import "./style/LocationCard.css";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const LocationCard = () => (
  <div className="chart-card location-card">
    <div className="chart-title">Revenue by Location</div>
    <div className="world-map-image-container">
      <ComposableMap
        projection="geoEqualEarth"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="map-geographies"
              />
            ))
          }
        </Geographies>
        {LOCATION_DATA.map(({ city, coordinates }) => (
          <Marker
            key={city}
            coordinates={coordinates}
            className="location-marker"
          >
            <circle r={15} />
          </Marker>
        ))}
      </ComposableMap>
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
