const WhyChooseUs = () => {
  return (
    <section className="why-us">

      <div className="left">

        <h2>
          Why organizers
          <br />
          love us
        </h2>

        <ul>
          <li>Free to create and manage events</li>
          <li>Responsive design</li>
          <li>Search attendees easily</li>
          <li>Instant ticket generation</li>
          <li>Real-time attendance tracking</li>
        </ul>

        <button className="primary-btn">
          Start Creating Events
        </button>

      </div>

       <div class="right">
             <div class="mockup">
              <div class="bar"></div>
              <div class="line"></div>
              <div class="line short"></div>

              <div class="boxes">
               <div></div>
               <div></div>
              </div>

              <div class="footer-bar"></div>
           </div>
          </div>
    </section>
  );
};

export default WhyChooseUs;