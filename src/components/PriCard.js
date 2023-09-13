import React from 'react';
import './css/pricard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize,faSpinner, faBarsProgress, faBan, faCheckCircle , faCircle} from '@fortawesome/free-solid-svg-icons';

function PriCard({ ticket }) {
    const str = ticket.userId;
  
  let statusIcon;

    switch(ticket.status) {
        case 'Todo':
            statusIcon = faSpinner;
            break;
        case 'In progress':
            statusIcon = faBarsProgress;
            break;
        case 'Done':
            statusIcon = faCheckCircle;
            break;
        case 'Canceled':
            statusIcon = faBan;
            break;
        case 'Backlog':
            statusIcon = faWindowMinimize;
            break;
        default:
            statusIcon = faCircle; // Default icon if status is unknown
  }
  
  return (
    <div className="main-card">
      <div className="top-section">
        <div className="text"><p>{ticket.id}</p></div>
        <div className="top-image">
            <img src={str+'.jpg'} alt="not-found" />
        </div>
      </div>
      <div className="middle-section">
        <FontAwesomeIcon icon={statusIcon} />
        <p>{ticket.title.substring(0, 32)}...</p>
      </div>
      <div className="lower-section">        
        <div className="text">
            <FontAwesomeIcon icon={faCircle} />
            <p>{ticket.tag.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default PriCard;
