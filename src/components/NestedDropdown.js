import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons';
import './css/nesteddropdown.css';

const Display = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div className="filter-container">
      <div className="filter-button">
        <button onClick={toggleCardVisibility} className="bordered-button">
          <FontAwesomeIcon icon={faSliders} className="icon" />
          Display
          <FontAwesomeIcon icon={faChevronDown} className="icon dropdown-icon" />
        </button>
      </div>

      {isCardVisible && (
        <div className="filter-card">
          <div className="filter-labels">
            <div className="vertical-label">
              <label>Grouping</label>
              <button className="bordered-button">
                Status
                <FontAwesomeIcon icon={faChevronDown} className="icon dropdown-icon" />
              </button>
            </div>
            <div className="vertical-label">
              <label>Priority</label>
              <button className="bordered-button">
                Priority
                <FontAwesomeIcon icon={faChevronDown} className="icon dropdown-icon" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Display;