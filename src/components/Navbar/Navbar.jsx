import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Art" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar glass">
      <NavLink to="/" className="navbar__logo">
        ✦ yourname.dev
      </NavLink>

      <nav className="navbar__links">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar__right">
        <ThemeToggle />
        <a
          href="/resume.pdf"
          className="navbar__resume btn-ghost"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </div>
    </header>
  );
}
