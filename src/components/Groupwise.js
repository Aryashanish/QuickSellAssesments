import React from 'react';
import './css/nev.css';
import Card from './card'; // Make sure the file name matches the component name
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize,faSpinner, faBarsProgress, faBan, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

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

function Groupwise() {

  const noofbacklog = ticketData.tickets.filter((ticket) => ticket.status === "Backlog").length;
  const nooftodo = ticketData.tickets.filter((ticket) => ticket.status === "Todo").length;
  const noofprogress = ticketData.tickets.filter((ticket) => ticket.status === "In progress").length;
  const noofdone = ticketData.tickets.filter((ticket) => ticket.status === "Done").length;
  const noofcencel = ticketData.tickets.filter((ticket) => ticket.status === "Cenceled").length;

  return (
    <div className="main">
      <div className="navbar">
      <div id="backlog" className="colgrid">
            <div className='topofcolGrid'>
                <FontAwesomeIcon icon={faWindowMinimize} />
                <h4>Backlog  <span>{noofbacklog}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.status === "Backlog")
                    .map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
                {/* Map over the "Todo" tickets and render a Card component for each */}
        <div id="todo" className="colgrid">
            <div className='topofcolGrid'>
                    <FontAwesomeIcon icon={faSpinner} />
                    <h4>Todo  <span>{nooftodo}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.status === "Todo")
                    .map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
        {/* Map over the "In progress" tickets and render a Card component for each */}
        <div id="inprogress" className="colgrid">
            <div className='topofcolGrid'>
                <FontAwesomeIcon icon={faBarsProgress} />
                <h4>In Progress  <span>{noofprogress}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.status === "In progress")
                    .map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
        {/* Map over the "Done" tickets and render a Card component for each */}
        <div id="done" className="colgrid">
            <div className='topofcolGrid'>
                <FontAwesomeIcon icon={faCheckCircle} />
                <h4>Done  <span>{noofdone}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.status === "Done")
                    .map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
        {/* Map over the "Canceled" tickets and render a Card component for each */}
        <div id="cancel" className="colgrid">
            <div className='topofcolGrid'>
                <FontAwesomeIcon icon={faBan} />
                <h4>Canceled  <span>{noofcencel}</span></h4>
            </div>
            <div className='downofcolGrid'>
                {ticketData.tickets
                    .filter((ticket) => ticket.status === "Cenceled")
                    .map((ticket) => (
                    <Card key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Groupwise;
