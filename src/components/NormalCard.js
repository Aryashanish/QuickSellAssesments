import React from 'react';
import './css/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation,faWifiStrong, faLayerGroup, faSignal,faWindowMinimize,faSpinner, faBarsProgress, faBan, faCheckCircle , faCircle} from '@fortawesome/free-solid-svg-icons';

function NormalCard({ ticket }) {
  const str = ticket.userId;
  let statusIcon;
  let priorityIcone;

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

  switch(ticket.priority) {
    case 0:
        priorityIcone = faExclamation;
        break;
    case 1:
        priorityIcone = faWindowMinimize;
        break;
    case 2:
        priorityIcone = faLayerGroup;
        break;
    case 3:
        priorityIcone = faWifiStrong;
        break;
    case 4:
        priorityIcone = faSignal;
        break;
    default:
        priorityIcone = faExclamation; // Default icon if status is unknown
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
            <FontAwesomeIcon icon={priorityIcone} />
            <FontAwesomeIcon icon={faCircle} id='sapicone' />
            <p>{ticket.tag.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default NormalCard;
