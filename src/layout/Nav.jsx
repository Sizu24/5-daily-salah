import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list__item"><Link to="home" smooth={true}>Home</Link></li>
        <li className="nav-list__item"><Link to="basics" smooth={true}>Basics</Link></li>
        <li className="nav-list__item"><Link to="wudu" smooth={true}>Wudu</Link></li>
        <li className="nav-list__item"><Link to="salah" smooth={true}>Salah</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
