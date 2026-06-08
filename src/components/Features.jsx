const Features = () => {
  return (
    <section className="features">

      <h2>
        Everything you need toooo
        <br />
        host amazing events
      </h2>
      <p>Powerful features designed to make event management a breeze</p>

      <div className="feature-grid">

        <div className="feature-card">
          <h3>Easy Event Creation</h3>
          <p>
            Create and customize events in minutes.
          </p>
        </div>

        <div className="feature-card">
          <h3>RSVP Management</h3>
          <p>
            Track attendees and manage capacity.
          </p>
        </div>

        <div className="feature-card">
          <h3>Digital Tickets</h3>
          <p>
            Generate unique tickets instantly.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;