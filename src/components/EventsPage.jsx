import Navbar from "./Navbar";
import CTA from "./CTA";
import Footer from "./Footer";

const events = [
  {
    id: 1,
    category: "Sport",
    title: "City Marathon",
    date: "June 20, 2026",
    time: "9:00 AM",
    location: "Central Park",
    attendees: 120,
    price: "Free",
    spots: "24 spots left",
  },
  {
    id: 2,
    category: "Workshop",
    title: "React Fundamentals",
    date: "June 25, 2026",
    time: "1:00 PM",
    location: "Tech Hub",
    attendees: 45,
    price: "$25",
    spots: "12 spots left",
  },
  {
    id: 3,
    category: "Conference",
    title: "Web Design Summit",
    date: "July 2, 2026",
    time: "10:00 AM",
    location: "Downtown Center",
    attendees: 250,
    price: "$99",
    spots: "32 spots left",
  },
];

const EventsPage = () => {
  return (
    <>
      <Navbar />

      <section className="events-list-page">
        <h1>Discover & Create Events</h1>

        <div className="search-filter">
          <input type="text"  placeholder="Search Events..."/>

          <select>
            <option>All</option>
            <option>Sport</option>
            <option>Workshop</option>
            <option>Conference</option>
          </select>

          <p>{events.length} Events Found</p>
        </div>

        <div className="events-list-grid">
          {events.map((event) => (
            <div className="event-item" key={event.id}>
              <div className="event-item-banner">
                <span>{event.category}</span>
              </div>

              <div className="event-item-content">
                <h3>{event.title}</h3>

                <p>
                  📅 {event.date} • {event.time}
                </p>

                <p>📍 {event.location}</p>

                <p>👥 {event.attendees} Attendees</p>

                <p>🏷 {event.price}</p>

                <div className="event-item-footer">
                  <button className="spots-btn">{event.spots}</button>
                  <button className="rsvp-btn">RSVP →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      <CTA />

      <Footer />
    </>
  );
};

export default EventsPage;