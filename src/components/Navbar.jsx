const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Gather<span style={{ color: '#E57591' }}>ly</span></h2>

      <div className="nav-btns">
        <button className="organizer">
          Become an Organizer →
        </button>

        <button className="login">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;