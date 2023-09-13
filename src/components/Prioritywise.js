import React from 'react';
import './css/nev.css';
import PriCard from './PriCard'; // Make sure the file name matches the component name
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifiStrong, faLayerGroup, faSignal, faWindowMinimize, faExclamation } from '@fortawesome/free-solid-svg-icons';

const ticketData = {
    "tickets": [
      {
        "id": "CAM-1",
        "title": "Update User Profile Page UI",
        "tag": ["Feature request"],
        "userId": "usr-1",
        "status": "Todo",
        "priority": 4
      },
      {
        "id": "CAM-2",
        "title": "Add Multi-Language Support - Enable multi-language support within the application.",
        "tag": ["Feature Request"],
        "userId": "usr-2",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-3",
        "title": "Optimize Database Queries for Performance",
        "tag": ["Feature Request"],
        "userId": "usr-2",
        "status": "In progress",
        "priority": 1
      },
      {
        "id": "CAM-4",
        "title": "Implement Email Notification System",
        "tag": ["Feature Request"],
        "userId": "usr-1",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-5",
        "title": "Enhance Search Functionality",
        "tag": ["Feature Request"],
        "userId": "usr-5",
        "status": "In progress",
        "priority": 0
      },
      {
        "id": "CAM-6",
        "title": "Third-Party Payment Gateway",
        "tag": ["Feature Request"],
        "userId": "usr-2",
        "status": "Todo",
        "priority": 1
      },
      {
        "id": "CAM-7",
        "title": "Create Onboarding Tutorial for New Users",
        "tag": ["Feature Request"],
        "userId": "usr-1",
        "status": "Backlog",
        "priority": 2
      },
      {
        "id": "CAM-8",
        "title": "Implement Role-Based Access Control (RBAC)",
        "tag": ["Feature Request"],
        "userId": "usr-3",
        "status": "In progress",
        "priority": 3
      },
      {
        "id": "CAM-9",
        "title": "Upgrade Server Infrastructure",
        "tag": ["Feature Request"],
        "userId": "usr-5",
        "status": "Todo",
        "priority": 2
      },
      {
        "id": "CAM-10",
        "title": "Conduct Security Vulnerability Assessment",
        "tag": ["Feature Request"],
        "userId": "usr-4",
        "status": "Backlog",
        "priority": 1
      }
    ],
    "users": [
      {
        "id": "usr-1",
        "name": "Anoop Sharma",
        "available": false
      },
      {
        "id": "usr-2",
        "name": "Yogesh",
        "available": true
      },
      {
        "id": "usr-3",
        "name": "Shankar Kumar",
        "available": true
      },
      {
        "id": "usr-4",
        "name": "Ramesh",
        "available": true
      },
      {
        "id": "usr-5",
        "name": "Suresh",
        "available": true
      }
    ]
  };

function Prioritywise() {

  const noPriorityCount = ticketData.tickets.filter((ticket) => ticket.priority === 0).length;
  const urgentPriorityCount = ticketData.tickets.filter((ticket) => ticket.priority === 4).length;
  const highPriorityCount = ticketData.tickets.filter((ticket) => ticket.priority === 3).length;
  const mediumPriorityCount = ticketData.tickets.filter((ticket) => ticket.priority === 2).length;
  const lowPriorityCount = ticketData.tickets.filter((ticket) => ticket.priority === 1).length;

  return (
    <div className="main">
      <div className="navbar">
        {/* Map over the "Backlog" tickets and render a Card component for each */}
        <div id="backlog" className="colgrid">
            <div className='topofcolGrid'>
                  <FontAwesomeIcon icon={faExclamation} />
            <h4>No Priority  <span>{noPriorityCount}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.priority === 0)
                    .map((ticket) => (
                    <PriCard key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
                {/* Map over the "Todo" tickets and render a Card component for each */}
        <div id="todo" className="colgrid">
            <div className='topofcolGrid'>
                    <FontAwesomeIcon icon={faSignal} />
                    <h4>Urgent Priority  <span>{urgentPriorityCount}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.priority === 4)
                    .map((ticket) => (
                    <PriCard key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
        {/* Map over the "In progress" tickets and render a Card component for each */}
        <div id="inprogress" className="colgrid">
            <div className='topofcolGrid'>
                <FontAwesomeIcon icon={faWifiStrong} />
                <h4>High Priority  <span>{highPriorityCount}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.priority === 3)
                    .map((ticket) => (
                    <PriCard key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
        {/* Map over the "Done" tickets and render a Card component for each */}
        <div id="done" className="colgrid">
            <div className='topofcolGrid'>
                <FontAwesomeIcon icon={faLayerGroup} />
                <h4>Medium Priority  <span>{mediumPriorityCount}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.priority === 2)
                    .map((ticket) => (
                    <PriCard key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
        {/* Map over the "Canceled" tickets and render a Card component for each */}
        <div id="cancel" className="colgrid">
            <div className='topofcolGrid'>
                <FontAwesomeIcon icon={faWindowMinimize} />
                <h4>Low Priority  <span>{lowPriorityCount}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.priority === 1)
                    .map((ticket) => (
                    <PriCard key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Prioritywise;
