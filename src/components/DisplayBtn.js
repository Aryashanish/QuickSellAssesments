import React from 'react';
import './css/displayBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons';

function DisplayBtn({ addGroupingComponent, addPriorityComponent , addUserComponent}) {
  const [isCardVisible, setIsCardVisible] = React.useState(false);

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
              <label onClick={addUserComponent}>User(Default)</label>
            </div>
            <div className="vertical-label">
              <label onClick={addGroupingComponent}>Grouping</label>
            </div>
            <div className="vertical-label">
              <label onClick={addPriorityComponent}>Priority</label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayBtn;
