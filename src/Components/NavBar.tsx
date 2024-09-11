import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <ul className="flex gap-20">
        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            Acerca de nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive ? "font-bold" : "font-normal"
            }
          >
            Contactanos
          </NavLink>
        </li>
      </ul>
    </>
  );
}
