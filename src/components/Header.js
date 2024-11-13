import { NavLink } from "react-router-dom";
import logoKasa from "../images/logo.png";

import React from 'react'

function Header() {
  return (
    <header>
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
