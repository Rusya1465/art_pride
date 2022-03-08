import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Navbar">
      <Link to="/" className="Logo">
        Animal
      </Link>
      <NavItems>
        <Link to="/">Главная</Link>
        <Link to="/constructor">Конструктор</Link>
        <Link to="/gallery">Галерея</Link>
        <Link to="/about">О нас</Link>
        <Link to="/catalog">Каталог</Link>
      </NavItems>
    </div>
  );
};

export default Header;
