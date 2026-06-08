import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const btn = () => {
    navigate('/')
  }
  return (
    <nav className="navbar">
      <h2 onClick={()=>btn()}>Gather<span style={{ color: '#E57591', cursor:"pointer" }}>ly</span></h2>

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