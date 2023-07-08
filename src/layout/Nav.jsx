import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list__item"><NavLink to="/">Home</NavLink></li>
        <li className="nav-list__item"><NavLink to="#basics">Basics</NavLink></li>
        <li className="nav-list__item"><NavLink to="#wudu">Wudu</NavLink></li>
        <li className="nav-list__item"><NavLink to="#salah">Salah</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
