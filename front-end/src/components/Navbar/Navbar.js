import "./Navbar.scss";

export default function Navbar({ links }) {
  return (
    <div className="Navbar">
      <ul className="Navbar-container">
        {links.map((link) => (
          <li className="Navbar-item">
            <a href={`/${link.name === "Home" ? "" : link.name.toLowerCase()}`} className="Navbar-link">
              <i className={`bi bi-${link.icon}`} /> {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
