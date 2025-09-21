import React from "react";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import "./style/StatCard.css";

const StatCard = ({ title, value, change, className }) => (
  <div className={`stat-card ${className}`}>
    <div className="stat-card-title">{title}</div>
    <div className="stat-card-content">
      <div className="stat-card-value">{value}</div>
      <div
        className={`stat-card-change ${
          change.startsWith("+") ? "change-positive" : "change-negative"
        }`}
      >
        {change}%
        {change.startsWith("+") ? (
          <IoMdTrendingUp className="change-icon" />
        ) : (
          <IoMdTrendingDown className="change-icon" />
        )}
      </div>
    </div>
  </div>
);

export default StatCard;
