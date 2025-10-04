import { useState } from "react";

export default function Header({ onToggleModal }) {
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);

  const handleLinkClick = () => setIsBurgerMenuActive(false);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <nav className="main-nav">
          <a href="index.html" className="logo">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>
          <ul className="nav" style={{ display: isBurgerMenuActive ? "block" : "" }}>
            <li><a href="#top" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#pricing" onClick={handleLinkClick}>Pricing</a></li>
            <li><a href="#newsletter" onClick={handleLinkClick}>Newsletter</a></li>
            <li>
              <div className="gradient-button">
                <a onClick={onToggleModal}><i className="fa fa-sign-in-alt" /> Sign In</a>
              </div>
            </li>
          </ul>
          <a
            className={`menu-trigger ${isBurgerMenuActive ? "active" : ""}`}
            onClick={() => setIsBurgerMenuActive(!isBurgerMenuActive)}
          >
            <span>Menu</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
