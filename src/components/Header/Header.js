import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./Logo/Logo.svg";

const Header = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_items">
        <Link className="Navbar_link" to="/">
          Главная
        </Link>
        <Link className="Navbar_link" to="/constructor">
          Конструктор
        </Link>
        <Link className="Navbar_link" to="/gallery">
          Галерея
        </Link>
        <Link className="Navbar_link" to="/about">
          О нас
        </Link>
        <Link className="Navbar_link" to="/catalog">
          Каталог
        </Link>
      </div>

      <Link to="/">
        <div className="Logo_blocks">
          <div className="logo_img">
            <img src={Logo} />
          </div>
          <div className="logo_title">
            <h2>Art Pride</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
