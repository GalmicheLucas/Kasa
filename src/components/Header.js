import { NavLink } from "react-router-dom";
import logoKasa from "../images/logo.png";
import "../sass/layout/header.scss"

import React from 'react'

function Header() {
  return (
    <header className="Header">
      <img src={logoKasa} alt="Kasa Logo" />
        <nav>
            <ul>
                <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}>
                <li>Accueil</li>
                </NavLink>
                <NavLink to ="about" className={({isActive}) => (isActive ? "underline" : "")}>
                    <li>A propos</li>
                    </NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header
