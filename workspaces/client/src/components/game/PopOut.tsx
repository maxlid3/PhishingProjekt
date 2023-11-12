import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="menu absolute top-5 right-20">
      <button className="toggle" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? "QR-Code (zu)" : "QR-Code (offen)"}
      </button>
      <div className={`menuCode${menuOpen ? " show-menu" : ""}`}>QR-Code</div>
    </nav>
  );
};

export default Menu;
