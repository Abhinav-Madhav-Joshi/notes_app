import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/" className={({ isActive }) => isActive ? "active-class homelink" : "homelink"}>
        <span class="material-icons-outlined" style={{fontSize:"2.5cap"}}>home</span>
        <span className="links">Home</span>
      </NavLink>
      <NavLink to="/archive" className={({ isActive }) => isActive ? "active-class asb" : "asb"}>
        <span class="material-icons-outlined" style={{fontSize:"2.5cap"}}>archive</span>
        <span className="links">Archive</span>
      </NavLink>
      <NavLink to="/starred" className={({ isActive }) => isActive ? "active-class asb" : "asb"}>
        <span class="material-icons-outlined" style={{fontSize:"2.5cap"}}>star_border</span>
        <span className="links">Starred</span>
      </NavLink>
      <NavLink to="/bin" className={({ isActive }) => isActive ? "active-class asb" : "asb"}>
        <span class="material-icons-outlined" style={{fontSize:"2.5cap"}}>delete</span>
        <span className="links">Bin</span>
      </NavLink>
    </aside>
  );
};
