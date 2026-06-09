import { useState } from 'react';
import Footer from "../components/Footer";
import { IoTicketOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarDateFill } from "react-icons/bs";
import NavbarTwo from '../components/NavbarTwo';
import CreateEventModal from '../components/CreateEventModal';
import CheckInModal from '../components/CheckInModal';





const myEvents = [
{
id: 1,
title: "Freshers Football Match",
description:
"An upcoming match with Lasu year 1 students. Register to be part of the amazing team.",
date: "Wed, Jun 17 2026",
time: "04:15 PM",
location: "Lasu Football Pitch, Lagos",
attendees: "01/150",
price: "Free",
},
];


const Dashboard = () =>{
    const [openMenuId, setOpenMenuId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [checkInEvent, setCheckInEvent] = useState(null);

    return(
        <>
        <NavbarTwo />
        <CreateEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <CheckInModal isOpen={!!checkInEvent} onClose={() => setCheckInEvent(null)} eventTitle={checkInEvent?.title} />
        <section className="dashboard-page">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
               <div>
                 <h1>My Events Dashboard</h1>
                 <p>Manage your events and check-in attendees</p>
               </div>
               <button
                 onClick={() => setModalOpen(true)}
                 style={{
                   background: '#800020',
                   color: '#fff',
                   border: 'none',
                   borderRadius: '8px',
                   padding: '13px 22px',
                   fontSize: '14px',
                   fontWeight: '600',
                   cursor: 'pointer',
                   fontFamily: 'Poppins, sans-serif',
                 }}
               >
                 + Create New Event
               </button>
             </div>
              <div className="dashboard-grid"> {myEvents.map((event) => ( 
                <div className="dashboard-card" key={event.id}> 
                <div className="card-banner"> 
                    <button
                      className="menu-btn"
                      aria-label="Open event menu"
                      onClick={() => setOpenMenuId(openMenuId === event.id ? null : event.id)}
                    >⋮</button>
                    {openMenuId === event.id && (
                      <div className="dropdown-menu">
                        <button type="button">Edit Event</button>
                        <button type="button">Share Event</button>
                       
                      </div>
                    )}
                </div> 
                <div className="card-content"> 
                    <h3>{event.title}</h3> 
                    <p>{event.description}</p>
                     
                    <p> <span style={{ backgroundColor:"white", padding:"6px", marginBlockStart:"-20px", borderRadius:"10%", display:"inline-block", color:"#E57591", marginBottom:"6px" }}>
                            <BsCalendarDateFill />
                             </span> {event.date} &nbsp; {event.time}</p> 
                    <p> <span style={{ backgroundColor:"white", padding:"6px", marginBlockStart:"-20px", borderRadius:"10%", display:"inline-block", color:"#E57591", marginBottom:"6px" }}>
                            <CiLocationOn />
                             </span> {event.location}</p>
                    <p> <span style={{ backgroundColor:"white", padding:"6px", marginBlockStart:"-20px", borderRadius:"10%", display:"inline-block", color:"#E57591", marginBottom:"6px" }}>
                            <HiOutlineUsers />
                             </span> {event.attendees} Attendees</p> 
                    <p> <span style={{ backgroundColor: "white", padding:"6px", marginBlockStart:"-20px", borderRadius:"10%", display:"inline-block", color:"#E57591", marginBottom:"6px" }}><IoTicketOutline /></span>
                    {event.price}</p> 
                <div className="dashboard-actions"> 
                    <button className="checkin-btn" onClick={() => setCheckInEvent(event)}> Check-In Attendee </button>
                    <button className="delete-btn"> Delete Event </button>
                 </div>
                  </div> 
                  </div> 
                ))} 
                </div> 
                </section> 
                <Footer />

        </>
        
    );
};

export default Dashboard;