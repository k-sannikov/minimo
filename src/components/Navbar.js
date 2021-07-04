import { useEffect } from "react";
import { NavLink } from "./NavLink";

export function Navbar() {
  useEffect(() => {
    function handleButtonClick() {
      document.querySelector(".navbar__links").classList.toggle("close");
    }
    document.getElementById("menu").addEventListener("click", handleButtonClick);
    return () => {
      document.getElementById("menu").removeEventListener("click", handleButtonClick);
    };
  }, []);
  return (
    <header className="header">
      <nav className="navbar">
        <div className="header__button" id="menu"></div>
        <a className="navbar__logo" href="#">minimø</a>
        <div className="navbar__links close">
          <NavLink value="lifestyle" href="#" />
          <NavLink value="photodiary" href="#" />
          <NavLink value="music" href="#" />
          <NavLink value="travel" href="#" />
        </div>
      </nav>
    </header>
  );
}