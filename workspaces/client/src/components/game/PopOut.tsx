import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="menu">
      <button className="toggle" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? "Link anzeigen" : "Link verstecken"}
      </button>
      <div className={`menuCode${menuOpen ? " show-menu" : ""}`}>
        <div
          className="link"
          id="linkText"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          {window.location.href}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
