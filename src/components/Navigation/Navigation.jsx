import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationData } from "../../data/navigationData";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleDropdown = (itemName) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [itemName]: !prevOpenItems[itemName],
    }));
  };

  const renderIcon = (IconComponent) => {
    return IconComponent ? <IconComponent className="list-icon" /> : null;
  };

  return (
    <nav className="navigation-sidebar-container">
      {navigationData.map((section, sectionIndex) => (
        <div key={sectionIndex} className={`card ${section.type}-card`}>
          {/* User Info & Favorites Tabs */}
          {section.type === "user" ? (
            <div className="user-info">
              {renderIcon(section.icon)}
              <span className="user-name">{section.name}</span>
            </div>
          ) : section.title === "Favorites" ? (
            <div className="favorites-tabs">
              <span className="tab-item active-tab">Favorites</span>
              <span className="tab-item">Recently</span>
            </div>
          ) : (
            <h3
              className="section-title"
              onClick={() =>
                section.collapsible && toggleDropdown(section.title)
              }
            >
              {section.title}
              {section.collapsible && (
                <FaAngleDown
                  className={`list-arrow ${
                    openItems[section.title] ? "open" : ""
                  }`}
                />
              )}
            </h3>
          )}

          <ul className="navigation-list">
            {section.items &&
              section.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.url ? (
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `list-item ${isActive ? "active-item" : ""} ${
                          item.dot ? "favorites-item" : ""
                        }`
                      }
                      onClick={() =>
                        item.collapsible && toggleDropdown(item.name)
                      }
                    >
                      {item.collapsible && (
                        <FaAngleRight
                          className={`list-arrow-left ${
                            openItems[item.name] ? "open" : ""
                          }`}
                        />
                      )}
                      {item.dot && <span className="dot"></span>}
                      {renderIcon(item.icon)}
                      {item.name}
                    </NavLink>
                  ) : (
                    <li
                      className="list-item"
                      onClick={() =>
                        item.collapsible && toggleDropdown(item.name)
                      }
                    >
                      {item.collapsible && (
                        <FaAngleRight
                          className={`list-arrow-left ${
                            openItems[item.name] ? "open" : ""
                          }`}
                        />
                      )}
                      {renderIcon(item.icon)}
                      {item.name}
                    </li>
                  )}
                  {/* Dropdown Sub-Items */}
                  {item.subItems && (
                    <div
                      className={`sub-menu ${
                        openItems[item.name] ? "open" : ""
                      }`}
                    >
                      <ul className="sub-menu-list">
                        {item.subItems.map((subItem, subItemIndex) => (
                          <li key={subItemIndex}>
                            <NavLink
                              to={subItem.url}
                              className={({ isActive }) =>
                                `list-item sub-item ${
                                  isActive ? "sub-active-item" : ""
                                }`
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
