import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="menu">
      <button className="toggle" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? "Link verstecken" : "Link anzeigen"}
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
          <img src="/copySymbol.png" id="copySymbol"></img>
        </div>
      </div>
    </nav>
  );
};

export default Menu;